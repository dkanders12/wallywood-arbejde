import React from "react";
import "./login.scss";
export const LoginForm = () => {
  return (
    <>
      <section className="LoginCon">
        <article className="FormV">
          <h2>Login</h2>
          <p>Dit Brugernavn:</p>
          <input type="name" id="name" name="name" />
          <p>Dit Pasword:</p>
          <input type="password" id="password" name="password" />

          <button>Login</button>
        </article>
      </section>
    </>
  );
};
