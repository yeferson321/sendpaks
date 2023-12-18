import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false
};

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      const isDarkTheme = document.querySelector("html")?.classList.toggle("dark");

      if (isDarkTheme !== undefined) {
        state.theme = isDarkTheme;
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
      };
    },
  },
});

export const { changeTheme } = theme.actions;

export default theme.reducer;
