"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link"
import { useEffect, useRef } from "react"


type Props = {
    userId: string
}

export default function AddAccountPopup({userId}: Props) {
    function clickHandler() {
        return
    }

    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        buttonRef.current?.addEventListener('click', clickHandler);
        setTimeout(() => {
            if (buttonRef.current) {
                buttonRef.current.click();
            }
        }, 1000)
    })

    const accountToTrue = async () => {
        const response = await fetch('/api/user/account/addedAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userId })
        })
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger ref={buttonRef}></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-center text-2xl">Streamline Transactions.</AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                        Connect to your bank to avoid the hassle of manually adding transactions. Enjoy convenience
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="w-full" onClick={accountToTrue}>Do it later :(</AlertDialogCancel>
                    <Link  className="w-full" href="dashboard/accounts/setup">
                    <AlertDialogAction className="w-full" onClick={accountToTrue} >Continue :)</AlertDialogAction>
                    </Link>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}