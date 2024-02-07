import React from "react";
import "./login.scss";
import { useAuth } from "../../providers/Auth.provide";
import { useForm } from "react-hook-form";
import axios from "axios";

export const LoginForm = ({ onSwitchForm }) => {
  const { setLoginData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLogin = async (data) => {
    const endpoint = `http://localhost:3000/login`;
    try {
      const result = await axios.post(endpoint, data);
      sessionStorage.setItem("access_token", JSON.stringify(result.data));
      setLoginData(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Incorrect username or password");
    }
  };

  return (
    <section className="LoginCon">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submitLogin)}>
        <div>
          <p>Your Username:</p>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
          />
          {errors.username && <span>Username is required</span>}
        </div>
        <div>
          <p>Your Password:</p>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Password is required</span>}
        </div>
        <button type="submit">Login</button>
      </form>
      <a onClick={onSwitchForm} href="#">
        Switch to Sign Up
      </a>
    </section>
  );
};
