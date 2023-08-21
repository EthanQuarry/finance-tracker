import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Accounts() {
    return (
        <>
            <main className="flex justify-center">
                <Card className="col-span-1 xl:w-3/12 lg:w-4/12 md:w-6/12 md:m-10 sm:w-8/12 xs:w-10/12 xxs:10/12 ">
                    <CardHeader className='text-center'>
                        <CardTitle>Uh Oh!</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <div className="flex flex-col text-center">
                            <div className="flex justify-center">
                            <Image
                                src="/People of Brooklyn - Torso (2).png"
                                alt="People of Brooklyn"
                                width={100}
                                height={100}
                            />
                            </div>
                            <div>
                                You haven't added an account. Click below to get started.</div>
                                <Link href='/dashboard/accounts/setup' className="w-full"><Button className="my-4 w-full">Continue</Button></Link>
                        </div>
                        
                    </CardContent>
                </Card>
            </main>
        </>
    )
}