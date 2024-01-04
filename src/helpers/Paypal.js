import axios from "axios";

export const CrearOrden = async () => {
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "30.00",
        },
      },
    ],
    application_context: {
      brand_name: "LiveGood Pay",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: "https://livegood-pay.network/pagado",
      cancel_url: "https://livegood-pay.network/",
    },
  };

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const {
    data: { access_token },
  } = await axios.post("https://api-m.paypal.com/v1/oauth2/token", params, {
    auth: {
      username:
        "Aej11rWA8FTmyQrcyk2hihXyGT3eyblrEC1AwP1qmWS8MBFc9tJU0Kvxg7uzDmQgYtGg2AhA-itq-5nZ",
      password:
        "EIlFaGo9T0-OxwWNuWIbkDBr18d1ytcX4_1OxlrlddhOd00f2oxHYRsuGT6wuo35o479qKOMRk9Z6lMf",
    },
  });

  console.log(access_token);

  const response = await axios.post(
    "https://api-m.paypal.com/v2/checkout/orders",
    order,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  window.location.href = response.data.links.find(
    (link) => link.rel === "approve"
  ).href;

  console.log(response?.data);
};
