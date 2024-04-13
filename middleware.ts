import createIntlMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./navegación";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// Middleware de internacionalización
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
});

// Middleware principal
export default function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const regex = new RegExp(`^/(${locales.join('|')})(/.*)?$`);  

  if (pathname === '/') return intlMiddleware(request);

  if (regex.exec(pathname)) return intlMiddleware(request);

  if (!regex.exec(pathname)) {
    const locale = cookies().get('NEXT_LOCALE')?.value || defaultLocale;
    const newPath = `/${pathname.split('/').filter(Boolean).slice(1).join('/')}`

    return NextResponse.redirect(`${origin}/${locale}${newPath}`)
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};