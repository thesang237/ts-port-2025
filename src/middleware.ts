import { NextRequest, NextResponse } from 'next/server';

const PTG_WEATHER_PATH = '/ptg-weather';
const PUBLIC_FILE_PATTERN = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === PTG_WEATHER_PATH ||
    pathname.startsWith(`${PTG_WEATHER_PATH}/`) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/playtogether/weather') ||
    pathname === '/favicon.ico' ||
    PUBLIC_FILE_PATTERN.test(pathname)
  ) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = PTG_WEATHER_PATH;
  redirectUrl.search = '';

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
