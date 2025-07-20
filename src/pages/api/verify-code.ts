import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  // 这里假设Cloudflare Worker地址如下
  const workerUrl = `https://your-worker-id.workers.dev/api/verify?code=${code}`;
  const result = await fetch(workerUrl).then(r => r.json());
  if (result.ok) {
    res.status(200).json({ ok: true });
  } else {
    res.status(200).json({ ok: false });
  }
} 