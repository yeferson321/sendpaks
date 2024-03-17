import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const languages = [
  { language: "English", from: "English", locale: "en" },
  { language: "Español", from: "Latin American", locale: "es" },
  { language: "Portugues", from: "Português do Brasil", locale: "pt" },
  { language: "French", from: "Français", locale: "fr" },
  { language: "Arabic", from: "العَرَبِية", locale: "ar" },
  { language: "Simplified Chinese", from: "简体中文", locale: "zh" },
  { language: "Japanese", from: "日本語", locale: "ja" },
  { language: "Italian", from: "Italiano", locale: "it" },
  { language: "Russian", from: "Русский", locale: "ru" },
];

export const locales = ["en", "es", "pt", "fr", "ar", "zh", "ja", "it", "ru"];
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
