import { Input } from "../ui/input";
import { Card } from "../ui/card";
import InputTitle from "../ui/inputTitle";


type secondData = {
    food: string
    subscriptions: string
    transportation: string
    entertainment: string
  }

  type secondFormProps = secondData & {
    handleChange: (fields: Partial<secondData>) => void
  }



export function Second({ food, subscriptions, transportation, entertainment, handleChange}: secondFormProps) {
    return (
        <Card className="space-y-0 p-2">
            <InputTitle >Food Expenses</InputTitle>
            <Input
                type="number"
                name="food"
                onChange={e => handleChange({ food: e.target.value})}
                value={food}
            />

            <InputTitle >Subscriptions</InputTitle>
            <Input
                type="number"
                name="subscriptions"
                onChange={e => handleChange({ subscriptions: e.target.value})}
                value={subscriptions}
            />
            <InputTitle > Transportation</InputTitle>
            <Input
                type="number"
                name="transportation"
                onChange={e => handleChange({ transportation: e.target.value})}
                value={transportation}
            />
            <InputTitle > Entertainment</InputTitle>
            <Input
                type="number"
                name="entertainment"
                onChange={e => handleChange({ entertainment: e.target.value})}
                value={entertainment}
            />

        </Card>
    )
}