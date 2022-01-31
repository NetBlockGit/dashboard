import React from "react";
import { AuthContext } from "./AuthContext";
export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [token, setIToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );

  const setToken = (t: string) => {
    localStorage.setItem("token", t);
    setIToken(t);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setIToken(null);
  };

  const value = { token, setToken, removeToken };
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
