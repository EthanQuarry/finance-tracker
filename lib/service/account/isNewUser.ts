import { getIdFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export const isNewUser = async () => {
    const id: string = await getIdFromCookie(cookies());
    const  user  = await db.user.findUnique({
        where: {
            id: id
        }
    })
    if (user) {
        if (user.accountAdded == true) {
            return 'true'
        } return 'false'
    } return new Error("User not found")
}