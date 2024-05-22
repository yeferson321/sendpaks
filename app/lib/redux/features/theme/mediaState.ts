import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  media: false,
};

export const mediaState = createSlice({
  name: "media",
  initialState,
  reducers: {
    initMedia: (state) => {
      initialState.media = state.media
    },
  }, 
});

export const { initMedia } = mediaState.actions;

export default mediaState.reducer;
