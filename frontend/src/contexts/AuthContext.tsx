import React, { createContext, useEffect, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  userEmail: string | undefined;
  login: (username: string, password: string) => Promise<boolean> | undefined;
  verifyLogin: () => Promise<boolean> | undefined;
  logout: () => Promise<boolean> | undefined;
};

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: true,
  userEmail: undefined,
  login: () => undefined,
  verifyLogin: () => undefined,
  logout: () => undefined,
};

const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;
const ENDPOINTS = {
  LOGIN: import.meta.env.VITE_SERVER_LOGIN_ENDPOINT as string,
  LOGOUT: import.meta.env.VITE_SERVER_LOGOUT_ENDPOINT as string,
  VALIDATE: import.meta.env.VITE_SERVER_VALIDATE_ENDPOINT as string,
};

export const AuthContext = createContext<AuthState>(initialState);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

  // source: https://stackoverflow.com/a/11767598
  function getCookie(name: string) {
    const cookiestring = RegExp(name + "=[^;]+").exec(document.cookie);
    return decodeURIComponent(cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
  }

  async function setCurrentState() {
    const loggedIn = await verifyLogin();

    setIsLoggedIn(loggedIn);
    setUserEmail(getCookie("email"));
    setIsLoading(false);
  }

  // set auth values on page load
  useEffect(() => {
    void setCurrentState();
  }, []);

  async function login(username: string, password: string) {
    setIsLoading(true);
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

      void setCurrentState();
      return response.ok;
    } catch (e) {
      setIsLoading(false);
      return false;
    }
  }

  async function logout() {
    setIsLoading(true);
    try {
      const URL = `${SERVER_URL}${ENDPOINTS.LOGOUT}`;
      const response = await fetch(URL, {
        method: "POST",
        credentials: "include",
      });

      void setCurrentState();
      return response.ok;
    } catch (e) {
      setIsLoading(false);
      return false;
    }
  }

  const authValue = {
    isLoggedIn,
    userEmail,
    isLoading,
    verifyLogin,
    login,
    logout,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}
