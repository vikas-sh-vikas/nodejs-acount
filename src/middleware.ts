import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("Path",path)
  const commonPath = path === "/"
  const isPublic = path === "/auth/login" || path === "/auth/signup" || path === "/auth/verifyemail";
  const token = request.cookies.get("accessToken")?.value || "";
  if(commonPath && !token)
  {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  } 
  if(commonPath && token)
  {
    return NextResponse.redirect(new URL("/dashboard/profile", request.nextUrl));
  } 
  if (isPublic && token) {
    return NextResponse.redirect(new URL("/dashboard/profile", request.nextUrl));
  }
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/dashboard/profile", "/auth/login", "/auth/signup","/auth/verifyemail"],
};
