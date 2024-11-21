import { useContext } from "react";

import {
  timelinePointCompleted,
  timelinePointInProgress,
  timelinePointUncompleted,
} from "../assets/index.ts";
import { FormContext } from "../contexts/FormContext.tsx";

import styles from "./PathwayTimeline.module.css";

type TimelinePointProps = {
  completed: boolean;
  inProgress: boolean;
  children: React.ReactNode;
};
function TimelinePoint(props: TimelinePointProps) {
  const { completed, inProgress, children } = props;

  const uncompleted = !completed && !inProgress;
  const iconSrc = completed
    ? timelinePointCompleted
    : inProgress
      ? timelinePointInProgress
      : timelinePointUncompleted;

  return (
    <div className={styles.timelinePoint}>
      <div className={styles.timelinePointIcon}>
        <img
          className={uncompleted ? styles.uncompleted : ""}
          src={iconSrc}
          alt="timeline point"
        ></img>
      </div>
      <div
        className={styles.timelinePointDescription + " " + (uncompleted ? styles.uncompleted : "")}
      >
        {children}
      </div>
    </div>
  );
}

type PathwayProps = { progress: 0 | 1 | 2 | 3 | 4 };
export function PathwayTimeline(props: PathwayProps) {
  const { progress } = props;
  const { formData } = useContext(FormContext);

  return (
    <div className={styles.pathwayContainer}>
      <h2 className={styles.timelineHeader}>Path {formData.applicantPath} Application</h2>
      <p className={styles.timelineDescription}>
        You must complete all 4 steps in order for your application to be reviewed and to qualify
        for examination.
      </p>

      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          <TimelinePoint completed={progress > 0} inProgress={progress === 0}>
            Personal Information
          </TimelinePoint>
          <TimelinePoint completed={progress > 1} inProgress={progress === 1}>
            Education & Examination History
          </TimelinePoint>
          <TimelinePoint completed={progress > 2} inProgress={progress === 2}>
            Work Experience
          </TimelinePoint>
          <TimelinePoint completed={progress > 3} inProgress={progress === 3}>
            Additional Information
          </TimelinePoint>
          <hr className={styles.timelineLine} />
        </div>
      </div>
    </div>
  );
}
