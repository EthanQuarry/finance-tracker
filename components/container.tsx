"use client"

import * as React from "react"
import { useState } from "react";
import BudgetsTable from "./budgetsTable";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import UniqueClient from "./uniqueClient";
import EditClient from "./editClient";

const INITIAL_DATA = {
  id: '',
  name: '',
  assigned: 0,
  activity: 0,
  available: 0,
  note: '',
  unique: [
    {
      id: '',
      name: '',
      assigned: 0,
      activity: 0,
      available: 0,
      note: '',
      
    }
  ]
}

const UNIQUE_DATA = {
  id: '',
  name: '',
  assigned: 0,
  activity: 0,
  available: 0,
  note: '',
}


type Props = {
  userId: string
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
}

interface selectedRowProps {
  id: string;
  name: string;
  assigned: number | null;
  activity: number | null;
  available: number | null;
  note: string;
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

const Container = ({ userId, data }: Props) => {
  const [selectedRow, setSelectedRow ] = useState<selectedRowProps>(INITIAL_DATA);
  const [selectedUnique, setSelectedUnique] = useState(UNIQUE_DATA);
  
  const uniqueLength: number = selectedRow.unique.length;
  const categoryName: string = selectedRow.name

  return (
    <>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1">
        <Card className="md:col-span-1 lg:col-span-2 ">
          <BudgetsTable  data={data} setSelectedRow={setSelectedRow} />
        </Card>
        <Card className="md:col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>{selectedRow.name === 'Add Category' ? selectedRow.name : `Add Sub-Category to ${selectedRow.name}`}</CardTitle>
          </CardHeader>
          <CardContent>
            <EditClient userId={userId} selectedRow={selectedRow} selectedUnique={selectedUnique} data={data}/>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-1 ">
       {selectedRow.name === 'Add Category' ? 
       null 
       :
       <Card>
       <CardHeader>
         <CardTitle>
         {uniqueLength === 0 && `You haven't created a Sub-Category`}{uniqueLength === 1 && categoryName}{uniqueLength > 1 && `${uniqueLength} Selected Expenses of ${categoryName}`}{selectedRow.name == '' && 'No Sub-Catagories'} 
         </CardTitle>
       </CardHeader>
       <CardContent>
         <UniqueClient userId={userId} setSelectedUnique={setSelectedUnique} selectedRow={selectedRow} setSelectedRow={setSelectedRow} ></UniqueClient>
       </CardContent>
     </Card>
       } 
      </div>
    </>


  )
}

export default Container;