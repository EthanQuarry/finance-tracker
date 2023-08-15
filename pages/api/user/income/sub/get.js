import { db } from '@/lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
       const income = await db.subincome.findMany({
        where: {
            userId: req.body.userId
        }
       })

       if (income.ok) {
            return res.status(500).json({message: 'Income does not exist'})
       } else  return res.status(200).json(income)
    } else return res.status(401).json({ message: 'wrong api method' })
}