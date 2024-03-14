import React, { createContext, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  login?: () => void;
  logout?: () => void;
};

const initialState: AuthState = {
  isLoggedIn: false,
};

export const AuthContext = createContext<AuthState>(initialState);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  const authValue = {
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}
