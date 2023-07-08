import { Input } from "../ui/input";
import { Card } from "../ui/card";
import InputTitle from "../ui/inputTitle";

type thirdData = {
    funExpenses: number | null
    investmentExpenses: number | null
    memberships: number | null
    miscellaneous: number | null
}

type thirdFormProps = thirdData & {
    handleChange: (fields: Partial<thirdData>) => void
}




export function Third({ funExpenses, investmentExpenses, memberships, miscellaneous, handleChange }: thirdFormProps & {}) {
    return (
        <Card className="space-y-0 p-2">
            <InputTitle >Fun-Expenses</InputTitle>
            <Input
                type="number"
                name="funExpenses"
                onChange={e => handleChange({ funExpenses: parseInt(e.target.value) })}
                value={funExpenses?.toString()}
            />

            <InputTitle >Investment Expenses</InputTitle>
            <Input
                type="number"
                name="investmentExpenses"
                onChange={e => handleChange({ investmentExpenses: parseInt(e.target.value) })}
                value={investmentExpenses?.toString()}

            />
            <InputTitle > Memberships</InputTitle>
            <Input
                type="number"
                name="memberships"
                onChange={e => handleChange({ memberships: parseInt(e.target.value) })}
                value={memberships?.toString()}
            />
            <InputTitle > Miscellaneous</InputTitle>
            <Input
                type="number"
                name="miscellaneous"
                onChange={e => handleChange({ miscellaneous: parseInt(e.target.value) })}
                value={miscellaneous?.toString()}
            />
        </Card>
    )
}