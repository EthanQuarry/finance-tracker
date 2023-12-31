import { MainNav } from "@/components/mainNav";
import { UserNav } from "@/components/userNav";
import { Search } from "lucide-react";
import { cookies } from "next/headers";
import { getIdFromCookie } from "@/lib/auth";

export const getData = async () => {
  const id = await getIdFromCookie(cookies())

  const res = await fetch(`${process.env.URL}/api/user/getUserById`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  })

  if (!res.ok) {
    return { error: { message: 'Something went wrong' } }
  } else {
    const data = await res.json();
    return data;
  }
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getData();
    
    return (
        <>
        <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto">
              <UserNav data={data} />
            </div>
          </div>
        </div>
            {children}
            </div>
        </>
    )
}
