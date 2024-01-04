import { configureStore } from "@reduxjs/toolkit";
import { PromptsSlice } from "./Prompts/PromptsSlice";
import { RegisterSlice } from "./Register/RegisterSlice";

export const store = configureStore({
  reducer: {
    prompt: PromptsSlice.reducer,
    register: RegisterSlice.reducer,
  },
});
