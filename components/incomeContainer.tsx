import IncomeTable from "./income/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type IncomeDataProps = {
  userId: string
  data: [
    {
      id: string
      name: string
      userId: string
      amount: number | null
      note: string
    }
  ]
}


export default function IncomeContainer({ data, userId }: IncomeDataProps) {
    return (
        <>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1">
          <Card className="md:col-span-1 lg:col-span-2 ">
          <IncomeTable data={data} />
          </Card>
          <Card className="md:col-span-1 lg:col-span-1">
            <CardHeader>
              {/* <CardTitle>{selectedRow.name === '' ? 'Create Catagory' : `Add Sub-Category to ${selectedRow.name}`}</CardTitle> */}
            </CardHeader>
            <CardContent>
            
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 lg:grid-cols-1 ">
         {/* {selectedRow.name === 'Add Category' ? 
         null 
         : */}{
         <Card>
         <CardHeader>
           <CardTitle>
           {/* {uniqueLength === 0 && `You haven't created a Category`}{uniqueLength === 1 && categoryName}{uniqueLength > 1 && `${uniqueLength} Selected Expenses of ${categoryName}`}{selectedRow.name == '' && 'No Sub-Catagories'}  */}
           </CardTitle>
         </CardHeader>
         <CardContent>
        
         </CardContent>
       </Card>
         } 
        </div>
      </>
    )
}