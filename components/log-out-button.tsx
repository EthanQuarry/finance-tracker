"use client"

import {  LogOut } from "lucide-react"; 
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
export default function LogOutButton() {
    const router = useRouter();
    const logout = async () => {
        const response = await fetch('http://localhost:3000/api/user/logout')
        if (response.ok) {
           
            router.push('/login')
            
        } console.log(response)
    }
    
    return (
        <>
        <DropdownMenuItem onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
        </>
    )
}