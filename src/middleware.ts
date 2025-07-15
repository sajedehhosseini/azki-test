import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;

    console.log('Middleware:', {
        path: pathname,
        hasToken: !!token,
        redirected: !token && pathname !== "/register"
    });

    if (!token && pathname !== "/register") {
        console.log('not found token redirect to register in progress...');
        return NextResponse.redirect(new URL("/register", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|favicon.ico|svg).*)"]
};
