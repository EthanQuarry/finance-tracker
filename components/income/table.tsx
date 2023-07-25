"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { useNumberFormatters } from '@builtwithjavascript/formatters'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table'
import { TableRowActions } from "./table-row-actions"
import { Dispatch, SetStateAction } from "react"

type IncomeTableProps = {
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

export default function IncomeTable({data}: IncomeTableProps) {
    const lcid = 'en-EU' // or return it from your i18n current locale
    const numberFormatters = useNumberFormatters(lcid)
    
    
    // const handleRowToggle = (row: RowProps) => {
    //     setSelectedRow((prevRow) => (prevRow.id === row.id ? unSelected : row));
    //     console.log(row)
    // }
    
    return (    
        <>
            <div className="space-y-4 col-span-2">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Source</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Note</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data ? data.map((item) => (
                            <TableRow key={item.id} >
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{
                                    //@ts-ignore
                                numberFormatters.currency('EUR').format(item.amount)}</TableCell>
                                <TableCell>{item.note}</TableCell>
                                <TableCell><TableRowActions rowId={item.id} /></TableCell>
                            </TableRow>
                        )) :
                            <TableRow >
                                <TableCell>Create</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>For</TableCell>
                                <TableCell>Tracking</TableCell>
                                <TableCell>Expenses</TableCell>

                            </TableRow>}
                    </TableBody>

                </Table>
            </div>
        </>
    )
}