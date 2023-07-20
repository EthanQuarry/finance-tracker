"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Icons } from "./icons"
import * as React from "react"


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

    userId: string

}

type formData = {
    userId: string
    name: string
    assigned: number | null
    available: number | null
    note: string
}



export default async function EditClient({ userId, selectedRow, selectedUnique, data }: EditProps) {

    
    const [isLoading, setIsLoading] =useState(false);

    const [ formData, setFormData] = useState<formData>({
        userId: userId,
        name: "",
        assigned: null,
        available: null,
        note: "",
    })

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true)

        try {
            const response = await fetch("/api/user/categories/post", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            })
          } catch (error) {
            console.error(error)
      
          }

        setTimeout(() => {
            setIsLoading(false)

        }, 2000)
    }

    const dataExists = !data === undefined;

    return (
        <>
            <Card>
                <CardHeader>
                    {selectedUnique.name}
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4">
                        {dataExists ?
                            <div>{selectedUnique.name}</div>
                            :
                            <>
                                <div className='gruserId lg:gruserId-cols-2'>

                                    <Input
                                        className='lg:cols-span-1 '
                                        placeholder="Name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({
                                            userId: userId,
                                            name: e.target.value,
                                            assigned: formData.assigned,
                                            available: formData.available,
                                            note: formData.note
                                        }) }
                                    />

                                    <Input
                                        className='lg:cols-span-1'
                                        placeholder="Amount assigned"
                                        type="number"
                                        value={formData.assigned?.toString()}
                                        onChange={(e) => setFormData({
                                            userId: userId,
                                            name: formData.name,
                                            assigned: parseInt(e.target.value),
                                            available: formData.available,
                                            note: formData.note
                                        })}
                                    />

                                </div>
                                <div className='gruserId lg:gruserId-cols-2'>

                                    <Input
                                        className='lg:cols-span-1 '
                                        placeholder="Available"
                                        type="number"
                                        value={formData.available?.toString()}
                                        onChange={(e) => setFormData({
                                            userId: userId,
                                            name: formData.name,
                                            assigned: formData.assigned,
                                            available: parseInt(e.target.value),
                                            note: formData.note
                                        })}
                                    />
                                    <Input
                                        className='lg:cols-span-1'
                                        placeholder="Little Note"
                                        type='text'
                                        value={formData.note}
                                        onChange={(e) => setFormData({
                                            userId: userId,
                                            name: formData.name,
                                            assigned: formData.assigned,
                                            available: formData.available,
                                            note: e.target.value

                                        })}
                                    />

                                </div>
                                <Button onClick={onSubmit} disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Add Category
                                </Button>
                            </>
                        }
                    </div>
                </CardContent>
            </Card>
        </>
    )
}