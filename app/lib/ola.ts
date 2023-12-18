
import { changelanguage } from "../redux/features/language/language";

import en from "../redux/features/language/translations/en.json";
import es from "../redux/features/language/translations/es.json";

type hola = {
  profile: {
    online: string,
    range: string,
    likes: string,
    posts: string
  },
  sidebar: {
    light_mode: string,
    dark_mode: string,
    about: string,
    login: string
  }
}


// Define el tipo para el objeto que contiene los idiomas y las traducciones
type Languages = {
  "en-US": hola;
  "es-ES": hola;
  // Puedes agregar más idiomas aquí si es necesario
};

const languages: Languages = {
  "en-US": en,
  "es-ES": es,
};

export const defineLanguage = () => {

  const language = localStorage.getItem("language");

  if (language) {

    return languages[language as keyof Languages];

  } else {

    const languageCode = navigator.language; // Obtener el código de idioma principal

    // Verificar si hay una traducción para el idioma del navegador, si no, usar español por defecto
    return languages[languageCode as keyof Languages] || languages["es-ES"];
  }
};
