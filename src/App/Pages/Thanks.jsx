import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Thanks = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  // Ahora puedes acceder a los query parameters
  const confirmacionPaypal = async (err, result) => {
    const paramValue = searchParams.get("token");
    const response = await axios.post(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${paramValue}/capture`,
      {},
      {
        auth: {
          username:
            "AeHiNy-zK8v20JLrisvHSjtOKE_RTtQblc6a19O-EHGDtA_0U-0nxTApR8R7Nz1SlSgiMmHCzrLYe3pH",
          password:
            "EIspG-_WP1AI44CWk8OhKBn9y95y5-oAW7GszsCni_PF-m4KIsqWYFHShdEvD3oAjSWQafAqHi2UVxPM",
        },
      }
    );
    navigate("/");
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1cnB-IeYdKka38_k0Le9kp41BMKr20ua9"; // Reemplaza ID_DEL_ARCHIVO con el ID de tu archivo en Google Drive

    console.log({ paramValue, response });
  };
  confirmacionPaypal();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Gracias por su compra
    </div>
  );
};
