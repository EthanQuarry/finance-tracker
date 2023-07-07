import { Input } from "../ui/input";
import { Card } from "../ui/card";
import InputTitle from "../ui/inputTitle";

type thirdData = {
    funExpenses: string
    investmentExpenses: string
    memberships: string
    miscellaneous: string
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
                onChange={e => handleChange({ funExpenses: e.target.value })}
                value={funExpenses}
            />

            <InputTitle >Investment Expenses</InputTitle>
            <Input
                type="number"
                name="investmentExpenses"
                onChange={e => handleChange({ investmentExpenses: e.target.value })}
                value={investmentExpenses}

            />
            <InputTitle > Memberships</InputTitle>
            <Input
                type="number"
                name="memberships"
                onChange={e => handleChange({ memberships: e.target.value })}
                value={memberships}
            />
            <InputTitle > Miscellaneous</InputTitle>
            <Input
                type="number"
                name="miscellaneous"
                onChange={e => handleChange({ miscellaneous: e.target.value })}
                value={miscellaneous}
            />
        </Card>
    )
}