"use client"

import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";

type RowDataProps = {
    setSelectedRow: React.Dispatch<React.SetStateAction<{
        id: string;
        name: string;
        assigned: number | null;
        activity: number | null;
        available: number | null;
        note: string;
        unique: {
            id: string;
            name: string;
            assigned: number | null;
            activity: number | null;
            available: number | null;
            note: string;
        }[];
    }>>
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

type RowProps  = {
        id: string;
        name: string;
        assigned: number | null;
        activity: number | null;
        available: number | null;
        note: string;
        unique: {
            id: string;
            name: string;
            assigned: number | null;
            activity: number | null;
            available: number | null;
            note: string;
        }[];
}

export default function budgetsTable({ data, setSelectedRow }: BudgetProps) {
    const dataExists = !data === undefined;
    const unSelected = {
        id: '',
        name: 'Add Category',
        assigned: null,
        activity: null,
        available: null,
        note: '',
        unique: []
    }


    const handleRowToggle = (row: RowProps) => {
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