"use client"

import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import  Image  from "next/image"
export type Institution = {
    id: string
    name: string
    bic: string
    transaction_total_days: string
    logo: string
    countries: string[]
}

export const columnHelper = createColumnHelper<Institution>()

export const columns: ColumnDef<Institution>[] = [
    {
        accessorKey: 'logo',
        header: '',
        cell: tableProps => (
            <Image 
                src={tableProps.row.original.logo}
                alt={tableProps.row.original.name}
                width={40}
                height={40}
            />
        )
    },
    {
        accessorKey: 'name',
        header: '',
    },
    
]