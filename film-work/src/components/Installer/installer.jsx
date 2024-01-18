import React, { useEffect } from "react";
import axios from "axios";

export const InstallComponent = () => {
  useEffect(() => {
    const apiUrl = "http://localhost:PORT/install"; // Erstat "PORT" med din faktiske port
    const token = "Bearer YOUR_TOKEN"; // Erstat "YOUR_TOKEN" med din faktiske Bearer Token

    const headers = {
      Authorization: token,
    };

    console.log("Making request to:", apiUrl); // Tilføjet log til at kontrollere URL'en

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log("Install models response:", response.data);
      })
      .catch((error) => {
        console.error("Error installing models:", error);
      });
  }, []);

  return <div>Installing models...</div>;
};
