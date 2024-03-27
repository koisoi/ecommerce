import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    // if (req.url === req.url.toLowerCase()) return NextResponse.next();

    if (req.url !== req.url.toLowerCase())
        return NextResponse.redirect(
            new URL(req.nextUrl.origin + req.nextUrl.pathname.toLowerCase()),
            301
        );
}

export const config = {
    // Skip all paths that should not be internationalized. This example skips the
    // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
    matcher: ["/((?!api|_next|.*\\..*).*)"]
};
