import React, { createContext, useEffect, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<boolean> | undefined;
  verifyLogin: () => Promise<boolean> | undefined;
  logout: () => void | undefined;
  getUserAuth: () => Object | undefined;

  serverLogin: (username: string, password: string) => Promise<boolean> | undefined;
  serverVerify: () => Promise<boolean> | undefined;
};

const initialState: AuthState = {
  isLoggedIn: false,
  login: () => undefined,
  verifyLogin: () => undefined,
  logout: () => undefined,
  getUserAuth: () => undefined,
  serverLogin: () => undefined,
  serverVerify: () => undefined,
};

export const AuthContext = createContext<AuthState>(initialState);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function verifyLogin() {
    const { token } = getUserAuth();

    if (!token) return false;

    // Assume token valid until cors error fixed
    return true;

    const baseUrl = "https://ccidc.org";
    const endpoint = "/wp-json/jwt-auth/v1/token/validate";
    const URL = `${baseUrl}${endpoint}`;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.ok;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function serverLogin(username: string, password: string) {
    const serverURL = "http://localhost:3001";
    const endpoint = "/login";
    const URL = `${serverURL}${endpoint}`;

    try {
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

      return response.ok;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  
  async function serverVerify() {
    const serverURL = "http://localhost:3001";
    const endpoint = "/validate";
    const URL = `${serverURL}${endpoint}`;

    try {
      const response = await fetch(URL, {
        method: "GET",
        credentials: "include",
      });

      return response.ok;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async function login(username: string, password: string) {
    const baseUrl = "https://ccidc.org";
    const endpoint = "/wp-json/jwt-auth/v1/token";
    const params = new URLSearchParams({
      username,
      password,
    });
    const URL = `${baseUrl}${endpoint}?${params}`;

    try {
      const response = await fetch(URL, {
        method: "POST",
      });

      if (!response.ok) return false;

      const result = await response.json();

      const userAuth = {
        token: result?.token,
        email: result?.user_email,
        nicename: result?.user_nicename,
        displayName: result?.user_display_name,
      };

      localStorage.setItem("userAuth", JSON.stringify(userAuth));
      setIsLoggedIn(true);

      return true;
    } catch (error) {
      return false;
    }
  }

  function logout() {
    localStorage.removeItem("userAuth");
    setIsLoggedIn(false);
  }

  function getUserAuth() {
    const userAuth = localStorage.getItem("userAuth");
    return userAuth ? JSON.parse(userAuth) : {};
  }

  // set isLoggedIn on page load
  useEffect(() => {
    async function setLoginState() {
      setIsLoggedIn(await verifyLogin());
    }

    setLoginState();
  }, []);

  const authValue = {
    isLoggedIn,
    verifyLogin,
    login,
    logout,
    getUserAuth,
    serverLogin,
    serverVerify,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}
