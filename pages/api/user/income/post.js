import { db } from '@/lib/db'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const income = await db.income.create({
            data: {
                userId: req.body.userId,
                amount: req.body.amount,
            }
        })

        if (!income.ok) {
            return res.status(500).json({ message: 'Error' })
        } else return res.status(200).json(income.amount)
        
    }
}