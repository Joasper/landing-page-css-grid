import { createSlice } from "@reduxjs/toolkit";

export const PromptsSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "prompt",
  //declaracion del estado inicial de las variables
  initialState: {
    Preguntas: [],
  },
  //funciones que modifican el estado
  reducers: {
    //incremeta por una cantidad dada
    ObtenerPreguntas: (state, { payload }) => {
      state.Preguntas = [...state.Preguntas, payload];
    },
  },
});

export const { ObtenerPreguntas } = PromptsSlice.actions;
