import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  if (req.method === "GET") {
    const response = await fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}&cityCode=-`,
      {
        headers: { "X-API-KEY": process.env.RESAS_API_KEY as string },
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } else {
    res.status(404);
  }
}
