import { db } from '@/lib/db'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const createUnique = await db.unique.create({
            data: {
                name: req.body.name,
                assigned: req.body.assigned,
                available: req.body.available,
                note: req.body.note,
                owner: {
                    connect: {
                        id: req.body.userId
                    }
                },
                category: {
                    connect: {
                        id: req.body.categoryId
                    }
                }

            }
        })
        if (!createUnique.ok) {
            return res.status(200).json(createUnique)
        } else return res.status(500).json({ message: 'Error' })
    } return res.status(401).json({ message: 'Wrong API method' })
}