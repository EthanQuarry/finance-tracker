"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from "next-themes"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import LogOutButton from "./log-out-button"



type DataProps = {
  data: {
    user: {
      firstName: string
      lastName: string
      email: string
    }
  }
}


export function UserNav({data}: DataProps) {

  const user = data.user;
  const { firstName, lastName, email } = user;
  const { theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? theme : theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="" aria-label="Profile">
          <Avatar className="h-10 w-10 flex items-center">
          {currentTheme === 'dark' ? 
         <FontAwesomeIcon icon={faUser} size='xl' />
          :
          <FontAwesomeIcon icon={faUser} size='xl' />
          } 
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{firstName}{" "}{lastName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
    	    {currentTheme === 'dark' ? (
            <DropdownMenuItem onClick={() => setTheme('light')}> 
              Light Mode
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark Mode
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <LogOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
