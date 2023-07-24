"use client"

import { useState } from "react";
import IncomeTable from "./income/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import IncomeEdit from "./income/edit";

type IncomeDataProps = {
  userId: string
  data: [
    {
      id: string
      name: string
      userId: string
      amount: number | null
      note: string
    }
  ]
}

type EditRowProps = {
  rowId: string
}

type RowData = {
  id: string
  name: string
  amount: number | null
  note: string
}


export default function IncomeContainer({ data, userId }: IncomeDataProps) {
  const [ rowId , setRowId ] = useState<EditRowProps>({
    rowId: ''
  })
  
  const [rowData, setRowData] = useState<RowData>({
    id: '',
    name: '',
    amount: null,
    note: ''
  })

  const editRow = (rowId: string) => {
    return
  }


  return (
    <>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1">
        <Card className="md:col-span-1 lg:col-span-2 ">
          <IncomeTable data={data}/>
        </Card>
        <Card className="md:col-span-1 lg:col-span-1">
          <CardHeader>
            Add Income Source
          </CardHeader>

          <CardContent>
            <IncomeEdit  userId={userId}/>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-1 ">
        {/* {selectedRow.name === 'Add Category' ? 
         null 
         : */}{
          <Card>
            <CardHeader>
              <CardTitle>
                {/* {uniqueLength === 0 && `You haven't created a Category`}{uniqueLength === 1 && categoryName}{uniqueLength > 1 && `${uniqueLength} Selected Expenses of ${categoryName}`}{selectedRow.name == '' && 'No Sub-Catagories'}  */}
              </CardTitle>
            </CardHeader>
            <CardContent>

            </CardContent>
          </Card>
        }
      </div>
    </>
  )
}