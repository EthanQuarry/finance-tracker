import * as React from "react"
import EditClient from "./editClient"

type EditProps = {
    selectedRow: {
        name: string
        assigned: number | undefined
        activity: number | undefined
        available: number | undefined
        note: string
    }
}

export default function EditServer({ selectedRow }: EditProps) {
    return (
        <div className="flex flex-col space-y-4">
            <EditClient selectedRow={selectedRow} />
        </div>
    )
}