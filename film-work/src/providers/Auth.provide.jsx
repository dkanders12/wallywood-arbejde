import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("access_token")) {
      setLoginData(JSON.parse(sessionStorage.getItem("access_token")));
    }
  });

  return (
    <AuthContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
