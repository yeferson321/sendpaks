'use server';

import { headers } from "next/headers";
import { cookies } from "next/headers";

import { locales, defaultLocale } from "@/navegación";
/* import { u } from 'next/server';
 */
/* export async function createUser() {
    const authorization = headers().get('Accept-Language')
    return authorization
}
 */
/*   cookies().set({
        name: 'NEXT_LOCALE',
        value: 'eg',
        httpOnly: true,
        path: '/',
      }) */
/*   
type RequestCookie = {
    name: string;
    value: string;
}
type Validar = {
    locale: string | RequestCookie;

} */



export async function ValidateLocale() {
  /*  console.log(userAgent('/').browser) */
    
  const NEXT_LOCALE = cookies().get("NEXT_LOCALE")?.value;

  const NAVIGATOR_LOCALE = navigator.language.toLowerCase(); // Convertimos a minúsculas para hacer la comparación más robusta

  const validarExistencia = (locale: string) => {
    console.log("locale", locale);
    return locales.some((local) => locale.startsWith(local));
  };
  headers
  if (NEXT_LOCALE) {
    const hola = validarExistencia(NEXT_LOCALE);

    if (hola === true) {
      console.log("NEXT_LOCALE", NEXT_LOCALE);
      /* redirect(`${NEXT_LOCALE} ${URL}`) */
      return;
    }
  }

  if (NAVIGATOR_LOCALE) {
    const hola = validarExistencia(NAVIGATOR_LOCALE);

    if (hola === true) {
      console.log("NAVIGATOR_LOCALE", NAVIGATOR_LOCALE.split("-")[0]);
      /* redirect(`${NEXT_LOCALE} ${URL}`) */
      return;
    }
  }

  console.log("defaul_LOCALE", defaultLocale);

  /*  const coincidencia = NEXT_LOCALE ? locales.includes(NEXT_LOCALE ?? "")
   */
  /*   locales.some((local) => NAVIGATOR_LOCALE.startsWith(local)); */
  /* 
  if (coincidencia) {



    if (NEXT_LOCALE) {
        console.log(NEXT_LOCALE)

    }
}
 */
  /*   router.replace('/about', {locale: 'en'}); */

  return "...";
}
