import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (pathname.startsWith('/admin') || pathname.startsWith('/auth/login')) {
        const access_token = request.cookies.get('access_token')?.value;
        if (pathname.startsWith('/admin') && !access_token) {
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
        if (pathname.startsWith('/auth/login') && access_token) {
            return NextResponse.redirect(new URL('/admin', request.url));
        }
    }
    return NextResponse.next();
}
export const config = {
    matcher: [
        '/auth/login',
        '/mypage/:path*',
        '/admin/:path*'
    ],
};