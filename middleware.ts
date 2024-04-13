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




    /*  else {

    const LOCALE = cookies().get('NEXT_LOCALE')?.value || defaultLocale;

    return NextResponse.redirect(`${origin}/${LOCALE}${`/${rutaseparada.slice(1).join('/')}`}`)

    console.log(`${origin}/${LOCALE}${`/${rutaseparada.slice(1).join('/')}`}`)
  } */



/*   
  else {



   return NextResponse.redirect(`${origin}/${LOCALE}${`/${rutaseparada.slice(1).join('/')}`}`) 
  }


  if (pathname.match(/^\/(\w{2})\//)) {


    console.log(rutaseparada[0].length);

     */

    /*  const match = pathname.match(/^\/(\w{2})\//);

    console.log("match", match?.[1]);
 */

    /*  return NextResponse.redirect(`${origin}/${defaultLocale}${pathname.replace(/^\/\w{2}\//, '/')}`)
     */
  
  /*   if (!new RegExp(`^/(${locales.join('|')})/.*$`).test(pathname)) {
    


    return NextResponse.redirect(`${origin}/${LOCALE}${pathname}`)

    console.log(`${origin}/${LOCALE}${pathname}`)
  
  } */

  /*   const redirectedPath = `${request.nextUrl.origin}/${LOCALE}`;
  return NextResponse.redirect(redirectedPath) */

  // Ejecuta el middleware de internacionalización primero


/*     return NextResponse.redirect('http://localhost:3000/')
    
   */
  

/* 
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  

  if () {

    console.log("hola")
 
    
  } */
/*
  const shouldHandle = pathname.startsWith('/about')

  console.log("pathname", pathname)

  if (!shouldHandle) return;


  return  intlMiddleware(request)

     const shouldHandle = pathname === '/' || ;
   */

/*   const localeMatch = pathname.match(/^\/([a-zA-Z]{2})(\/.*)?$/);
  let correctedPathname = pathname;
  if (localeMatch) {
    const locale = localeMatch[1];
    if (!locales.includes(locale)) {
      correctedPathname = `/${defaultLocale}${localeMatch[2] || ""}`;
    }
  } else {
    // Si la URL no tiene locale, añade el predeterminado
    correctedPathname = `/${defaultLocale}${pathname}`;
  } */

/*   console.log(correctedPathname);

  const shouldHandle = correctedPathname === "/" || new RegExp(`^/(${locales.join("|")})(/.*)?$`).test(correctedPathname);


  if (!shouldHandle) return;


  console.log(shouldHandle) */

/*   const LOCALE = cookies().get('NEXT_LOCALE') || defaultLocale

  console.log(request.cookies.get('NEXT_LOCALE'))
  return intlMiddleware(request)
 */

/*   console.log('pathname', request.nextUrl.pathname)
 */
/*   if (!shouldHandle) return;
  
  
}*/
/* // Can be imported from a shared module
const intlMiddleware = createIntlMiddleware({
  locales

});

export default async function middleware(request: NextRequest) {

  const url = request.nextUrl.pathname 

  if (containsLocale(url)) {
    console.log("yes")
  } else {
    return NextResponse.redirect('http://localhost:3000/es/hola')
  }

  const handleI18nRouting = createIntlMiddleware({
    locales: locales,
    // Used when no locale matches
    defaultLocale: defaultLocale,
  });
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  // Match all pathnames
  matcher: ['/:path*']
};


 */

/* export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,
}); */
