"use client"

import * as React from "react"
import { cn } from "@/lib/utils";
import { useState } from "react";
import { DataTable } from "./data/data-table";

type ContainerProps = {
  data: any
  columns: any
}

const Container = ({  data, columns }: ContainerProps) => {
  const [selectedRow, setSelectedRow] = useState({
    name: '',
    assigned: 0,
    activity: 0,
    available: 0,
    note: ''
  });
  return (
    <>
      <DataTable columns={columns} data={data} setSelectedRow={setSelectedRow} />

    </>
  )
}

export default Container;