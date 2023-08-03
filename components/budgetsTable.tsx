"use client"

import { useNumberFormatters } from '@builtwithjavascript/formatters'
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import { SelectedRowProps } from './container';
import { TableRowActions } from './expense/table-row-actions';

type RowDataProps = {
    setSelectedRow: React.Dispatch<React.SetStateAction<SelectedRowProps>>
}

type BudgetProps = RowDataProps & {
    data: [{
        id: string
        name: string
        amount: number | null
        note: string
    }]
}


export default function BudgetsTable({ data, setSelectedRow }: BudgetProps) {
    const lcid = 'en-EU' // or return it from your i18n current locale
    const numberFormatters = useNumberFormatters(lcid)

    const dataExists = data?.length < 1;
    const unSelected: SelectedRowProps = {
        id: '',
        name: 'Add Category',
        assigned: null,
        activity: null,
        available: null,
        note: '',
        unique: [
            {
                id: '',
                name: '',
                assigned: null,
                activity: null,
                available: null,
                note: '',
            }
        ]
    }


    const handleRowToggle = (row: SelectedRowProps) => {
        setSelectedRow((prevRow) => (prevRow.id === row.id ? unSelected : row));
        console.log(row)
    }


    return (
        <>
            <div className="space-y-4 col-span-2">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Expense</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Note</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>

                                <TableCell>{
                                    //@ts-ignore
                                    numberFormatters.currency('EUR').format(item.amount)}</TableCell>
                                <TableCell>{item.note}</TableCell>
                                <TableCell><TableRowActions rowId={item.id} /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>
        </>

    )
}