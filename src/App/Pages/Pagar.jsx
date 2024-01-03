import React from "react";
import { CrearOrden } from "../../helpers/Paypal";

export const Pagar = () => {
  const paypal = CrearOrden();
  console.log(paypal);

  return <div>Pagar</div>;
};
