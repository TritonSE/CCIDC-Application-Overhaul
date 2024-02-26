import styles from "./PathwayApplication.module.css";
import { Button } from "./Button";

export type PathApplicationProps = {
  pathName: string;
  children: React.ReactNode;
};

export const PathwayApplication: React.FC<PathApplicationProps> = ({ pathName, children }) => {
  return (
    <div className={styles.applicationContainer}>
      <h2 className={styles.title}>{pathName}</h2>

      <div className={styles.pathContent}>{children}</div>
      <div className={styles.centeredContainer}>
        <Button onClick={null}>Retake Prescreening Questions</Button>
      </div>

      <div className={styles.note}>
        <p className={styles.red}>
          {" "}
          If you would like to be sorted into a different pathway, please click above to retake the
          <br></br>
          sorting questionnaire. For further inquiries, please reach out to ccidc@ccidc.org
        </p>
      </div>
    </div>
  );
};
