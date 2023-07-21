import { Metadata } from "next"
import { columns } from "@/components/columns"
import { DataTable } from "@/components/data/data-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getIdFromCookie } from "@/lib/auth"
import { cookies } from "next/headers"
import { data } from "autoprefixer"
import { useState } from "react"
import Container from "@/components/container"


export const metadata: Metadata = {
  title: "Budgets",
  description: "A task and issue tracker build using Tanstack Table.",
}
const getData = async () => {
  const userId = await getIdFromCookie(cookies());
  const response = await fetch('http://localhost:3000/api/user/categories/get', {
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

const postIncome = async (amount: number) => {
  const userId = await getIdFromCookie(cookies());
  const response = await fetch('http://localhost:3000/api/user/income/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: userId, income: amount }),
  })
}

const getIncome = async () => {
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

const incomeExist = async () => {
  const response = await fetch('http://localhost:3000/api/user/income/get', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },







    
  })
}

export default async function BudgetsPage() {
  const userId = await getIdFromCookie(cookies());
  const data = await getData()
  

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your Bills for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Card>
              <CardHeader></CardHeader>
              <CardDescription></CardDescription>
            </Card>
          </div>
        </div>
        <Container data={data} userId={userId} />
      </div>
    </>
  )
}
