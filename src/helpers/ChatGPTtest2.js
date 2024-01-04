import { OpenAIAPI } from "openai"; // Asegúrate de importar OpenAIAPI en lugar de OpenAI

const openai = new OpenAIAPI({
  apiKey: "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",
  //dangerouslyAllowBrowser: true, // Puedes habilitar esta opción si estás ejecutando esto en un navegador (cuidado con la seguridad)
});

const generarEstrategia = async (prompt) => {
  try {
    const promptText = `Nuestro negocio se enfoca en ayudar a las personas a generar estrategias únicas e innovadoras para ganar dinero con nuestros productos. Ofrecemos productos de alta calidad y queremos proporcionar a nuestros clientes oportunidades creativas para aumentar sus ingresos mediante el uso inteligente de nuestros productos.

[INSTRUCCIONES PARA RESPONDER]
1. Proporciona una estrategia única y creativa que nuestros clientes puedan utilizar para ganar dinero con nuestros productos.
2. Asegúrate de que la estrategia sea innovadora y se centre en cómo nuestros productos pueden ser una herramienta clave para generar ingresos.
3. Limita la respuesta principal a un par de frases. Luego, estas son las preguntas y respuestas del usuario para que apartir de ahi la generes ${JSON.stringify(
      prompt
    )}`;

    const respuesta = await openai.createCompletion({
      engine: "davinci",
      prompt: promptText,
      max_tokens: 100,
    });

    console.log(respuesta);

    console.log(respuesta.data.choices[0].text.trim());
    // Maneja la respuesta como desees en tu interfaz de usuario
  } catch (error) {
    console.error("Error al generar estrategia:", error);
    // Maneja el error de alguna manera adecuada
  }
};

export default generarEstrategia;
