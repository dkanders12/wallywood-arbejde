import React from "react";
import "./kontakt.scss";

export const kontaktForm = () => {
  return (
    <>
      <section className="KontaktCon">
        <article className="FormV">
          <h2>Kontakt</h2>
          <p>Dit navn:</p>
          <input type="text" />
          <br />
          <p>Din email:</p>
          <input type="email" />
          <br />
          <p>Din besked:</p>
          <input type="message" />
          <br />
          <button>Send</button>
        </article>
      </section>
    </>
  );
};
