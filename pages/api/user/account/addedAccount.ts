import { db } from "@/lib/db";

export default async function handler(req, res) {
   if (req.method === 'POST') {
     const user = await db.user.update({
            where: {
                id: req.body.userId
            },
            data: {
                accountAdded: true
            }
     })
     if (user) {
        return res.status(200).json(user.accountAdded)
     } return res.status(400).json({message: "User not found"})
   }
}