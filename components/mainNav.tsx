import Link from "next/link"
import { cn } from "@/lib/utils"




export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
       Dashboard
      </Link>
      <Link
        href="/dashboard/budgets"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Expenses
      </Link>
      <Link 
        href="/dashboard/income"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Income
      </Link>
    </nav>
  )
}
