module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.coinranking.com'],
  },
  env: {
    COINRANK_HOST: process.env.COINRANK_HOST,
    COINRANK_KEY: process.env.COINRANK_KEY,
    CRYPTONEWS_HOST: process.env.CRYPTONEWS_HOST,
  },
};
