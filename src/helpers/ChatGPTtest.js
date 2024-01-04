import axios from "axios";

export const generateTextFromFitnessContext = async (userResponses) => {
  const APIKEY = "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";
  console.log(userResponses);

  console.log(JSON.stringify(prompt));

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `Nuestro negocio se enfoca en ayudar a las personas a generar estrategias únicas e innovadoras para ganar dinero con nuestros productos. Ofrecemos productos de alta calidad y queremos proporcionar a nuestros clientes oportunidades creativas para aumentar sus ingresos mediante el uso inteligente de nuestros productos.

        [INSTRUCCIONES PARA RESPONDER]
        1. Proporciona una estrategia única y creativa que nuestros clientes puedan utilizar para ganar dinero con nuestros productos.
        2. Asegúrate de que la estrategia sea innovadora y se centre en cómo nuestros productos pueden ser una herramienta clave para generar ingresos.
        3. Limita la respuesta principal a un par de frases.`,
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
