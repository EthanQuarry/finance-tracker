"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { taskSchema } from "../data/schema"
import { Dispatch, SetStateAction } from "react"
import EditRow, { DataProps } from "./editRow"


export type TableRowActionsDataProps = {
  data: DataProps
  rowId: string
}


export function TableRowActions({ rowId, data }: TableRowActionsDataProps ) {

  const deleteRow = async () => {
    const response = await fetch('/api/user/income/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: rowId })
    })

    if (response.status === 200) window.location.reload();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={deleteRow}>
          Delete
          <DropdownMenuShortcut>☠️</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <AlertDialog>
          <AlertDialogTrigger className='w-full relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 '>
            Edit 
            <DropdownMenuShortcut> 👻 </DropdownMenuShortcut>
          </AlertDialogTrigger>
          <EditRow rowId={rowId} data={data} />
        </AlertDialog>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
