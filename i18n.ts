import { getRequestConfig } from "next-intl/server";

import { locales } from "./navegación";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  console.log("getRequestConfig", locale);
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) notFound();

  return {
    formats: {
      number: {
        currency: {
          currencyDisplay: "code",
          style: "currency",
          currency: "USD",
        },
      },
    },
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
