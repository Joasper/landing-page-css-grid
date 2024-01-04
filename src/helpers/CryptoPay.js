const CoinBaseApi = "f218fd25-f438-4a8f-ab01-4f0595782575";
const baseUrl = "https://api.commerce.coinbase.com/charges";

export const CryptoPay = async () => {
  const ChargeData = {
    name: "Membresia LiveGood Pay",
    description:
      "Esta es una membresia para hacerte usuario con privilegios en LiveGood Pay",
    local_price: {
      amount: "45.00",
      currency: "USD",
    },
    pricing_type: "fixed_price",
    redirect_url: "https://livegood-pay.network/",
    cancel_url: "https://livegood-pay.network/",
  };

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CC-Api-Key": CoinBaseApi,
        "X-CC-Version": "2018-03-22",
      },
      body: JSON.stringify(ChargeData),
    });

    if (response.ok) {
      const charge = await response.json();
      console.log("Cargo creado:", charge);

      // Verificar si la respuesta contiene la URL hosted_url
      if (charge.data.hosted_url) {
        // Redirigir al usuario a la URL hosted_url
        window.location.href = charge.data.hosted_url;
      } else {
        console.error("No se encontró la URL de pago.");
      }
    } else {
      console.error("Error al crear el cargo:", response.statusText);
      throw new Error("Error al crear el cargo");
    }
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error de red u otros errores");
  }
};
