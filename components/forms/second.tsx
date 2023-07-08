import { Input } from "../ui/input";
import { Card } from "../ui/card";
import InputTitle from "../ui/inputTitle";


type secondData = {
    food: number | null
    subscriptions: number | null
    transportation: number | null
    entertainment: number | null
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
                onChange={e => handleChange({ food: parseInt( e.target.value)})}
                value={food?.toString()}
            />

            <InputTitle >Subscriptions</InputTitle>
            <Input
                type="number"
                name="subscriptions"
                onChange={e => handleChange({ subscriptions: parseInt( e.target.value)})}
                value={subscriptions?.toString()}
            />
            <InputTitle > Transportation</InputTitle>
            <Input
                type="number"
                name="transportation"
                onChange={e => handleChange({ transportation:parseInt( e.target.value)})}
                value={transportation?.toString()}
            />
            <InputTitle > Entertainment</InputTitle>
            <Input
                type="number"
                name="entertainment"
                onChange={e => handleChange({ entertainment: parseInt( e.target.value)})}
                value={entertainment?.toString()}
            />

        </Card>
    )
}