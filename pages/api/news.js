const API_KEY = process.env.API_KEY;
const BING_HOST = process.env.BING_HOST;

export default async function handler(req, res) {
  const { offset } = req.query;

  try {
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
    res.status(200).json(resData);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
