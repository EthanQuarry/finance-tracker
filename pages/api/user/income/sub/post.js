import { db } from '@/lib/db'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const income = await db.subincome.create({
            data: {
                name: req.body.name,
                amount: req.body.amount,
                note: req.body.note,
                user: {
                    connect: {
                        id: req.body.userId
                    }
                }
            }
        })

        if (income.ok) {
            return res.status(500).json({ message: 'Error' })
        } else return res.status(200).json({message: 'Successfully Added Income'})
        
    } else return res.status(401).json({ message: 'wrong api method' })
}