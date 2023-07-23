import { MainNav } from "@/components/mainNav";
import { UserNav } from "@/components/userNav";
import { Search } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
        <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
            {children}
            </div>
        </>
    )
}
