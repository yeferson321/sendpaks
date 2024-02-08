import { getRequestConfig } from "next-intl/server";
import NotFound from "./app/[locale]/not-found";
import { locales } from "./navegación";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) NotFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
