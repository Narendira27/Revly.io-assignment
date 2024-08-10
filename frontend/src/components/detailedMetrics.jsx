import ElementsContainer from "./elementsContainer";

const DetailedMetrics = ({ data }) => {
  return (
    <div className="md:px-10 px-5 py-2 ">
      <div className="border p-3 md:p-5 rounded-md">
        <h1 className="md:text-2xl text-lg mb-4 font-bold text-black md:mb-8">
          Detailed Metrics
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          <ElementsContainer
            title={"Accessibility Score"}
            info={data.accessibilityScore + "/100"}
            highlight={true}
          />
          <ElementsContainer
            title={"Best Practices Score"}
            info={data.bestPracticesScore + "/100"}
            highlight={true}
          />
          <ElementsContainer
            title={"SEO Score"}
            highlight={true}
            info={data.seoScore + "/100"}
          />
          <ElementsContainer
            title={"First Contentful Paint"}
            info={data.firstContentfulPaint}
          />
          <ElementsContainer
            title={"Time to Interactive"}
            info={data.timeToInteractive}
          />
          <ElementsContainer
            title={"Total Blocking Time"}
            info={data.totalBlockingTime}
          />
          <ElementsContainer
            title={"Largest Contentful Paint"}
            info={data.largestContentfulPaint}
          />
          <ElementsContainer
            title={"Cumulative Layout Shift"}
            info={data.cumulativeLayoutShift}
          />
          <ElementsContainer title={"Speed Index"} info={data.speedIndex} />
        </div>
      </div>
    </div>
  );
};

export default DetailedMetrics;
