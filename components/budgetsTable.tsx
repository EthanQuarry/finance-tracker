"use client"

import { useNumberFormatters } from '@builtwithjavascript/formatters'
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import { SelectedRowProps } from './container';

type RowDataProps = {
    setSelectedRow: React.Dispatch<React.SetStateAction<SelectedRowProps>>
}

type BudgetProps = RowDataProps & {
    data: [{
        id: string
        name: string
        assigned: number | null
        activity: number | null
        available: number | null
        note: string
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
    }]
}


export default function BudgetsTable({ data, setSelectedRow }: BudgetProps) {
    const lcid = 'en-EU' // or return it from your i18n current locale
    const numberFormatters = useNumberFormatters(lcid)

    const dataExists = data.length < 1;
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
                            <TableCell>Category</TableCell>
                            <TableCell>Assigned</TableCell>
                            <TableCell>Activity</TableCell>
                            <TableCell>Available</TableCell>
                            <TableCell>Note</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {!dataExists ? data.map((item) => (
                            <TableRow key={item.id} onClick={() => handleRowToggle(item)}>
                                <TableCell>{item.name}</TableCell>

                                <TableCell>{
                                    //@ts-ignore
                                    numberFormatters.currency('EUR').format(item.assigned)}</TableCell>
                                <TableCell>{
                                    //@ts-ignore
                                    numberFormatters.currency('EUR').format(item.activity)}</TableCell>
                                <TableCell>{
                                    //@ts-ignore
                                    numberFormatters.currency('EUR').format(item.available)}</TableCell>
                                <TableCell>{item.note}</TableCell>

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