import { Table } from "@mui/material";
import React, { useEffect } from "react";
import BasicTable from "../../Components/TableComponent";
import { useSystemRegistro } from "../Hooks/useSystemRegistro";

export const Datatable = () => {
  const { GetRegister, users } = useSystemRegistro();

  useEffect(() => {
    GetRegister();
  }, []);

  const Columns = [
    {
      key: "1",
      title: "BILLETERA",
      dataIndex: "Billetera",
    },
    {
      key: "1",
      title: "BILLETERA",
      dataIndex: "Billetera",
    },
    {
      key: "1",
      title: "BILLETERA",
      dataIndex: "Billetera",
    },
    {
      key: "1",
      title: "BILLETERA",
      dataIndex: "Billetera",
    },
    {
      key: "1",
      title: "BILLETERA",
      dataIndex: "Billetera",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <BasicTable />
    </div>
  );
};
