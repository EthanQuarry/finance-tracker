"use client"

import * as React from "react"
import { useState } from "react";
import BudgetsTable from "./budgetsTable";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import EditClient from "./editClient";





type Props = {
  userId: string
  data: [{
    createdAt: Date;
    id: string
    userId: string
    name: string
    amount: number | null
    note: string
  }]
}

export interface SelectedRowProps {
  id: string;
  name: string;
  assigned: number | null;
  activity: number | null;
  available: number | null;
  note: string;
  unique: [
    {
      id: string;
      name: string;
      assigned: number | null;
      activity: number | null;
      available: number | null;
      note: string;
    }
  ]
}

export interface SelectedUniqueProps {
  id: string;
  name: string;
  assigned: number | null;
  activity: number | null;
  available: number | null;
  note: string;
}

const Container = ({ userId, data }: Props) => {
  const [selectedRow, setSelectedRow] = useState<SelectedRowProps>({
    id: '',
    name: '',
    assigned: null,
    activity: 0,
    available: 0,
    note: '',
    unique: [
      {
        id: '',
        name: '',
        assigned: null,
        activity: 0,
        available: 0,
        note: '',

      }
    ]
  });
  const [selectedUnique, setSelectedUnique] = useState<SelectedUniqueProps>({
    id: '',
    name: '',
    assigned: 0,
    activity: 0,
    available: 0,
    note: '',
  });

  return (
    <>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1">
        <Card className="md:col-span-1 lg:col-span-2 ">
          <BudgetsTable data={data}/>
        </Card>
        <Card className="md:col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>{selectedRow.name === '' ? 'Add Expense' : `Add Sub-Category to ${selectedRow.name}`}</CardTitle>
          </CardHeader>
          <CardContent>
            <EditClient userId={userId} selectedRow={selectedRow} selectedUnique={selectedUnique} data={data} />
          </CardContent>
        </Card>
      </div>
    </>


  )
}

export default Container;