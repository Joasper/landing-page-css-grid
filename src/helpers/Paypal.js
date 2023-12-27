import axios from "axios"

export const CrearOrden =  async() => {

  const order = {
    intent: "CAPTURE",
    purchace_units: [
      {
        amount: {
          currency_code: "USD",
          value: "30.00"
        }
      }
    ],
    application_context: {
      brand_name: "LiveGood Pay",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: "https://livegood-pay.network/",
      cancel_url: "https://livegood-pay.network/"
    }
  }

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

 const {data: {access_token}} = await axios.post("https://api-m.sandbox.paypal.com/v1/oauth2/token", params, {
  
  auth: {
    username: "AYwz0Oz0mWbht9J4Cd0_uedwAsHU5W49jMyT5Mfuo3Cu6M9eUmOYCBZkrKZrRU2B8znPXmmdftAcB6ha",
    password: "EFhbHVq9V6_782X7zrgnwCBWR--aOZbibRhPfv6FmX025WVwjjysp661Op2A4YNmqhl8MRAKMUQpR2l2"
  }}
  )


const response = await axios.post("https://api-m.sandbox.paypal.com/v2/checkout/orders", order, {
  headers: {
    Authorization: `Bearer ${access_token}`,
  }
 }

 )

 console.log(response?.data);

}