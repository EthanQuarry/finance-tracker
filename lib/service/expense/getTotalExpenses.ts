import { getIdFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export const getTotalExpenses = async () => {
    const id: string = await getIdFromCookie(cookies())
    const expenses = await db.expense.findMany({
      where: {
        userId: id
      }
    })
    let total = 0;
    expenses.map((expense) => {
      total += expense.amount
    })
    return total
  }