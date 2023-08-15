import { db } from '@/lib/db'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const deleteExpense = await db.expense.delete({
            where: {
                id: req.body.id
            }
        })
        if (deleteExpense.ok) {
            return res.status(500).json({ message: 'Error Occured'})
        } else return res.status(200).json({ message: 'Successfully deleted'})
    } else return res.status(401).json({ message: 'Incorrect API method'})
}