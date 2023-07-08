import { Input } from "../ui/input";
import { Card } from "../ui/card";
import InputTitle from "../ui/inputTitle";

type firstData = {
    monthlySaving: number | null
    monthlyProfit: number | null
    rent: number | null
    utilities: number | null
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
            onChange={e => handleChange({ monthlySaving: parseInt( e.target.value)})}
            value={monthlySaving?.toString()}
        />

        <InputTitle >Income after tax</InputTitle>
        <Input
            type="number"
            name="monthlyProfit"
            onChange={e => handleChange({ monthlyProfit: parseInt( e.target.value)})}
            value={monthlyProfit?.toString()}
        />
        <InputTitle >Rent</InputTitle>
        <Input
            type="number"
            name="rent"
            onChange={e => handleChange({ rent: parseInt( e.target.value)})}
            value={rent?.toString()}
        />
        <InputTitle>Utilities</InputTitle>
        <Input
            type="number"
            name="utilities"
            onChange={e => handleChange({ utilities: parseInt( e.target.value)}
            )}
            value={utilities?.toString()}
        />

    </Card>
    )
}