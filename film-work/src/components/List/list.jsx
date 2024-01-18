import React, { useEffect } from "react";
import axios from "axios";

export const PosterListComponent = () => {
  useEffect(() => {
    const apiUrl = "http://localhost:4000/poster/list";
    const token = "Bearer YOUR_TOKEN"; // Erstat "YOUR_TOKEN" med din faktiske Bearer Token

    const headers = {
      Authorization: token,
    };

    const params = {
      sort_key: "name",
      sort_direction: "desc",
    };

    axios
      .get(apiUrl, { headers, params })
      .then((response) => {
        console.log("List of posters:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching posters:", error);
      });
  }, []);

  return <div>Loading posters...</div>;
};
