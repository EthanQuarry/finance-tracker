"use client"

import * as React from "react"
import {useState } from "react";
import { DataTable } from "./data/data-table";
import EditServer from "./editServer";
import BudgetsTable from "./budgetsTable";

type RowDataProps = {
  name: string 
  assigned: number 
  activity: number 
  available: number
  note: string
}

const INITIAL_DATA = {
  name: '',
  assigned: 0,
  activity: 0,
  available: 0,
  note: ''
}

type DataProps = {
  data: []
}

const Container = ({data}: DataProps) => { 
  const [ selectedRow, setSelectedRow] = useState(INITIAL_DATA);

  const handleChange = (fields: RowDataProps) => {
    setSelectedRow(prev => ({
      ...prev,
      ...fields
    }))
  }
  
  return (
    <>
      <BudgetsTable data={data} setSelectedRow={setSelectedRow}  />
      <EditServer selectedRow={selectedRow}  />
      
    </>
  )
}

export default Container;