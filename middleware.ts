import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_FILE = /\.(.*)$/;

const verifyJWT = async (jwt: string) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_TOKEN)
  );

  return payload;
};

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/login") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  
    const jwt = req.cookies.get(process.env.COOKIE_NAME);

    if (!jwt) {
      req.nextUrl.pathname = "/login";
      return NextResponse.redirect(req.nextUrl);
    }

    

    try {
      await verifyJWT(jwt.value);
      return NextResponse.next();
    } catch (e) {
      console.error(e);
      req.nextUrl.pathname = "/login";
      return NextResponse.redirect(req.nextUrl);
    }



}
