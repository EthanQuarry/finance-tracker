import { db } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const financials = await db.financials.findUnique({
        where: {
          id: req.body.id
        }
      });

      if (financials) {
        return res.status(200).json({ financials: financials });
      } else {
        return res.status(500).json({ message: 'No financials found' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(500).json({ message: 'API method error' });
  }
}
