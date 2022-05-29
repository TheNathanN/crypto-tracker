const COINRANK_KEY = process.env.COINRANK_KEY;

export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.coinranking.com/v2/stats', {
      method: 'GET',
      headers: {
        'x-access-token': COINRANK_KEY,
      },
    });

    // Set State of Data
    const resData = await response.json();

    res.status(200).json(resData);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
