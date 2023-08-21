"use client"

import React, { useState, createContext, useContext } from "react";

const AddAccountContext = createContext({
    countrySelected: '',
    setCountrySelected: (country: string) => {},
    bankSelected: '',
    setBankSelected: (bank: string) => {},
});

export default function AddAccountProvider({ children }) {
    const [countrySelected, setCountrySelected] = useState<string>('');
    const [bankSelected, setBankSelected] = useState<string>('');
    return (
        <AddAccountContext.Provider 
        value={{ 
            countrySelected, 
            setCountrySelected, 
            bankSelected, 
            setBankSelected,  
            }}>
            {children}
            </AddAccountContext.Provider>
    )
}

export function useAddBankAccountContext() {
    const context = useContext(AddAccountContext);
    if (context === undefined) {
        throw new Error(
            "useAddBankAccountContext must be used within a AddAccountProvider"
            )
    } 
    return context;
}