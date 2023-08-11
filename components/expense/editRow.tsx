"use client"

import { useState } from "react";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog";
import { Input } from "../ui/input";
import { TableRowActionsDataProps } from "../income/table-row-actions";


export type DataProps = {
    createdAt: Date;
    id: string
    name: string
    userId: string
    amount: number | null
    note: string
}

export default function EditRow({ rowId, data }: TableRowActionsDataProps ) {
    const [rowData, setRowData] = useState({
        createdAt: data.createdAt,
        id: data.id,
        name: data.name,
        userId: data.userId,
        amount: data.amount,
        note: data.note
    })

    const onSubmit = async () => {
        const response = await fetch('/api/user/categories/put', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rowData)
        })
        console.log(JSON.stringify(rowData))

        if (response.status === 200) window.location.reload();
    }
    return (

        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Edit</AlertDialogTitle>
                <div className='xs:grid-cols-2'>
                    <Input
                        className='lg:cols-span-1 xs:cols-span-1'
                        placeholder="Name"
                        type="text"
                        value={rowData.name}
                        onChange={(e) => setRowData({
                            createdAt: rowData.createdAt,
                            id: rowData.id,
                            name: e.target.value,
                            userId: rowData.userId,
                            amount: rowData.amount,
                            note: rowData.note
                        })}
                    />

                    <Input
                        className='xs:cols-span-1'
                        placeholder="Amount assigned"
                        type="number"
                        value={rowData.amount?.toString()}
                        onChange={(e) => setRowData({
                            createdAt: rowData.createdAt,
                            id: rowData.id,
                            name: rowData.name,
                            userId: rowData.userId,
                            amount: parseInt(e.target.value),
                            note: rowData.note
                        })}
                    />
                </div>
                <div className='xs:grid-cols-2'>
                    <Input
                        className='xs:cols-span-1'
                        placeholder="Little Note"
                        type='text'
                        value={rowData.note}
                        onChange={(e) => setRowData({
                            createdAt: rowData.createdAt,
                            id: rowData.id,
                            name: rowData.name,
                            userId: rowData.userId,
                            amount: parseInt(e.target.value),
                            note: e.target.value
                        })}
                    />
                    
                </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onSubmit}>Submit</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    )
}