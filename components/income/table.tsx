"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { useNumberFormatters } from '@builtwithjavascript/formatters'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table'
import { TableRowActions } from "./table-row-actions"

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
    editRow: (rowId: string) => void
    
}

export default function IncomeTable({data, editRow}: IncomeTableProps) {
    const lcid = 'en-EU'
    const numberFormatters = useNumberFormatters(lcid)
    
    
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
                        {data.map((item) => (
                            <TableRow key={item.id} >
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{numberFormatters.currency('EUR').format(item.amount)}</TableCell>
                                <TableCell>{item.note}</TableCell>
                                <TableCell><TableRowActions rowId={item.id} editRow={editRow} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>
        </>
    )
}