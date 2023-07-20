"use client"

import * as React from "react"
import { useState } from "react";
import { DataTable } from "./data/data-table";
import EditServer from "./editServer";
import BudgetsTable from "./budgetsTable";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import UniqueClient from "./uniqueClient";
import UniqueServer from "./uniqueServer";

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


type DataProps = {
  data: [{
    id: string
    name: string
    assigned: number 
    activity: number 
    available: number 
    note: string
    unique: [
      {
        id: string;
        name: string;
        assigned: number;
        activity: number;
        available: number;
        note: string;

      }
    ]
  }]
}

const Container = ({ data }: DataProps) => {
  const [selectedRow, setSelectedRow ] = useState(INITIAL_DATA);
  const [selectedUnique, setSelectedUnique] = useState(UNIQUE_DATA);
  
  const uniqueLength: number = selectedRow.unique.length;
  const uniqueName: string = selectedRow.name;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1">
        <Card className="md:col-span-1 lg:col-span-2 ">
          <BudgetsTable data={data} setSelectedRow={setSelectedRow} />
        </Card>
        <Card className="md:col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle>{selectedRow.name || 'Edit'}</CardTitle>
          </CardHeader>
          <CardContent>
            <EditServer selectedRow={selectedRow} selectedUnique={selectedUnique} data={data}/>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4  lg:grid-cols-1 ">
        <Card>
          <CardHeader>
            <CardTitle>
            {uniqueLength === 0 && uniqueName}{uniqueLength > 1 && `${uniqueLength} Selected Expenses`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UniqueServer setSelectedUnique={setSelectedUnique} selectedRow={selectedRow} setSelectedRow={setSelectedRow} ></UniqueServer>
          </CardContent>
        </Card>
      </div>
    </>


  )
}

export default Container;