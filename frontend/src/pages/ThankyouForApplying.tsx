import { Button, Page } from "../components/index.ts";
import styles from "../stylesheets/ThankyouForApplying.module.css";

export function ThankyouForApplying() {
  return (
    <Page>
      <h1 className={styles.title}>Thank you for Applying!</h1>

      <p className={styles.message}>
        Your application seems to be missing a necessary component. Please review the requirements
        for each pathway{" "}
        <a href="/" className={styles.lightBlue}>
          here
        </a>{" "}
        and reapply when you have met the requirements for at least path one.{" "}
      </p>

      <div className={styles.centeredContainer}>
        <Button
          onClick={() => {
            window.location.href = "https://ccidc.org/";
          }}
          additionalStyle={styles.button2}
        >
          Return to Main Page
        </Button>
      </div>
    </Page>
  );
}
