FROM node:slim

RUN apt-get update && apt-get install -y \
  wget \
  ca-certificates \
  fontconfig \
  libx11-dev \
  libxkbcommon0 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  libgtk-3-0 \
  libgbm1 \
  libpango-1.0-0 \
  libpangocairo-1.0-0 \
  libcups2 \
  libnspr4 \
  libnss3 \
  libatspi2.0-0 \
  libxshmfence1 \
  libasound2 \
  libdrm2 \
  libxss1 \
  libxtst6 \
  libnss3 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  libgbm1 \
  && rm -rf /var/lib/apt/lists/*


RUN npm install -g puppeteer-core

RUN npx puppeteer browsers install chrome

WORKDIR /app

COPY . .

RUN npm install


EXPOSE 54321

CMD ["node", "index.js"]