import styles from "./ThankyouForApplying.module.css";

import { Page } from "../components/index.ts";

export function ThankyouForApplying() {
  return (
    <Page>
      <h1 className={styles.title}>Thank you for Applying!</h1>

      <p className={styles.message}>
        Your application seems to be missing a necessary component. Please review the requirements
        for each pathway{" "}
        <a
          href="https://ccidc.org/becoming-a-certified-interior-designer/"
          className={styles.lightBlue}
        >
          here
        </a>{" "}
        and reapply when you have met the requirements for at least path one.{" "}
      </p>

      <div className={styles.centeredContainer}>
        <button className={styles.button}>Return to Main Page</button>
      </div>
    </Page>
  );
}
