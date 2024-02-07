import React, { useState } from "react";
import { LoginForm } from "../Login/login";
import { SignUp } from "../Signup/signup";
export const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchForm = () => {
    setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
  };

  return (
    <div>
      {isLoginForm ? (
        <LoginForm onSwitchForm={switchForm} />
      ) : (
        <SignUp onSwitchForm={switchForm} />
      )}
    </div>
  );
};
