import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function Accounts() {
    return (
        <>
            <main className="flex justify-center">
                <Card className="col-span-1 xl:w-3/12 lg:w-4/12 md:w-6/12 md:m-10 sm:w-8/12 xs:w-10/12 xxs:10/12 ">
                    <CardContent className="flex justify-center">
                        <div className="flex flex-col text-center">
                            <div className="flex justify-center">
                            <Image
                                src="/People of Brooklyn - Torso (2).png"
                                alt="People of Brooklyn"
                                width={300}
                                height={300}
                            />
                            </div>
                            <div>
                                You haven't added an account. Click below to get started.</div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </>
    )
}