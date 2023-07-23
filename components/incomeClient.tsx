"use client"

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { User, CreditCard, Settings, PlusCircle } from "lucide-react";
import email from "next-auth/providers/email";
import { Button } from "@/components/ui/button";
import LogOutButton from "./log-out-button";
import { Card, CardHeader, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import { useState } from "react";

type DataProps = {
  name: string
  amount: number | null 
  userId: string
}

export default function IncomeClient({userId}: {userId: string}) {

  const [data, setData] = useState<DataProps>({
    name: '',
    amount: null,
    userId: userId
  })

  const postIncome = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/user/income/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.status === 200) window.location.reload();
    } catch (error) {
      console.error(error)

    }


  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full" aria-label="Add Income">
          Add Income
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-normal">
        <Input
            type="text"
            placeholder="Name e.g grandmother etc."
            className="w-full"
            onChange={(e) => setData({ 
              name: e.target.value,
              amount: data.amount,
              userId: userId 
            })}
          />
          <Input
            type="number"
            placeholder="Monthly (After Tax)"
            className="w-full"
            onChange={(e) => setData({ 
              name: data.name,
              amount: parseInt(e.target.value),
              userId: userId 
            })}
          />
          
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Button onClick={postIncome} className="w-full">Add</Button>

          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}