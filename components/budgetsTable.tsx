"use client"

import { useNumberFormatters } from '@builtwithjavascript/formatters'
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import { TableRowActions } from './expense/table-row-actions';
import { TableProps } from './income/table';


export default function BudgetsTable({ data }: TableProps) {
    const lcid = 'en-EU'
    const numberFormatters = useNumberFormatters(lcid)
    console.log(data)
    return (
        <>
            <div className="space-y-4 col-span-2">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Expense</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Note</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map(function (item, index) {
                            const noteLength = 20;
                            const nameLength = 8;
                            if (item.name.length > nameLength
                                &&
                                item.note.length > noteLength) {
                                    const name = item.name.substring(0, nameLength) + '...'
                                    const note = item.note.substring(0, noteLength) + '...'
                                    return (
                                        <TableRow key={item.id}>
                                            <TableCell>{name}</TableCell>
        
                                            <TableCell>{
                                                //@ts-ignore
                                                numberFormatters.currency('EUR').format(item.amount)}</TableCell>
                                            <TableCell>{note}</TableCell>
                                            <TableCell>
                                                {item && item.createdAt && new Date(item.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                                            </TableCell>
                                            <TableCell><TableRowActions rowId={item.id} data={item} /></TableCell>
                                        </TableRow>
                                    )
                            }
                            if (item.name.length > nameLength) {
                                const name = item.name.substring(0, nameLength) + '...'
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell>{name}</TableCell>
    
                                        <TableCell>{
                                            //@ts-ignore
                                            numberFormatters.currency('EUR').format(item.amount)}</TableCell>
                                        <TableCell>{item.note}</TableCell>
                                        <TableCell>
                                            {item && item.createdAt && new Date(item.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                                        </TableCell>
                                        <TableCell><TableRowActions rowId={item.id} data={item} /></TableCell>
                                    </TableRow>
                                )
                            }
                            if (item.note.length > noteLength) {
                                const note = item.note.substring(0, noteLength) + '...';
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.name}</TableCell>
    
                                        <TableCell>{
                                            //@ts-ignore
                                            numberFormatters.currency('EUR').format(item.amount)}</TableCell>
                                        <TableCell>{note}</TableCell>
                                        <TableCell>
                                            {item && item.createdAt && new Date(item.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                                        </TableCell>
                                        <TableCell><TableRowActions rowId={item.id} data={item} /></TableCell>
                                    </TableRow>
                                )
                            }
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>

                                    <TableCell>{
                                        //@ts-ignore
                                        numberFormatters.currency('EUR').format(item.amount)}</TableCell>
                                    <TableCell>{item.note}</TableCell>
                                    <TableCell>
                                        {item && item.createdAt && new Date(item.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                                    </TableCell>
                                    <TableCell><TableRowActions rowId={item.id} data={item} /></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>
            </div>
        </>

    )
}