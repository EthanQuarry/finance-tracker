 "use client"

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import React from 'react';
import { Value } from "@radix-ui/react-select";



interface OverviewProps {
  income: number | null,
  expenses: number | null
}

export function Overview({ income, expenses}: OverviewProps) {

const currentDate = new Date();
const data = [
  {
    name: new Date(currentDate.getFullYear(), currentDate.getMonth() - 5, 1).toLocaleString('default', { month: 'short' }),
    Income: Math.floor(Math.random() * 5000) + 1000,
    Expenses: Math.floor(Math.random() * 5000) + 500
  },
  {
    name: new Date(currentDate.getFullYear(), currentDate.getMonth() - 4, 1).toLocaleString('default', { month: 'short' }),
    Income: Math.floor(Math.random() * 5000) + 1000,
    Expenses: Math.floor(Math.random() * 5000) + 500
  },
  {
    name: new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1).toLocaleString('default', { month: 'short' }),
    Income: Math.floor(Math.random() * 5000) + 1000,
    Expenses: Math.floor(Math.random() * 5000) + 500
  },
  {
    name: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1).toLocaleString('default', { month: 'short' }),
    Income: Math.floor(Math.random() * 5000) + 1000,
    Expenses: Math.floor(Math.random() * 5000) + 500
  },
  {
    name: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1).toLocaleString('default', { month: 'short' }),
    Income: Math.floor(Math.random() * 5000) + 1000,
    Expenses: Math.floor(Math.random() * 5000) + 500
  },
  {
    name: new Date(currentDate.getFullYear(), currentDate.getMonth() - 0, 1).toLocaleString('default', { month: 'short' }),
    Income: income,
    Expenses: expenses
  }
]





  
  
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
        <Bar dataKey="Expenses" fill="#272e3f" radius={[4, 4, 0, 0]} />
        <Tooltip cursor={false} />
        <Legend verticalAlign="top" height={36} />
      </BarChart>
      
    </ResponsiveContainer>
  )
}
