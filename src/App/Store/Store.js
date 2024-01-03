import { configureStore } from "@reduxjs/toolkit";
import { PromptsSlice } from "./Prompts/PromptsSlice";

export const store = configureStore({
  reducer: {
    prompt: PromptsSlice.reducer,
  },
});
