module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.coinranking.com', 'www.bing.com'],
  },
  env: {
    COINRANK_KEY: process.env.COINRANK_KEY,
    API_KEY: process.env.API_KEY,
    BING_HOST: process.env.BING_HOST,
  },
};
