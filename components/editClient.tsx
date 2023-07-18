"use client"

type EditProps = {
    selectedRow: {
        name: string
        assigned: number | undefined
        activity: number | undefined
        available: number | undefined
        note: string
    }
}

export default function EditClient({ selectedRow }: EditProps) {
    return (
        <>
        <div className="flex flex-col space-y-4">helo here are the props. Name: {selectedRow.name } </div>
        <div className="flex flex-col space-y-4">helo here are the props. activity: {selectedRow.activity } </div>
        <div className="flex flex-col space-y-4">helo here are the props. assigned: {selectedRow.assigned } </div>
        <div className="flex flex-col space-y-4">helo here are the props. available: {selectedRow.available } </div>
        <div className="flex flex-col space-y-4">helo here are the props. note: {selectedRow.note } </div>
        </>
    )
}