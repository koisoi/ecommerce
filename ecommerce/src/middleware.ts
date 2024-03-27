import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    // if (req.nextUrl.pathname.startsWith("/catalog")) {
    //     return NextResponse.rewrite(new URL("/catalog-2", req.url));
    // }
    console.log(req.url, req.url.toLowerCase());
    if (req.url === req.url.toLowerCase()) return NextResponse.next();

    return NextResponse.redirect(
        new URL(req.nextUrl.origin + req.nextUrl.pathname.toLowerCase()),
        301
    );
}
