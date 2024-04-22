import { FormEvent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import styles from "./Login.module.css";

export function Login() {
  const { isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect once logged in
  useEffect(() => {
    if (isLoggedIn) navigate("/apply");
  }, [isLoggedIn]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const target = event?.target as HTMLFormElement | null;

    if (!target || target?.length < 2) {
      alert("Error submitting login!");
      return;
    }

    const username = (target.elements[0] as HTMLInputElement | undefined)?.value;
    const password = (target.elements[1] as HTMLInputElement | undefined)?.value;

    if (!username?.length || !password?.length) {
      alert("Username and password are required!");
      return;
    }

    const loginPromise = login(username, password);

    if (loginPromise instanceof Promise) {
      loginPromise
        .then((result) => {
          if (!result) alert("Login Failed");
        })
        .catch(() => {
          alert("Login Failed");
        });
    } else {
      alert("Login Failed");
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <h2 className={styles.loginHeader}>CCIDC Login</h2>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <label htmlFor="username">Username:</label>
          <br />
          <input id="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input id="password" type="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
