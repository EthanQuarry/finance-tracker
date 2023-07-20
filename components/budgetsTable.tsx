"use client"

import { SetStateAction } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";

type RowDataProps = {
    setSelectedRow: React.Dispatch<React.SetStateAction<{}>>
}

type BudgetProps = RowDataProps & {
    data: [{
        id: string
        name: string
        assigned: number | undefined
        activity: number | undefined
        available: number | undefined
        note: string
        unique: [
            {
                id: string;
                name: string;
                assigned: number;
                activity: number;
                available: number;
                note: string;

            }
        ]
    }]
}

export default function budgetsTable({ data, setSelectedRow }: BudgetProps) {
    const dataExists = data === undefined;


    const handleRowClick = (row: SetStateAction<{}>) => {
        setSelectedRow(row);
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
                        {dataExists ? data.map((item) => (
                            <TableRow key={item.id} onClick={() => handleRowClick(item)}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>€{item.assigned}</TableCell>
                                <TableCell>€{item.activity}</TableCell>
                                <TableCell>€{item.available}</TableCell>
                                <TableCell>{item.note}</TableCell>

                            </TableRow>
                        )) :
                         <TableRow>
                            <TableCell>None</TableCell>    
                            <TableCell>-</TableCell>    
                            <TableCell>-</TableCell>    
                            <TableCell>-</TableCell>    
                            <TableCell>-</TableCell>    
                            
                        </TableRow>}
                    </TableBody>

                </Table>
            </div>
        </>

    )
}