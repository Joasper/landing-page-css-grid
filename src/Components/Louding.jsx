import { CircularProgress } from "@mui/material";
import React, { useState } from "react";

export const Louding = () => {
  const [Louding, setLouding] = useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLouding(false);
    }, 5000);

    // Limpiamos el timer cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {Louding ? (
        <div className="">
          <div
            className=""
            style={{
              marginLeft: "140px",
              marginTop: "100px",
              marginBottom: "100px",
            }}
          >
            <CircularProgress style={{ color: "#03c22d", margin: "0 auto" }} />
            <p style={{ position: "relative", right: "70px" }}>
              Generando Estrategia...
            </p>
          </div>
        </div>
      ) : (
        <h5>Recomendaciones de la IA...</h5>
      )}
    </div>
  );
};
