module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.coinranking.com', 'www.bing.com'],
  },
  env: {
    COINRANK_HOST: process.env.COINRANK_HOST,
    COINRANK_KEY: process.env.COINRANK_KEY,
    BING_HOST: process.env.BING_HOST,
  },
};
