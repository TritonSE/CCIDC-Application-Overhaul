import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import styles from "../stylesheets/Login.module.css";

export function Login() {
  const { isLoggedIn, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect once logged in
  useEffect(() => {
    // TODO: route to correct path, currently no way of knowing what path (1, 2, 3, or 4) to route to
    if (isLoggedIn) navigate("/path1");
  }, [isLoggedIn]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // return if still processing previous login request
    if (isLoginLoading) return;

    setIsLoginLoading(true);
    const loginPromise = login(username, password);

    if (loginPromise instanceof Promise) {
      loginPromise
        .then((result) => {
          if (!result) {
            setShowError(true);
            setIsLoginLoading(false);
          }
        })
        .catch(() => {
          setShowError(true);
          setIsLoginLoading(false);
        });
    } else {
      setShowError(true);
      setIsLoginLoading(false);
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={`${styles.loginPageSection} ${styles.loginSection}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.loginSectionHeader}>Login</h2>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div>
              <label className={styles.loginFormLabel} htmlFor="username">
                Username or Email Address
              </label>
              <input
                required
                className={styles.loginFormInput}
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setShowError(false);
                }}
              />
            </div>
            <div>
              <label className={styles.loginFormLabel} htmlFor="password">
                Password
              </label>
              <input
                required
                className={styles.loginFormInput}
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setShowError(false);
                }}
              />
            </div>
            {showError && (
              <div className={styles.loginError}>
                Sorry, we are having trouble logging you in. Please check that Username and Password
                are correct.
              </div>
            )}
            <input
              className={`${styles.loginFormSubmit} ${isLoginLoading && styles.loading}`}
              type="submit"
              value="Log in"
            />
            <a
              className={`${styles.loginFormLink} ${styles.forgotPassword}`}
              href="https://ccidc.org/wp-login.php?action=lostpassword"
              target="_blank"
              rel="noreferrer"
            >
              Forgot your password?
            </a>
            <a
              className={styles.loginFormLink}
              href="https://ccidc.org/ccidc-privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              CCIDC Privacy Policy
            </a>
          </form>
        </div>
      </div>
      <div className={`${styles.loginPageSection} ${styles.signUpSection}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.signUpSectionHeader}>Don&apos;t have an account yet?</h2>
          <a
            className={styles.signUpButton}
            href="https://ccidc.org/register/"
            target="_blank"
            rel="noreferrer"
          >
            Sign Up Here
          </a>
        </div>
      </div>
    </div>
  );
}
