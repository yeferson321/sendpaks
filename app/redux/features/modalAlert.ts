import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

export const showModal = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    copyUrlShare: (state, actions) => {
      // const { text } = actions.payload; // Obtener el texto del payload
      const locationHref = window.location.href || "onlypaks.com";

      if (navigator.share) {
        navigator.share({
          title: "Mira mi contenido exclusivo",
          text:
            actions.payload.text ||
            "El mejor contenido lo encuentras en OnlyPack.com",
          url: locationHref,
        });
        return;
      };

      navigator.clipboard.writeText(locationHref);

      state.showModal = true;
      if (state.showModal !== true) return
      setTimeout(() => (state.showModal = true), 4000);
    },
  
  },
});

export const { copyUrlShare } = showModal.actions;

export default showModal.reducer;
