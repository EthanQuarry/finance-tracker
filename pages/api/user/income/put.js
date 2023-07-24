import { db } from '@/lib/db'

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const response = await db.income.update({
            where: {
                id: req.body.id
            },
            data: {
                name: req.body.name,
                amount: req.body.amount,
                note: req.body.note,
            }
        })
        if (!response.ok) {
            return res.status(200).json({ message: 'Income updated successfully'})
        } else return res.status(500).json({ message: 'Something went wrong'})
    } else return res.status(500).json({ message: 'Wrong API method'})
}