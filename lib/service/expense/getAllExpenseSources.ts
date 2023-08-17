import { getIdFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export const getAllExpenseSources = async () => {
    const id: string = await getIdFromCookie(cookies())
    const expenses = await db.expense.findMany({
      where: {
        userId: id
      }
    })
    return expenses
  }
  