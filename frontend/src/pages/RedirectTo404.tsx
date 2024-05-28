import styles from "../stylesheets/RedirectTo404.module.css";
import { Page } from "../components";

export function RedirectTo404() {
  return (
    <Page>
      <div className={styles.errorMessageContainer}>
        <h1 className={styles.errorType}>404</h1>
        <h2 className={styles.errorReason}>Page Not Found</h2>
        <p className={styles.errorMessage}>
          Sorry, we couldn't find the page you're looking for, click{" "}
          <span className={styles.lightBlue}>
            <a href="">here.</a>
          </span>{" "}
          <br />
          Please ensure that the URL is correct and try again.
        </p>
      </div>

      <div className={styles.topLeftRec}></div>
      <div className={styles.bottomLeftRec}></div>
      <div className={styles.topRightRec}></div>
      <div className={styles.bottomRightRec}></div>
    </Page>
  );
}
