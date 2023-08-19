"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Institution = {
    id: string
    name: string
    bic: string
    transaction_total_days: string
    logo: string
    countries: string[]
}

export const columns: ColumnDef<Institution>[] = [
    {
        accessorKey: 'logo',
        header: 'Logo',
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    
]