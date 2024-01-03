import { BD } from "../../Api/config";
import Swal from "sweetalert2";

export const useSystemRegistro = () => {
  const GetRegister = async () => {};

  const AddRegister = async (data) => {
    console.log(data);
    try {
      const response = await BD.post("/usuario", data);
      Swal.fire({
        title: "!Gracias Por Registrarte¡",
        text: "Tu Recomensa esta en camino",
        icon: "success",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      const { code } = error;

      if (code === "ERR_NETWORK") {
        Swal.fire({
          title: "Error",
          text: "!Ups¡ Hubo un error, por favor revisa tu conexion a internet",
          icon: "error",
        });
      }

      const { response } = error;

      const { data } = response;

      if (data) {
        return Swal.fire({
          title: "Error",
          text: data?.msg,
          icon: "error",
        });
      }

      console.log({ code, data });
    }
  };

  return {
    //*PROPERTYS

    //*METHODS
    GetRegister,
    AddRegister,
  };
};
