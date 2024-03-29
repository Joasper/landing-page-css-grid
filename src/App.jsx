import { Inicio } from "./App/Pages/Inicio";
import YourComponent from "./Components/Circular";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { CrearOrden } from "./helpers/Paypal";
import { Thanks } from "./App/Pages/Thanks";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const Paypal = CrearOrden();
  console.log(Paypal);

  useEffect(() => {
    // Simulación de carga
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Cambiar el tiempo a tu preferencia (en milisegundos)

    // Limpieza del temporizador al desmontar el componente
    return () => clearTimeout(loaderTimeout);
  }, []);
  return (
    <div className="">
      <div>
        {isLoading ? (
          <CircularProgress />
        ) : (
          // Contenido de tu página una vez que isLoading sea falso

          <>
            <Inicio />
            <Thanks />
          </>
        )}
      </div>
    </div>
  );
};
