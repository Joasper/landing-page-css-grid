import React, { useEffect } from "react";
import "jspdf-autotable";
import { jsPDF } from "jspdf";
import { Button, MenuItem, TextField } from "@mui/material";
import { useSystemRegistro } from "../App/Hooks/useSystemRegistro";

export const GenerarPDF = () => {
  const { GetRegister, users } = useSystemRegistro();
  useEffect(() => {
    GetRegister();
  }, []);

  const data = {
    Nombre: "Joasper",
    Apellido: "Feliz",
    Edad: 18,
    Vivo: true,
  };

  const generarNuevoPDF = () => {
    const doc = new jsPDF();

    const columns = [
      "Billetera",
      "Nombre",
      "Apellido",
      "Telefono",
      "Direccion",
    ];

    const DataonPdf = users?.login?.map((proveedor) => {
      const dataTable = [
        `${proveedor.Billetera}`,
        `${proveedor.Nombre}`,
        `${proveedor.Apellido}`,
        `${proveedor.Telefono}`,
        `${proveedor.Pais}`,
      ];

      return dataTable;
    });

    doc.autoTable({ startY: 30, head: [columns], body: DataonPdf });

    doc.save(`Registro`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        marginBottom: "10px",
      }}
    >
      <Button
        variant="contained"
        onClick={generarNuevoPDF}
        style={{
          backgroundColor: "#faff00",
          color: "black",
        }}
      >
        Generar PDF
      </Button>
    </div>
  );
};
