import { createSlice } from "@reduxjs/toolkit";
/* 
import en from "./translations/en.json";
import es from "./translations/es.json";

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


Define el tipo para el objeto que contiene los idiomas y las traducciones
type Languages = {
  "en-US": hola;
  "es-ES": hola;
  Puedes agregar más idiomas aquí si es necesario
};

const languages: Languages = {
  "en-US": en,
  "es-ES": es,
};

defineLanguage: () => {

  const language = localStorage.getItem("language");

  if (language) {

    return languages[language as keyof Languages];

  } else {

    const languageCode = navigator.language; // Obtener el código de idioma principal

    Verificar si hay una traducción para el idioma del navegador, si no, usar español por defecto
    return languages[languageCode as keyof Languages] || languages["es-ES"];
  }
}
 */
const initialState = {
    languageCode: ""
  /*   language: "es-ES" */
};

export const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    changelanguage: (state, actions) => {
      state.languageCode = actions.payload.language
    },
    defineLanguage: () => {

/*       const language = localStorage.getItem("language");
    
      if (language) {
    
        return languages[language as keyof Languages];
    
      } else {
    
        const languageCode = navigator.language; // Obtener el código de idioma principal
    
        // Verificar si hay una traducción para el idioma del navegador, si no, usar español por defecto
        return languages[languageCode as keyof Languages] || languages["es-ES"];
      } */
    }
    
  },
});

export const { changelanguage } = language.actions;

export default language.reducer;