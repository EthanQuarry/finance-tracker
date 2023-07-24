import { useNumberFormatters } from '@builtwithjavascript/formatters'
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getIdFromCookie } from "@/lib/auth"
import { cookies } from "next/headers"
import Container from "@/components/container"
import IncomeClient from "@/components/incomeClient"
import IncomeContainer from '@/components/incomeContainer'


export const metadata: Metadata = {
  title: "Income",
  description: "Table for creating and deleting income.",
}
const getData = async () => {
  const userId = await getIdFromCookie(cookies());
  const response = await fetch('http://localhost:3000/api/user/income/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: userId }),
  })
  if (!response.ok) {
    { { 'Something went wrong' } }
  } else {
    const data = await response.json();
    return data
  }
}


export default async function BudgetsPage() {
  const userId = await getIdFromCookie(cookies());
  const data = await getData();


  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Income Stream Manager 💸</h2>
            <p className="text-muted-foreground">
            Organize, Track, and Optimize your Multiple Streams of Income.
            </p>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div>
        <IncomeContainer data={data} userId={userId} />
      </div>
    </>
  )
}
