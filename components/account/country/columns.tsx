"use client"

import { ColumnDef, createColumnHelper } from "@tanstack/react-table"

// import { passCountryCodeFunction } from "../BankSelectionContainer";


export type CountryType = {
    name: string
    code: string
}

export const columnHelper = createColumnHelper<CountryType>()





export const CountryColumns: ColumnDef<CountryType>[] = [
    {
        accessorKey: 'name',
        header: '',
        cell: props => {
            return (
                <button >{props.row.original.name}</button>

            )
        }
    }
    
]

// onClick={() => passCountryCodeFunction(props.row.original.code)}