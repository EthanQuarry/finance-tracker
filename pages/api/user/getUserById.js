
import { db } from '@/lib/db';



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const user = await db.user.findUnique({
            where: {
                id: req.body.id,
            }
        })

            return res.status(200).json({user: user})

    } else return res.status(500).json({message: 'API method error'})
    
}