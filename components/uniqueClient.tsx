"use client"

import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import { SetStateAction } from "react";

type RowDataProps = {
    userId: string
    setSelectedRow: React.Dispatch<React.SetStateAction<{
        id: string;
        name: string;
        assigned: number;
        activity: number;
        available: number;
        note: string;
        unique: {
            id: string;
            name: string;
            assigned: number;
            activity: number;
            available: number;
            note: string;
        }[];
    }>>
    setSelectedUnique: React.Dispatch<React.SetStateAction<{
        id: string;
        name: string;
        assigned: number;
        activity: number;
        available: number;
        note: string;
    }>>
    selectedRow: {
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
                activity: number| null;
                available: number | null;
                note: string;

            }
        ]
    }

}



export default function UniqueClient({ userId, setSelectedUnique, setSelectedRow, selectedRow }: RowDataProps) {
    const none = selectedRow.unique.length < 1;
    const uniqueData = selectedRow.unique;
    const handleRowClick = (row: SetStateAction<{}>) => {
        setSelectedUnique(row);
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
                    {none ? <div>Add Category</div> : <TableBody>
                        {uniqueData.map((item) => (
                            <TableRow key={item.id} onClick={() => handleRowClick(item)}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>€{item.assigned}</TableCell>
                                <TableCell>€{item.activity}</TableCell>
                                <TableCell>€{item.available}</TableCell>
                                <TableCell>{item.note}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>}

                </Table>
            </div>
        </>
    )
}