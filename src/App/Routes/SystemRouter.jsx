import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pagar } from "../Pages/Pagar";
import { Inicio } from "../Pages/Inicio";
import { Thanks } from "../Pages/Thanks";

export const SystemRouter = () => {
  return (
    <Routes>
      <Route path="/ventaa" element={<Pagar />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/pagado" element={<Thanks />} />
    </Routes>
  );
};
