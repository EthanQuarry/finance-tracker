import { db } from '@/lib/db'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const response = await db.subincome.delete({
            where: {
                id: req.body.id
            }
        })

        if (!response.ok) {
            return res.status(200).json({ message: 'Income deleted successfully'})
        } else return res.status(500).json({ message: 'Something went wrong'})
    } else return res.status(500).json({ message: 'Wrong API method'})
}