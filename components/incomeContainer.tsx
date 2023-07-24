"use client"

import { useState } from "react";
import IncomeTable from "./income/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
  const [rowData, setRowData] = useState<RowData>({
    id: '',
    name: '',
    amount: null,
    note: ''
  })
  const [editRowBoolean, setEditRowBoolean] = useState(false)

  const EditRow = async (rowId : EditRowProps) => {
      const submit = async () => {
        const response = await fetch('/api/user/income/put', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: rowId, name: rowData.name, amount: rowData.amount, note: rowData.note })
        })
      }
    return (
      <>
        <div className='gruserId lg:gruserId-cols-2'>

          <Input
            className='lg:cols-span-1 '
            placeholder="Name"
            type="text"
            value={rowData.name}
            onChange={(e) => setRowData({
              id: rowData.id,
              name: e.target.value,
              amount: rowData.amount,
              note: rowData.note
            })}
          />

          <Input
            className='lg:cols-span-1'
            placeholder="Amount assigned"
            type="number"
            value={rowData.amount?.toString()}
            onChange={(e) => setRowData({
              id: rowData.id,
              name: rowData.name,
              amount: parseInt(e.target.value),
              note: rowData.note
            })}
          />

        </div>
        <div className='gruserId lg:gruserId-cols-2'>
          <Input
            className='lg:cols-span-2'
            placeholder="Little Note"
            type='text'
            value={rowData.note}
            onChange={(e) => setRowData({
              id: rowData.id,
              name: rowData.name,
              amount: rowData.amount,
              note: e.target.value
            })}
          />

        </div>
        <Button onClick={submit}>Submit</Button>
      </>
    )
  }

  const EditContainer = () => {
    if (editRowBoolean) {
      return (
        <EditRow rowId={""}/>
      )
    } else return <div>it is not true</div>
  }


  return (
    <>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1">
        <Card className="md:col-span-1 lg:col-span-2 ">
          <IncomeTable data={data} EditRow={EditRow} setEditRowBoolean={setEditRowBoolean} />
        </Card>
        <Card className="md:col-span-1 lg:col-span-1">
          <CardHeader>
            Edit Income
          </CardHeader>

          <CardContent>
            <EditContainer />
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