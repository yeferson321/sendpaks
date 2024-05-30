import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
import { locales } from "./navegación";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

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