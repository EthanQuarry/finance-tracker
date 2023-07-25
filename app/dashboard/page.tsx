import { Metadata } from "next"
import { useNumberFormatters } from '@builtwithjavascript/formatters'
import { cookies } from "next/headers";
import { Activity, CreditCard, DollarSign, Download, Users } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/dateRangePicker"
import { Overview } from "@/components/overview"
import { getIdFromCookie } from "@/lib/auth"
import { db } from "@/lib/db";
import DashboardPie from "@/components/dashboard-pie";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
}



const getIncome = async () => {
  const id = await getIdFromCookie(cookies())
  const incomes = await db.income.findMany({
    where: {
      userId: id
    }
  })
  let total = 0;
  incomes.map((income) => {
    total += income.amount
  })
  return total
}

const getExpenses = async () => {
  const id = await getIdFromCookie(cookies())
  const expenses = await db.category.findMany({
    where: {
      userId: id
    }
  })
  let total = 0;
  expenses.map((expense) => {
    total += expense.assigned
  })
  return total
}
type DashboardPageProps = {

}


const DashboardPage: React.FC<DashboardPageProps> = async () => {
    const lcid = 'en-EU' 
    const numberFormatters = useNumberFormatters(lcid)  
  
      const income = await getIncome();
      const expenses = await getExpenses();
  return (
    <>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />

            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Monthly Revenue
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{numberFormatters.currency('EUR').format(income)}</div>
                    <p className="text-xs text-muted-foreground">
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Monthly Expenses
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{numberFormatters.currency('EUR').format(expenses)} </div>
                    <p className="text-xs text-muted-foreground">
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Saving Goals</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">NaN€ </div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Monthly Profit
                    </CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">NaN€ </div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview income={income} expenses={expenses} />
                  </CardContent>
                </Card>
                  <DashboardPie />
              </div>
            </TabsContent>
          </Tabs>
        </div>
    </>
  )
}

export default DashboardPage;
