import { getIdFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export const getTotalIncomes = async () => {
    const id: string = await getIdFromCookie(cookies())
    const incomes = await db.income.findMany({
      where: {
        userId: id
      }
    })
    let total = 0;
    incomes.map((income) => {
      total += income.amount;
    })
  
    return total
  }