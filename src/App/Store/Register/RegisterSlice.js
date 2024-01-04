import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "register",
  //declaracion del estado inicial de las variables
  initialState: {
    users: [],
  },
  //funciones que modifican el estado
  reducers: {
    //incremeta por una cantidad dada
    GetUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { GetUsers } = RegisterSlice.actions;
