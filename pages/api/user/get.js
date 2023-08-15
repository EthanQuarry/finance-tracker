import { db } from "@/lib/db";

export default async function handler(req, res) {
    const users = await db.user.findMany({
        include: {
            expense: true,
            income: true
        }
    });
    res.status(200).json(users);  
}