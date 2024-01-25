import React, { useState, useEffect } from "react";
import axios from "axios";
import "./list.scss";

export const PosterListComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3000/posters";
    const token = "Bearer YOUR_TOKEN"; // Erstat "YOUR_TOKEN" med din faktiske Bearer Token

    const headers = {
      Authorization: token,
    };

    const params = {
      sort_key: "random",
      limit: "2",
      attributes: "name,description,image",
    };

    axios
      .get(apiUrl, { headers, params })
      .then((response) => {
        setData(response.data); // Set the fetched data to the state
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posters:", error);
      });
  }, []);

  // You can also log the current state here if needed

  return (
    <>
      {data.map((post) => (
        <article key={post.id}>
          <img src={post.image} alt="" />
          <div>
            <h3>{post.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.description }} />
            {/* Add more fields as needed */} <a href="#">Læs Mere</a>
          </div>
        </article>
      ))}
    </>
  );
};
