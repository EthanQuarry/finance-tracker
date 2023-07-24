import { db } from '@/lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
       const response = await db.income.findUnique({
        where: {
            userId: req.body.userId
        }
       })

       if (!response) {
            return res.status(200).json({message: 'Income does not exist'})
       } else  return res.status(500).json(response)
    } else return res.status(401).json({ message: 'wrong api method' })
}