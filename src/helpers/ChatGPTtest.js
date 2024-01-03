import axios from "axios";

export const generateTextFromFitnessContext = async (userResponses) => {
  const APIKEY = "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";
  console.log(userResponses);

  const prompt = {
    ServiciosFitness: userResponses.map((question) => ({
      Pregunta: question.Pregunta,
      Respuestas: question.Respuestas,
    })),
  };

  console.log(JSON.stringify(prompt));

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `Necesito que me crees una estreatgia en menos de 50 palabras o 100 cacteres que sea invoadora, mi empresa se llama LiveGood y empiza con formalidad, ejemplo: En liveGood te comendamos... algo asi${JSON.stringify(
          prompt
        )}"`,
        max_tokens: 150, // Modifica según tus necesidades
        temperature: 0.7, // Modifica según tus necesidades
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${APIKEY}`,
        },
      }
    );

    // Modifica la lógica de la respuesta según tus necesidades
    const generatedText = response.data.choices[0].text.trim();
    console.log(generatedText);
    return generatedText; // Devuelve el texto generado para usarlo fuera de la función si es necesario
  } catch (error) {
    console.error(error);
    throw error; // Maneja el error o lánzalo para que sea manejado en otro lugar
  }
};
