import UniqueClient from "./uniqueClient";

type RowDataProps = {
    setSelectedRow: React.Dispatch<React.SetStateAction<{}>>
    setSelectedUnique: React.Dispatch<React.SetStateAction<{}>>
    selectedRow: {
        name: string
        assigned: number | undefined
        activity: number | undefined
        available: number | undefined
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
    }

}

type BudgetProps = RowDataProps & {
    handleChange: any
}


export default function UniqueServer({ setSelectedUnique, setSelectedRow, selectedRow }: BudgetProps) {
    return (
        <>
           <UniqueClient setSelectedUnique={setSelectedUnique} selectedRow={selectedRow} setSelectedRow={setSelectedRow}></UniqueClient>
        </>
    )
}