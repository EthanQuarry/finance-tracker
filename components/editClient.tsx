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
    selectedRow: SelectedRowProps
    selectedUnique: SelectedUniqueProps
    userId: string
}

type categoryData = {
    userId: string
    name: string
    assigned: number | null
    available: number | null
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
    const [isLoading, setIsLoading] =useState(false);
    const [ categoryData, setCategoryData] = useState<categoryData>({
        userId: userId,
        name: "",
        assigned: null,
        available: null,
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

    const [ uniqueData, setUniqueData] = useState<uniqueData>({
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
          
                    <div className="flex flex-col space-y-4">
                        {selectedRow.name === '' ? 
                            <>
                                <div className='gruserId lg:gruserId-cols-2'>

                                    <Input
                                        className='lg:cols-span-1 '
                                        placeholder="Name"
                                        type="text"
                                        value={categoryData.name}
                                        onChange={(e) => setCategoryData({
                                            userId: userId,
                                            name: e.target.value,
                                            assigned: categoryData.assigned,
                                            available: categoryData.available,
                                            note: categoryData.note
                                        }) }
                                    />

                                    <Input
                                        className='lg:cols-span-1'
                                        placeholder="Amount assigned"
                                        type="number"
                                        value={categoryData.assigned?.toString()}
                                        onChange={(e) => setCategoryData({
                                            userId: userId,
                                            name: categoryData.name,
                                            assigned: parseInt(e.target.value),
                                            available: categoryData.available,
                                            note: categoryData.note
                                        })}
                                    />

                                </div>
                                <div className='gruserId lg:gruserId-cols-2'>

                                    <Input
                                        className='lg:cols-span-1 '
                                        placeholder="Available"
                                        type="number"
                                        value={categoryData.available?.toString()}
                                        onChange={(e) => setCategoryData({
                                            userId: userId,
                                            name: categoryData.name,
                                            assigned: categoryData.assigned,
                                            available: parseInt(e.target.value),
                                            note: categoryData.note
                                        })}
                                    />
                                    <Input
                                        className='lg:cols-span-1'
                                        placeholder="Little Note"
                                        type='text'
                                        value={categoryData.note}
                                        onChange={(e) => setCategoryData({
                                            userId: userId,
                                            name: categoryData.name,
                                            assigned: categoryData.assigned,
                                            available: categoryData.available,
                                            note: e.target.value

                                        })}
                                    />

                                </div>
                                <Button  onClick={createCatagory} disabled={isLoading}>
                                    {isLoading && (
                                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Add Category
                                </Button>
                            </>
                       : 
                       <>
                       <div className='gruserId lg:gruserId-cols-2'>

                           <Input
                               className='lg:cols-span-1 '
                               placeholder="Name"
                               type="text"
                               value={uniqueData.name}
                               onChange={(e) => setUniqueData({
                                   userId: userId,
                                   name: e.target.value,
                                   assigned: uniqueData.assigned,
                                   available: uniqueData.available,
                                   note: uniqueData.note,
                                   categoryId: selectedRow.id
                               }) }
                           />

                           <Input
                               className='lg:cols-span-1'
                               placeholder="Amount assigned"
                               type="number"
                               value={categoryData.assigned?.toString()}
                               onChange={(e) => setUniqueData({
                                   userId: userId,
                                   name: uniqueData.name,
                                   assigned: parseInt(e.target.value),
                                   available: uniqueData.available,
                                   note: uniqueData.note,
                                   categoryId: selectedRow.id
                               })}
                           />

                       </div>
                       <div className='gruserId lg:gruserId-cols-2'>

                           <Input
                               className='lg:cols-span-1 '
                               placeholder="Available"
                               type="number"
                               value={uniqueData.available?.toString()}
                               onChange={(e) => setUniqueData({
                                   userId: userId,
                                   name: uniqueData.name,
                                   assigned: uniqueData.assigned,
                                   available: parseInt(e.target.value),
                                   note: uniqueData.note,
                                   categoryId: selectedRow.id
                               })}
                           />
                           <Input
                               className='lg:cols-span-1'
                               placeholder="Little Note"
                               type='text'
                               value={uniqueData.note}
                               onChange={(e) => setUniqueData({
                                   userId: userId,
                                   name: uniqueData.name,
                                   assigned: uniqueData.assigned,
                                   available: uniqueData.available,
                                   note: e.target.value,
                                   categoryId: selectedRow.id

                               })}
                           />

                       </div>
                       <Button  onClick={createUnique} disabled={isLoading}>
                           {isLoading && (
                               <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                           )}
                           Add Sub-Category
                       </Button>
                   </>
                        }
                    </div>
        </>
    )
}