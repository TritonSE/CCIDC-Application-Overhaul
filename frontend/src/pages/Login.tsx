import { useContext, FormEvent } from "react";
import styles from "./Login.module.css";
import { AuthContext } from "../contexts/AuthContext";

export function Login() {
  const { login } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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

    try {
      if (!login) throw new Error("Invalid AuthContext login");
      const result = await login(username, password);
      alert("Sucess! " + JSON.stringify(result));
      // TODO: save to cookies/ local storage, then redirect
    } catch (error) {
      alert(error);
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
          <input id="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
