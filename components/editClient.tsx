"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Icons } from "./icons"
import * as React from "react"
import { SelectedRowProps, SelectedUniqueProps } from "./container"


type EditProps = {
    data: [{
        id: string
        name: string
        amount: number | null
        note: string
    }]
    selectedRow: SelectedRowProps
    selectedUnique: SelectedUniqueProps
    userId: string
}

type categoryData = {
    userId: string
    name: string
    amount: number | null
    note: string
}

type uniqueData = {
    userId: string
    name: string
    assigned: number | null
    available: number | null
    note: string
    categoryId: string
}

export default function EditClient({ userId, selectedRow, selectedUnique, data }: EditProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [categoryData, setCategoryData] = useState<categoryData>({
        userId: userId,
        name: "",
        amount: null,
        note: "",
    })

    async function createCatagory(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true)

        try {
            const response = await fetch("/api/user/categories/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(categoryData),
            })

            if (response.status === 200) {
                setIsLoading(false);
                window.location.reload();
            } else return response.json()
        } catch (error) {
            console.error(error)

        }


    }

    const [uniqueData, setUniqueData] = useState<uniqueData>({
        userId: userId,
        name: "",
        assigned: null,
        available: null,
        note: "",
        categoryId: selectedRow.id
    })

    const createUnique = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setIsLoading(true)

        try {
            const response = await fetch("/api/user/unique/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(uniqueData),
            })

            if (response.status === 200) {
                setIsLoading(false);
                window.location.reload();
            } else return response.json()
        } catch (error) {
            console.error(error)

        }

    }

    return (
        <>

            <div className="flex flex-col">
                <div className='gruserId lg:gruserId-cols-2'>

                    <Input
                        className='lg:cols-span-1 '
                        placeholder="Name"
                        type="text"
                        value={categoryData.name}
                        onChange={(e) => setCategoryData({
                            userId: userId,
                            name: e.target.value,
                            amount: categoryData.amount,
                            note: categoryData.note
                        })}
                    />

                    <Input
                        className='lg:cols-span-1'
                        placeholder="Amount assigned"
                        type="number"
                        value={categoryData.amount?.toString()}
                        onChange={(e) => setCategoryData({
                            userId: userId,
                            name: categoryData.name,
                            amount: parseInt(e.target.value),
                            note: categoryData.note
                        })}
                    />

                </div>
                <div className='gruserId lg:gruserId-cols-2'>
                    <Input
                        className='lg:cols-span-1'
                        placeholder="Little Note"
                        type='text'
                        value={categoryData.note}
                        onChange={(e) => setCategoryData({
                            userId: userId,
                            name: categoryData.name,
                            amount: categoryData.amount,
                            note: e.target.value

                        })}
                    />

                </div>
                <Button onClick={createCatagory} disabled={isLoading}>
                    {isLoading && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Add Category
                </Button>
                <div />

            </div>
        </>
    )
}