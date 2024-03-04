import styles from "../stylesheets/thanksforapplying.module.css";
import { Button } from "../components/Button";

export function ThankyouForApplying() {
  return (
    <div className={styles.thankYouContainer}>
      <h1 className={styles.title}>Thank you for Applying!</h1>

      <div className={styles.message}>
        Your application seems to be missing a necessary component. Please review the requirements
        for each pathway{" "}
        <a href="" className={styles.lightBlue}>
          here
        </a>{" "}
        and reapply when you have met the requirements for at least path one.{" "}
      </div>
      <div className={styles.centeredContainer}>
        <Button onClick={null}>Return to Main Page</Button>
      </div>
    </div>
  );
}
