import { db } from '@/lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {

                 const category = await db.category.create({
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
        
           



            if (category.ok) {
                return res.status(500).json({ message: 'No' })
            } else return res.status(200).json({ user: category })

        }

    }

