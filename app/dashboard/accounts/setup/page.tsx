import { DataTable } from "@/components/account/dataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Institution, columns } from "@/components/account/columns";


export default async function Setup() {
    const response = await fetch('https://bankaccountdata.gocardless.com/api/v2/institutions/', {
        method: 'GET',
        headers: {
            'authorization': 'Bearer ' + process.env.GOCARDLESS_ACCESS_TOKEN,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data: Institution[] = await response.json();
    return (
        <>
            <main className="flex justify-center w-full py-3">
                <Card className='w-8/12 grid-cols-3'>
                    <CardHeader className='text-center'>
                        <CardTitle>Select your Bank</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <DataTable columns={columns} data={data} />
                    </CardContent>
                </Card>
            </main>
        </>
    )
}