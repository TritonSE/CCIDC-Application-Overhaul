// import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

import styles from "./PathwayApplication.module.css";
import { Button, InfoForm, PageNavigator, PathwayTimeline } from "./index.ts";
// import { PageNavigator } from "./PageNavigator.tsx";

export type PathApplicationProps = {
  pathName: string;
  children: React.ReactNode;
};

export const PathwayApplication: React.FC<PathApplicationProps> = ({
  pathName,
  children,
}: PathApplicationProps) => {
  const navigate = useNavigate();

  const goToScreening = () => {
    navigate("/prescreening");
  };

  return (
    <div className={styles.pathwayApplicationBase}>
      <div className={styles.applicationContainer}>
        <h1 className={styles.title}>{pathName}</h1>

        <div className={styles.pathContent}>{children}</div>
        <div className={styles.centeredContainer}>
          <Button onClick={goToScreening}>Retake Prescreening Questions</Button>
        </div>

        <div className={styles.note}>
          <p className={styles.red}>
            {" "}
            If you would like to be sorted into a different pathway, please click above to retake
            the
            <br></br>
            sorting questionnaire. For further inquiries, please reach out to ccidc@ccidc.org
          </p>
        </div>
      </div>
      <div className={styles.formSections}>
        <PathwayTimeline path={1} progress={0} />
        <InfoForm />
      </div>
      <PageNavigator></PageNavigator>
    </div>
  );
};
