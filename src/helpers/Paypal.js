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
  } = await axios.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    params,
    {
      auth: {
        username:
          "AeHiNy-zK8v20JLrisvHSjtOKE_RTtQblc6a19O-EHGDtA_0U-0nxTApR8R7Nz1SlSgiMmHCzrLYe3pH",
        password:
          "EIspG-_WP1AI44CWk8OhKBn9y95y5-oAW7GszsCni_PF-m4KIsqWYFHShdEvD3oAjSWQafAqHi2UVxPM",
      },
    }
  );

  console.log(access_token);

  const response = await axios.post(
    "https://api-m.sandbox.paypal.com/v2/checkout/orders",
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
