import React from "react";
import { Route, Routes } from "react-router-dom";
import { Pagar } from "../Pages/Pagar";
import { Inicio } from "../Pages/Inicio";
import { Thanks } from "../Pages/Thanks";
import { Datatable } from "../Pages/Datatable";

export const SystemRouter = () => {
  return (
    <Routes>
      <Route path="/ventaa" element={<Pagar />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/pagado" element={<Thanks />} />
      <Route path="/registros" element={<Datatable />} />
    </Routes>
  );
};
