import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log(`path= ${pathname}`);
    if (pathname.startsWith('/admin')) {
        const authToken = "WtJaW5A5TgO9Smg6hrI8m7umjV1OwVk8rmBOw5z2";
        if (!authToken) {
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    }
    return NextResponse.next();
}
export const config = {
    matcher: [
        '/mypage/:path*',
        '/admin/:path*'
    ],
};