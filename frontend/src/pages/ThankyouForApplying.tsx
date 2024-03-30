import styles from "../stylesheets/ThankyouForApplying.module.css";
import { Button, Page } from "../components/index.ts";

export function ThankyouForApplying() {
  return (
    <Page>
      <div className={styles.thankYouContainer}>
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
          and reapply when you have met the <br></br>requirements for at least path one.{" "}
        </p>
        <div className={styles.centeredContainer}>
          <Button onClick={null}>Return to Main Page</Button>
        </div>
      </div>
    </Page>
  );
}
