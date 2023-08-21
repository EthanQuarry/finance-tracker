import { getIdFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export const getAllIncomeSources = async () => {
    const id: string = await getIdFromCookie(cookies())
    const incomes = await db.income.findMany({
      where: {
        userId: id
      }
    })
    return incomes
  }