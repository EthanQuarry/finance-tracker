"use client"

import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Icons } from "../icons"


type IncomeEditProps = {
    userId: string
}

type RowDataProps = {
    name: string
    amount: number | null
    note: string
}

export default function IncomeEdit({ userId }: IncomeEditProps) {
  const [isLoading, setIsLoading] =useState(false);  
    const [rowData, setRowData] = useState<RowDataProps>({
        name: '',
        amount: null,
        note: ''
    })
    
    
    const submit = async () => {
      const response = await fetch('/api/user/income/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userId, name: rowData.name, amount: rowData.amount, note: rowData.note })
      })

      if (response.status === 200) {
        setIsLoading(false)
        window.location.reload()
      } else alert('Something went wrong')
      
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
            name: rowData.name,
            amount: rowData.amount,
            note: e.target.value
          })}
        />

      </div>
      <Button className="w-full" onClick={submit} disabled={isLoading}>
        {isLoading && (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        )

      }Submit</Button>
    </>
  )
}