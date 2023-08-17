"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from 'next/navigation';



export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={pathname === '/dashboard' ? 'text-sm font-medium text-primary transition-colors hover:text-primary' : 'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'}
      >
       Dashboard
      </Link>
      <Link
        href="/dashboard/budgets"
        className={pathname === '/dashboard/budgets' ? 'text-sm font-medium text-primary transition-colors hover:text-primary' : 'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'}
      >
        Expenses
      </Link>
      <Link 
        href="/dashboard/income"
        className={pathname === '/dashboard/income' ? 'text-sm font-medium text-primary transition-colors hover:text-primary' : 'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'}
      >
        Income
      </Link>
    </nav>
  )
}
