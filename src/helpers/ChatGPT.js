export const ChatGPT = async () => {
  const APIKEY = "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";

  axios
    .post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: "Dime Hola",
        max_tokens: 5,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${APIKEY}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
