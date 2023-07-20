import * as React from "react"
import EditClient from "./editClient"
import { getIdFromCookie } from "@/lib/auth"
import { cookies } from "next/headers"

type EditProps = {
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
    selectedRow: {
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
    }
    selectedUnique: {
        id: string;
        name: string;
        assigned: number | null;
        activity: number | null;
        available: number | null;
        note: string;

    }
}


export default async function EditServer({ selectedRow, selectedUnique, data }: EditProps) {

    const userId = await getIdFromCookie(cookies())

 
    return (
        <div className="flex flex-col space-y-4">
            <EditClient userId={userId} selectedRow={selectedRow} selectedUnique={selectedUnique} data={data} />
        </div>
    )
}