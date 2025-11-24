import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface LangState {
   lang: "en" | "id";
}

const initialState: LangState = {
   lang: "en",
};

export const langSlice = createSlice({
   name: "lang",
   initialState,
   reducers: {
      setLang(state, action: PayloadAction<"en" | "id">) {
         state.lang = action.payload;
      },
   },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
