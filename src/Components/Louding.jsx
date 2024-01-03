import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ChatGPT } from "./ChatGPT";
import { generateTextFromFitnessContext } from "../helpers/ChatGPTtest";
import { useSelector } from "react-redux";

export const Louding = () => {
  const [Louding, setLouding] = useState(true);
  const { Preguntas } = useSelector((state) => state.prompt);
  const [strategy, setStrategy] = useState("");

  useEffect(() => {
    // Simulación de la llamada a la función ChatGPT
    const fetchData = async () => {
      try {
        // Llama a la función que interactúa con la API de OpenAI para generar el texto
        const userResponses = [
          // Aquí podrías tener las respuestas del usuario
        ];

        // Simula una demora para mostrar el estado de carga
        setTimeout(async () => {
          const generatedText = await generateTextFromFitnessContext(Preguntas);
          setStrategy(generatedText); // Actualiza el estado con el texto generado
          setLouding(false); // Cambia el estado de carga a false cuando la operación finaliza
        }, 3000); // Simula una demora de 3 segundos (ajusta este valor según sea necesario)
      } catch (error) {
        console.error(error);
        setLouding(false); // En caso de error, también cambia el estado de carga a false
      }
    };

    fetchData(); // Llama a la función al montar el componente
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
        <>
          <p>{strategy}</p> {/* Muestra el texto generado por la IA */}
        </>
      )}
    </div>
  );
};
