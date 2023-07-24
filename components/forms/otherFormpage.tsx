// "use client"

// import { Metadata } from "next"
// import Link from "next/link"
// import { ArrowRightIcon } from "@radix-ui/react-icons"

// import { cn } from "@/lib/utils"
// import {
//   PageHeader,
//   PageHeaderDescription,
//   PageHeaderHeading,
// } from "@/components/page-header"
// import { buttonVariants } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"

// import { useParams } from "next/navigation"

// export const metadata: Metadata = {
//   title: "Examples",
//   description: "Check out some examples app built using the components.",
// }

// interface ExamplesLayoutProps {
//   children: React.ReactNode
// }

// export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
//   const params = useParams();
//   const id = params.id;

//   return (
//     <>
//       <div className="container">
//         <PageHeader className="page-header pb-8">
//           <Link
//             href="/dashboard/john"
//             className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
//           >
//             🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
//             <span className="sm:hidden">Skip to see a demo!</span>
//             <span className="hidden sm:inline">
//               Skip to see a demo!
//             </span>
//             <ArrowRightIcon className="ml-1 h-4 w-4" />
//           </Link>
//           <PageHeaderHeading className="hidden md:block">
//             A few things to setup first
//           </PageHeaderHeading>
//           <PageHeaderDescription>
            
//           </PageHeaderDescription>
//           <section className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
//             <Link
//               href={`/form/${id}/1`}
//               className={cn(buttonVariants(), "rounded-[6px]")}
//             >
//               Continue 
//               <ArrowRightIcon className="ml-1 h-4 w-4" />
//             </Link>
//           </section>
//         </PageHeader>
//       </div>
//     </>
//   )
// }
