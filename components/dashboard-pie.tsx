"use client"

import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
const data01 = [
    {
        "name": "Income",
        "value": 2500,
        fill: "#adfa1d"
    },

    {
        "name": "Expenses",
        "value": 1500,
        fill: "#272e3f"
    }
];

const data02 = [
    {
        "name": "Income",
        "value": 2400,
        fill: "#adfa1d"
    },

    {
        "name": "Expenses",
        "value": 2000,
        fill: "#272e3f"
    }
]

export default function DashboardPie() {
    return (
        <>
   
                    <ResponsiveContainer maxHeight={400} minHeight={300}>
                        <PieChart>
                            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%"  outerRadius={55} legendType="circle" ></Pie>
                            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} ></Pie>
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
        
        </>
    )
}