// "use client"

// import * as z from "zod"

// import { Button } from "@/components/ui/button"


// import { useParams, useRouter } from "next/navigation";
// import { Metadata } from "next"
// import Link from "next/link"
// import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"

// import { cn } from "@/lib/utils"
// import {
//     PageHeader,
//     PageHeaderDescription,
//     PageHeaderHeading,
// } from "@/components/page-header"
// import { buttonVariants } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"

// import { useMultipleStepForm } from "@/lib/hooks/useMultipleStepForm"

// import { First } from "@/components/forms/first"
// import { Second } from "@/components/forms/second"
// import { Third } from "@/components/forms/third"
// import { FormEvent, useState } from "react"
// import { type } from "os";


// export const metadata: Metadata = {
//     title: "Examples",
//     description: "Check out some examples app built using the components.",
// }

// interface ExamplesLayoutProps {
//     children: React.ReactNode
// }


// const formSchema = z.object({
//     username: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
// })


// type FormData = {
//      monthlySaving: number | null,
//         monthlyProfit: number | null,
//         rent: number | null,
//         utilities: number | null,

//         food: number | null,
//         subscriptions: number | null,
//         transportation: number | null, 
//         entertainment: number | null,

//         funExpenses: number | null,
//         investmentExpenses: number | null,
//         memberships: number | null,
//         miscellaneous: number | null,
        
//   }

//   const INITIAL_DATA: FormData = {
//     monthlySaving: null,
//     monthlyProfit: null,
//     rent: null,
//     utilities: null,

//     food: null,
//     subscriptions: null,
//     transportation: null, 
//     entertainment: null,

//     funExpenses: null,
//     investmentExpenses: null,
//     memberships: null,
//     miscellaneous: null,    
//   }
  

// export default function ExamplesLayout() {
//     const params = useParams()
//     const id = params.id
    
//     const router = useRouter();
//     const [formData, setFormData] = useState(INITIAL_DATA);

//     function handleChange(fields: Partial<FormData>) {
//         setFormData(prev => ({
//         ...prev,
//         ...fields
//         }));
//     }
    
//     async function handleSubmit(event: FormEvent) {
//         event.preventDefault();

//         try {
//             const response = await fetch('/api/user/financials/post', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }, 
//                 body: JSON.stringify({
//                     id: id,
//                     monthlySaving: formData.monthlySaving,
//                     monthlyProfit: formData.monthlyProfit,
//                     rent: formData.rent,
//                     utilities: formData.utilities,

//                     food: formData.food,
//                     subscriptions: formData.subscriptions,
//                     transportation: formData.transportation,
//                     entertainment: formData.entertainment,

//                     funExpenses: formData.funExpenses,
//                     investmentExpenses: formData.investmentExpenses,
//                     memberships: formData.memberships,
//                     miscellaneous: formData.miscellaneous,
//                 }),
//             });
            
//             if (response.status === 200) {
//                 const data = await response.json()
//                 const id = data.user.id
//                 router.push(`/dashboard`)
//             } else {
//                 console.log('Wrong API method')
//             }

//         } catch (error) {
//             console.error(error)
//         } 
        

//     } 

//     const {
//         isFirstStep,
//         currentStep,
//         nextStep,
//         previousStep,
//         step
//     } = useMultipleStepForm([
//         <First {...formData} handleChange={handleChange} />,
//         <Second {...formData} handleChange={handleChange} />,
//         <Third {...formData} handleChange={handleChange} />
        
//     ]);


//     return (
//         <>
//             <div className="container">
//                 <PageHeader className="page-header pb-8">
//                     <Link
//                         href="/dashboard/john"
//                         className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
//                     >
//                         🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
//                         <span className="sm:hidden">Skip to see a demo!</span>
//                         <span className="hidden sm:inline">
//                             Skip to see a demo!
//                         </span>
//                         <ArrowRightIcon className="ml-1 h-4 w-4" />
//                     </Link>
//                     <PageHeaderHeading className="hidden md:block">
//                         Monthly Financials
//                     </PageHeaderHeading>
//                     <PageHeaderDescription>

//                     </PageHeaderDescription>
//                     <section className="flex-col w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
//                         {currentStep + 1}
//                         {step}
//                     </section>
//                     <footer className="flex justify-between">
//                         {!isFirstStep &&
//                             <Button
//                                 className={cn(buttonVariants({ variant: 'outline' }), "rounded-[6px] text-black")}
//                                 onClick={previousStep}
//                                 type="submit"
//                             >
//                                 <ArrowLeftIcon className="ml-1 h-4 w-4" />
//                                 Go back
//                             </Button>
//                         }
//                         {currentStep < 2 &&
//                             <Button
//                                 className={cn(buttonVariants(), "rounded-[6px]")}
//                                 onClick={nextStep}
//                                 type="submit"
//                             >

//                                 Continue
//                                 <ArrowRightIcon className="ml-1 h-4 w-4" />
//                             </Button>}
//                         {currentStep === 2 &&
//                             <Button
//                                 className={cn(buttonVariants(), "rounded-[6px]")}
//                                 onClick={handleSubmit}
//                                 type="submit"
//                             >
//                                 Submit
//                                 <ArrowRightIcon className="ml-1 h-4 w-4" />
//                             </Button>
//                         }
//                     </footer>
//                 </PageHeader>
//             </div>
//         </>
//     )
// }

