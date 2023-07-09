import { Metadata } from "next"

import { cookies } from "next/headers";
import { Activity, CreditCard, DollarSign, Download, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
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
import { MainNav } from "@/components/mainNav"
import { Overview } from "@/components/overview"
import { RecentSales } from "@/components/recentSales"
import { Search } from "@/components/search"
import { UserNav } from "@/components/userNav"
import { getIdFromCookie } from "@/lib/auth"
import { db } from "@/lib/db";
import DashboardPie from "@/components/dashboard-pie";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
}



const getData = async () => {
  const id = await getIdFromCookie(cookies())
  const financials = await db.financials.findUnique({
    where: {
      id: id
    }
  })

  return financials
}

type DashboardPageProps = {
  monthlySaving: number | null
  monthlyProfit: number | null
  rent: number | null
  utilities: number | null
  food: number | null
  subscriptions: number | null
  transportation: number | null
  entertainment: number | null
  funExpenses: number | null
  investmentExpenses: number | null
  memberships: number | null
  miscellaneous: number | null
  monthlyExpenses: number | null
}


const DashboardPage: React.FC<DashboardPageProps> = async () => {
  const percentMonthlyRevenue = "+124.4%";
  const percentMonthlyExpenses = "-114.0%";

  const {
    monthlySaving,
    monthlyProfit,
    rent, utilities,
    food,
    subscriptions,
    transportation,
    entertainment,
    funExpenses,
    investmentExpenses,
    memberships,
    miscellaneous
  } = await getData() || {};



  const monthlyExpenses = rent + utilities + food + subscriptions + transportation + entertainment + funExpenses + investmentExpenses + memberships + miscellaneous
  const monthlyActualProfit = monthlyProfit - monthlyExpenses;
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
            {/* <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList> */}
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
                    <div



                      className="text-2xl font-bold">{monthlyProfit}€ </div>
                    <p className="text-xs text-muted-foreground">
                      {/* {`${percentMonthlyRevenue} from last month`} */}
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
                    <div className="text-2xl font-bold">{monthlyExpenses}€ </div>
                    <p className="text-xs text-muted-foreground">
                      {/* {`${percentMonthlyExpenses} from last month`} */}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Saving Goals</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{monthlySaving}€ </div>
                    {/* <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p> */}
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
                    <div className="text-2xl font-bold">{monthlyActualProfit}€ </div>
                    {/* <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p> */}
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview monthlyProfit={monthlyProfit} monthlyExpenses={monthlyExpenses} />
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
