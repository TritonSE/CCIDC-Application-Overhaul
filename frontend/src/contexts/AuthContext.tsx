import React, { createContext, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  login?: (username: string, password: string) => void;
  logout?: () => void;
};

const initialState: AuthState = {
  isLoggedIn: false,
};

export const AuthContext = createContext<AuthState>(initialState);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function login(username: string, password: string) {
    setIsLoggedIn(true);
    const baseUrl = "https://ccidc.org/wp-json/jwt-auth/v1/token";
    const usernameEncoded = encodeURIComponent(username);
    const passwordEncoded = encodeURIComponent(password);
    const URL = `${baseUrl}?username=${usernameEncoded}&password=${passwordEncoded}`;

    const response = await fetch(URL, {
      method: "POST",
    });

    const result = await response.json();

    if (response?.status != 200) {
      throw new Error(JSON.stringify(result?.message));
    }

    return result;
  }

  // TODO: logout clears cookies/local storage and redirects to login
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
