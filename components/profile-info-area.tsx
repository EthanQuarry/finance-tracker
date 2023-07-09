

import { getIdFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";

export const getData = async () => {
    const id = await getIdFromCookie(cookies())

  // for server component requests absolute url required
  const res = await fetch(`http://localhost:3000/api/user/getUserById`, {
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

export default async function ProfileInfoArea() {
      // getting data from getData function
  // this returns { user: { firstName: 'John', lastName: 'Doe', email: 'john.doe@gmail' }}}
  const data = await getData();
  const user = data.user;
  const { firstName, lastName, email } = user;

    
    return (
        <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{firstName}{" "}{lastName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
    )
}