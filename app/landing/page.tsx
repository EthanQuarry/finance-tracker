import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { FC } from "react";

const Landing: FC = () => {
    return (
        <>
            <main className="h-screen grid place-items-center">
            <Card>
                <CardHeader>
                    <CardTitle>
                    Welcome to the open beta of PocketProfit
                    </CardTitle>
                </CardHeader>   
          
                <CardContent>
                    <Link href='/login'><Button className="w-full mb-4">See App</Button></Link>
                    <CardDescription className="text-center">
                    Signup to get 6 months free on release!
                </CardDescription>
                </CardContent>
             
                
            </Card>
            </main>
        </>
    )
}

export default Landing