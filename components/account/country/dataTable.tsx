"use client"

import * as React from "react"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    SortingState,
    VisibilityState,
    ColumnFiltersState,
    getSortedRowModel,
    getFilteredRowModel,
    useReactTable,
    getPaginationRowModel
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";



import { Input } from "@/components/ui/input"
import { CountryType } from "./columns";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    setCountrySelected: (country: string) => void;
}


export function CountryDataTable<TData, TValue>({
    columns,
    data,
    setCountrySelected
}: DataTableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    );
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    const sendToLogin = async (id: string) => {
        const response = await fetch('/api/user/account/sendToExternalLink', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })

    }

    const updatedColumns = columns.map((column) => {
          return {
            ...column,
            cell: (props) => (
              <button onClick={() => {
                setCountrySelected(props.row.original.code);
              }}>
                {props.row.original.name}
              </button>
            ),
          };
      });

    return (
        <>
            <div className="flex justify-center py-4">
                <Popover>
                    <PopoverTrigger>
                        <Button>Select Country</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                    <Input
                    placeholder="Search..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />

                       <Table>

                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        )

                                        )}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        Make sure your not using abbrieviations. :)
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table> 

                    </PopoverContent>
                </Popover>
            </div>

        </>
    )
}

