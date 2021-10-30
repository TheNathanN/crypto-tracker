//Local Variables
const HOST_KEY = process.env.COINRANK_HOST;
const API_KEY = process.env.COINRANK_KEY;
const BING_HOST = process.env.BING_HOST;

// Fetch Coins Data
export const getCoinsData = async (endpoint, value, state) => {
  const response = await fetch(
    `https://coinranking1.p.rapidapi.com/coins?${endpoint}=${value}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': HOST_KEY,
        'x-rapidapi-key': API_KEY,
      },
    }
  );
  const resData = await response.json();
  state(resData.data.coins);
};

// Fetch the Stats Data
export const getStats = async (state, dataWanted) => {
  // Only Arguments that dataWanted should be
  const _volume = '_VOLUME';
  const _totalCoins = '_TOTAL_COINS';
  const _exchanges = '_EXCHANGES';
  const _marketCap = '_MARKET_CAP';
  const _markets = '_MARKETS';

  const response = await fetch('https://coinranking1.p.rapidapi.com/stats', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': HOST_KEY,
      'x-rapidapi-key': API_KEY,
    },
  });

  // Set State of Data
  const resData = await response.json();

  const {
    total24hVolume,
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
  } = resData.data;

  if (dataWanted === _volume) {
    state(total24hVolume);
  } else if (dataWanted === _totalCoins) {
    state(totalCoins);
  } else if (dataWanted === _exchanges) {
    state(totalExchanges);
  } else if (dataWanted === _marketCap) {
    state(totalMarketCap);
  } else if (dataWanted === _markets) {
    state(totalMarkets);
  }
};

// Fetch News Data
export const getNewsData = async (offset, state) => {
  const response = await fetch(
    `https://bing-news-search1.p.rapidapi.com/news/search?q=crypto&freshness=Day&textFormat=Raw&safeSearch=Off&offset=${offset}`,
    {
      method: 'GET',
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': BING_HOST,
        'x-rapidapi-key': API_KEY,
      },
    }
  );

  const resData = await response.json();
  state(resData.value);
};
