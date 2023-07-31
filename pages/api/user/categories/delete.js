import { db } from '@/lib/db';


export default async function handler(req, res) {
    if (req.method === "POST") {
        const category = await db.category.findUnique({
            where: { 
                id: req.body.id
            }
        })
        if (!category.ok) {
            return res.status(200).json({ message: 'category successfully deleted'})
        } else return res.status(500).json({message: 'Error Occured'})
    } else return res.status(500).json({message: 'wrong api metho'})    
} 