import React, { createContext, useEffect, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  userEmail: string | undefined;
  login: (username: string, password: string) => Promise<boolean> | undefined;
  verifyLogin: () => Promise<boolean> | undefined;
  logout: () => Promise<boolean> | undefined;
};

const initialState: AuthState = {
  isLoggedIn: false,
  userEmail: undefined,
  login: () => undefined,
  verifyLogin: () => undefined,
  logout: () => undefined,
};

const SERVER_URL = "http://localhost:3001";
const ENDPOINTS = {
  LOGIN: "/login",
  LOGOUT: "/logout",
  VALIDATE: "/validate",
};

export const AuthContext = createContext<AuthState>(initialState);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(undefined);

  async function login(username: string, password: string) {
    try {
      const URL = `${SERVER_URL}${ENDPOINTS.LOGIN}`;
      const response = await fetch(URL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        setCurrentState();
        return true;
      }

      return false;
    } catch (e) {
      return false;
    }
  }

  async function logout() {
    try {
      const URL = `${SERVER_URL}${ENDPOINTS.LOGOUT}`;
      const response = await fetch(URL, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setCurrentState();
        return true;
      }

      return false;
    } catch (e) {
      return false;
    }
  }

  async function verifyLogin() {
    try {
      const URL = `${SERVER_URL}${ENDPOINTS.VALIDATE}`;
      const response = await fetch(URL, {
        method: "GET",
        credentials: "include",
      });

      return response.ok;
    } catch (e) {
      return false;
    }
  }

  async function setCurrentState() {
    const loggedIn = await verifyLogin();

    setIsLoggedIn(loggedIn);
  }

  // set auth values on page load
  useEffect(() => {
    setCurrentState();
  }, []);

  const authValue = {
    isLoggedIn,
    userEmail,
    verifyLogin,
    login,
    logout,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}
