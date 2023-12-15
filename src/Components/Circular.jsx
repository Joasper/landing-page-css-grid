import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const YourComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga
    const loaderTimeout = setTimeout(() => {}, 10000); // Cambiar el tiempo a tu preferencia (en milisegundos)
    setIsLoading(false);
    // Limpieza del temporizador al desmontar el componente
    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
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
          <h1>Contenido de la página después de la carga</h1>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
