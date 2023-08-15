import { Metadata } from "next"
import { getIdFromCookie } from "@/lib/auth"
import { cookies } from "next/headers"
import Container from "@/components/container"



export const metadata: Metadata = {
  title: "Budgets",
  description: "A task and issue tracker build using Tanstack Table.",
}
const getData = async () => {
  const userId = await getIdFromCookie(cookies());
  const response = await fetch(`${process.env.URL}/api/user/expenses/get`, {
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
            <h2 className="text-2xl font-bold tracking-tight">Expense Insights Manager</h2>
            <p className="text-muted-foreground">
              Maintain and Control your Expenses 🌧
            </p>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div>
        <Container data={data} userId={userId} />
      </div>
    </>
  )
}
