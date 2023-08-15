import { db } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const expenses = await db.expense.findMany({
      where: {
        userId: req.body.userId
      }
    })

    if (expenses.ok) {
      return res.status(404).json({ message: 'Categories not found' })
    }
    return res.status(200).json(expenses)
  }
}