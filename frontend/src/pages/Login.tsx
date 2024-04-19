import { useContext, FormEvent, useEffect } from "react";
import styles from "./Login.module.css";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { isLoggedIn, login, serverLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect once logged in
  useEffect(() => {
    if (isLoggedIn) navigate("/apply");
  }, [isLoggedIn]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(await serverLogin());
    return;
    const target = event?.target as HTMLFormElement | null;

    if (!target || target?.length < 2) {
      alert("Error submitting login!");
      return;
    }

    const username = (target.elements[0] as HTMLInputElement | undefined)?.value;
    const password = (target.elements[1] as HTMLInputElement | undefined)?.value;

    if (!username || !username.length || !password || !password.length) {
      alert("Username and password are required!");
      return;
    }

    const result = await login(username, password);

    if (!result) alert("login failed!");
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
          <input id="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
