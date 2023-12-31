import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Command, Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserSignUp } from "@/components/userSignUp"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
  
      <div className="flex md:grid items-center justify-center xs:px-6 xs:h-screen lg:max-w-none lg:h-full lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "absolute right-4 top-4 md:right-8 md:top-8 xs:right-8 xs:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Command className="mr-2 h-6 w-6" /> -----
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 sm:pt-8 xs:h-full xs:py-10">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 xs:w-[270px] xxs:w-10/12">
            <div className="flex flex-col space-y-2 py-8 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome.
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below and create an account.
              </p>
            </div>
            <UserSignUp />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
