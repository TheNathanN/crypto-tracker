const COINRANK_KEY = process.env.COINRANK_KEY;

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(`https://api.coinranking.com/v2/coin/${id}`, {
      method: 'GET',
      headers: {
        'x-access-token': COINRANK_KEY,
      },
    });
    const resData = await response.json();
    res.status(200).json(resData);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
