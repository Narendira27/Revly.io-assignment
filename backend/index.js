const express = require("express");
const { z } = require("zod");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
// check-performance zod schema

const checkPerformanceSchema = z.object({
  url: z.string().url(),
});

app.post("/check-performance", async (req, res) => {
  if (!req.body.url) {
    return res.status(400).json({ msg: "Required Inputs not Found" });
  }

  const response = checkPerformanceSchema.safeParse(req.body);

  if (!response.success) {
    return res.status(400).json({ msg: response.error.issues[0].message });
  }
  const { url } = req.body;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  let requestCount = 0;
  let totalSize = 0;

  page.on("request", (request) => {
    requestCount++;
  });

  page.on("response", (response) => {
    response
      .buffer()
      .then((buffer) => {
        totalSize += buffer.length;
      })
      .catch((err) => {});
  });

  const startTime = new Date().getTime();

  const pageInfo = await page.goto(url);

  const loadTime = new Date().getTime() - startTime;

  const lighthouse = await import("lighthouse");

  const { lhr } = await lighthouse.default(url, {
    port: new URL(browser.wsEndpoint()).port,
    output: "json",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });

  await browser.close();

  const otherIndicators = {
    performanceScore: lhr.categories.performance.score * 100,
    accessibilityScore: lhr.categories.accessibility.score * 100,
    bestPracticesScore: lhr.categories["best-practices"].score * 100,
    seoScore: lhr.categories.seo.score * 100,
    firstContentfulPaint: lhr.audits["first-contentful-paint"].displayValue,
    timeToInteractive: lhr.audits["interactive"].displayValue,
    speedIndex: lhr.audits["speed-index"].displayValue,
    totalBlockingTime: lhr.audits["total-blocking-time"].displayValue,
    largestContentfulPaint: lhr.audits["largest-contentful-paint"].displayValue,
    cumulativeLayoutShift: lhr.audits["cumulative-layout-shift"].displayValue,
  };

  res.send({
    url,
    loadTime: loadTime.toString() + " ms",
    totalRequestSize: (totalSize / 1024).toFixed(2).toString() + " KB",
    requestCount,
    ...otherIndicators,
  });
});

app.listen(54321, () => console.log("server running in port 54321"));
