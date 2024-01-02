import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
};

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
     
    },
  },
});

export const { changeTheme } = theme.actions;

export default theme.reducer;
