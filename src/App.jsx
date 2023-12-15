import { Inicio } from "./App/Pages/Inicio";
import YourComponent from "./Components/Circular";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          // Contenido de tu página una vez que isLoading sea falso
          <div>
            <YourComponent />
            <Inicio />
          </div>
        )}
      </div>
    </div>
  );
};
