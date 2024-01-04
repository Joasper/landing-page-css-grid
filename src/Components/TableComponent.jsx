import React, { useEffect } from "react";
import { useSystemRegistro } from "../App/Hooks/useSystemRegistro";
import { GenerarPDF } from "./GenerarPDF";

export const TableComponent = () => {
  const { GetRegister, users } = useSystemRegistro();

  useEffect(() => {
    GetRegister();
  }, []);
  return (
    <div>
      <GenerarPDF />
      <table className="table">
        <thead style={{ color: "white" }}>
          <tr>
            <th
              scope="col"
              style={{
                fontSize: "10px",
              }}
            >
              Billetera
            </th>
            <th
              scope="col"
              style={{
                fontSize: "10px",
              }}
            >
              Nombre
            </th>
            <th
              scope="col"
              style={{
                fontSize: "10px",
              }}
            >
              Apellido
            </th>
            <th
              scope="col"
              style={{
                fontSize: "10px",
              }}
            >
              Telefono
            </th>
            <th
              scope="col"
              style={{
                fontSize: "10px",
              }}
            >
              Pais
            </th>
          </tr>
        </thead>
        <tbody style={{ color: "white" }}>
          {users?.login?.map((u) => {
            return (
              <tr key={u._id}>
                <td
                  style={{
                    fontSize: "10px",
                  }}
                >
                  {u.Billetera}{" "}
                </td>
                <td
                  style={{
                    fontSize: "10px",
                  }}
                >
                  {u.Nombre}{" "}
                </td>
                <td
                  style={{
                    fontSize: "10px",
                  }}
                >
                  {u.Apellido}{" "}
                </td>
                <td
                  style={{
                    fontSize: "10px",
                  }}
                >
                  {u.Telefono}{" "}
                </td>
                <td
                  style={{
                    fontSize: "10px",
                  }}
                >
                  {u.Pais}{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
