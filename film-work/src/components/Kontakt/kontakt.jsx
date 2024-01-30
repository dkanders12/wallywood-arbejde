import React from "react";
import "./kontakt.scss";
import { useState } from "react";
export const FormKontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("New ID:", data.newId);
      } else {
        console.error("Failed to create contact record");
      }
    } catch (error) {
      console.error("Error during contact creation:", error);
    }
  };
  return (
    <>
      <section className="KontaktCon">
        <article className="FormV">
          <h2>Kontakt</h2>
          <form>
            <p>Dit navn:</p>
            <input type="text" id="name" name="name" />
            <p>Din email:</p>
            <input type="email" id="email" name="email" />
            <p>Din besked:</p>
            <input
              type="text"
              id="message"
              name="message"
              className="message"
            />
            <button type="submit">Send</button>
          </form>
        </article>
      </section>
    </>
  );
};
