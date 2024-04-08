import type { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = "hola, estoy aqui"
  res.status(200).json({data}  );
}