 "use client"

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import React from 'react';


type Income ={
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  userId: string;
  amount: number;
  note: string | null;
}

type Expense = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  userId: string;
  amount: number;
  note: string | null;
}

interface OverviewProps {
  incomes: Income[]
  expenses: Expense[] 
}

type DataProps = {
  name: string,
  Income: number,
  Expenses: number
}

export function Overview({ incomes, expenses}: OverviewProps) {

const currentDate = new Date();
const data: DataProps[] = []

const groupedData: { [key: string]: { name: string; Income: number; Expenses: number } } = {};
  incomes.forEach(entry => {
    const createdAtDate = new Date(entry.createdAt);
    const name = createdAtDate.toLocaleString('en-GB', { day: 'numeric', month: 'short' });
    const key = createdAtDate.toISOString().slice(0, 10);

    if (!groupedData[key]) {
      groupedData[key] = {
        name,
        Income: 0,
        Expenses: 0,
      };
    }

    groupedData[key].Income += entry.amount;
  });

  expenses.forEach(entry => {
    const createdAtDate = new Date(entry.createdAt);
    const name = createdAtDate.toLocaleString('en-GB', { day: 'numeric', month: 'short' });
    const key = createdAtDate.toISOString().slice(0, 10);

    if (!groupedData[key]) {
      groupedData[key] = {
        name,
        Income: 0,
        Expenses: 0,
      };
    }

    groupedData[key].Expenses += entry.amount;
  });

  for (const key in groupedData) {
    data.push({
      name: groupedData[key].name,
      Income: groupedData[key].Income,
      Expenses: groupedData[key].Expenses,
    });
  }

  return (
    <ResponsiveContainer minHeight={300} maxHeight={400}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="Income" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Expenses" fill="#6A1DFA" radius={[4, 4, 0, 0]} />
        <Tooltip cursor={false} />
        <Legend verticalAlign="top" height={36} />
      </BarChart>
      
    </ResponsiveContainer>
  )
}
