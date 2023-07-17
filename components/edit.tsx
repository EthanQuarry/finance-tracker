"use client"

import * as React from "react"

type EditProps = {
    selectedRow: {
        name: string
        assigned: number | undefined
        activity: number | undefined
        available: number | undefined
        note: string
    }
}

export default function Edit({ selectedRow }: EditProps) {
    return (
        <div className="flex flex-col space-y-4">
            <div>{selectedRow.name}</div>
        </div>
    )
}