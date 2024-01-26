import React from "react";
import "./kontakt.scss";

export const FormKontakt = () => {
  return (
    <>
      <section className="KontaktCon">
        <article className="FormV">
          <h2>Kontakt</h2>
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
          ></input>
          <button>Send</button>
        </article>
      </section>
    </>
  );
};
