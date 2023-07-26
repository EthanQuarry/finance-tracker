import { useNumberFormatters } from '@builtwithjavascript/formatters'
import { Metadata } from "next"


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getIdFromCookie } from "@/lib/auth"
import { cookies } from "next/headers"

import Container from "@/components/container"
import IncomeClient from "@/components/incomeClient"
import ReactDOM from 'react-dom'


export const metadata: Metadata = {
  title: "Budgets",
  description: "A task and issue tracker build using Tanstack Table.",
}
const getData = async () => {
  const userId = await getIdFromCookie(cookies());
  const response = await fetch(`${process.env.URL}/api/user/categories/get`, {
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

const IncomeExist = async () => {
  const lcid = 'en-EU' // or return it from your i18n current locale
  const numberFormatters = useNumberFormatters(lcid)
  const userId = await getIdFromCookie(cookies());
  const response = await fetch(`${process.env.URL}/api/user/income/get`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId }),
  })
  const income = await response.json();
  if (response.status === 200) {

    return (
      <Card>  
        <CardHeader>
          Oh no! You don't have any money 🙀
        </CardHeader>
        <CardContent className='grid-cols-2'>
        <IncomeClient userId={userId} />
        </CardContent>
      </Card>
    )
  } else {


    return (
      <Card >
        <CardHeader>{numberFormatters.currency('EUR').format(income.amount)} Monthly Income</CardHeader>
        <CardContent><CardDescription>Ready to Assign 👍</CardDescription></CardContent>
      </Card>
    )
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
            <IncomeExist />
          </div>
        </div>
        <Container data={data} userId={userId} />
      </div>
    </>
  )
}
