"use state"

import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"



type RowData = {
    userId: string
    name: string
    amount: number | null
    note: string
}

type IncomeEditProps = {
    rowId: string
    editRow: (rowId: string) => void
    userId: string
}


export default function IncomeEdit({ rowId, editRow, userId }: IncomeEditProps) {
    const [rowData, setRowData] = useState<RowData>({
        userId: userId,
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
            body: JSON.stringify({ userId: rowData.userId, name: rowData.name, amount: rowData.amount, note: rowData.note })
        })
    }

    return (
        <>
            <div className='grid grid-cols-2'>

                <Input
                    className='lg:cols-span-1 sm:col-span-2'
                    placeholder="Name"
                    type="text"
                    value={rowData.name}
                    onChange={(e) => setRowData({
                        userId: rowData.userId,
                        name: e.target.value,
                        amount: rowData.amount,
                        note: rowData.note
                    })}
                />

                <Input
                    className='lg:cols-span-1 sm:col-span-2'
                    placeholder="Amount"
                    type="number"
                    value={rowData.amount?.toString()}
                    onChange={(e) => setRowData({
                        userId: rowData.userId,
                        name: rowData.name,
                        amount: parseInt(e.target.value),
                        note: rowData.note
                    })}
                />

            </div>
            <div>
                <Input
                    className='w-full'
                    placeholder="Little Note"
                    type='text'
                    value={rowData.note}
                    onChange={(e) => setRowData({
                        userId: rowData.userId,
                        name: rowData.name,
                        amount: rowData.amount,
                        note: e.target.value
                    })}
                />

            </div>
            <Button className="w-full" onClick={submit}>Submit</Button>
        </>
    )
}