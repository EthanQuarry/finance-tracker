import { Input } from "../ui/input";
import { Card } from "../ui/card";
import InputTitle from "../ui/inputTitle";

type firstData = {
    monthlySaving: string
    monthlyProfit: string
    rent: string
    utilities: string
  }

  type firstFormProps = firstData & {
    handleChange: (fields: Partial<firstData>) => void
  }
  
  
export function First({ monthlySaving, monthlyProfit, rent, utilities, handleChange}: firstFormProps ) {
    return (
        <Card className="space-y-0 p-2">
        <InputTitle >Saving Goals</InputTitle>
        <Input
            type="number"
            name="monthlySaving"
            onChange={e => handleChange({ monthlySaving: e.target.value})}
            value={monthlySaving}
        />

        <InputTitle >Income after tax</InputTitle>
        <Input
            type="number"
            name="monthlyProfit"
            onChange={e => handleChange({ monthlyProfit: e.target.value})}
            value={monthlyProfit}
        />
        <InputTitle >Rent</InputTitle>
        <Input
            type="number"
            name="rent"
            onChange={e => handleChange({ rent: e.target.value})}
            value={rent}
        />
        <InputTitle>Utilities</InputTitle>
        <Input
            type="number"
            name="utilities"
            onChange={e => handleChange({ utilities: e.target.value}
            )}
            value={utilities}
        />

    </Card>
    )
}