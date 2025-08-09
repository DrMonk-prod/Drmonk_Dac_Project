// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("authToken")?.value; // or integrate next-auth/session logic

//   // If no token, redirect to login
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   // Allow the request to continue
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/profile", "/booking/:path*", "/admin/:path*"],
// };
