import { DataTable } from "@/components/account/dataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Institution, columns } from "@/components/account/columns";
import BankSelectionContainer from "@/components/account/BankSelectionContainer";
import { promises as fs } from "fs"
import { CountryType } from "@/components/account/country/columns";

const getCountries = async () => {
    const data = await fs.readFile('./components/account/country/countryData.json/', 'utf8')
    if (data) {
        return JSON.parse(data)
    }
}

export default async function Setup() {
    const response = await fetch('https://bankaccountdata.gocardless.com/api/v2/institutions/', {
        method: 'GET',
        headers: {
            'authorization': 'Bearer ' + process.env.GOCARDLESS_ACCESS_TOKEN,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })

    const countries: CountryType[] = await getCountries();
    const data: Institution[] = await response.json();
    return (
        <>
            <main className="flex justify-center w-full py-3">
                <Card className='w-8/12 grid-cols-3'>
                    <CardHeader className='text-center'>
                        <CardTitle>Select your Bank</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <BankSelectionContainer countryData={countries} data={data} />
                    </CardContent>
                </Card>
            </main>
        </>
    )
}