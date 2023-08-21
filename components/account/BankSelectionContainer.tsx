"use client"

import { useState } from "react"
import { Institution, columns } from "./columns"
import { DataTable } from "./dataTable"
import { useAddBankAccountContext } from "@/lib/contexts/addBankAccountContext"
import { CountryDataTable } from "./country/dataTable"
import { CountryType } from "./country/columns"
import { CountryColumns } from "./country/columns"

type Props = {
    data: Institution[]
    countryData: CountryType[]
}

export const passCountryCodeFunction = (code: string) => {
    const { countrySelected, setCountrySelected } = useAddBankAccountContext();
    setCountrySelected(code)
    console.log(countrySelected)
}

export default function BankSelectionContainer({ data, countryData }: Props) {

    const { 
        countrySelected,
        setCountrySelected,
        bankSelected,
        setBankSelected
     } = useAddBankAccountContext();



     if ( countrySelected === '' ) {
            return (
                    <CountryDataTable data={countryData} columns={CountryColumns} setCountrySelected={setCountrySelected} />

    )
     } 
     if ( countrySelected !== '' && bankSelected === '') {
        return (
            <DataTable columns={columns} data={data.filter((bank) => bank.name === countrySelected)} />
        )
     }

}