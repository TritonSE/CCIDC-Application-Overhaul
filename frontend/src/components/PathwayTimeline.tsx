import {
  timelinePointCompleted,
  timelinePointInProgress,
  timelinePointUncompleted,
} from "../assets/index.ts";

import styles from "./PathwayTimeline.module.css";

type TimelinePointProps = {
  completed: boolean;
  inProgress: boolean;
  children: string;
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

type PathwayProps = { path: 1 | 2 | 3 | 4; progress: 0 | 1 | 2 | 3 | 4 | 5 };
export function PathwayTimeline(props: PathwayProps) {
  const { path, progress } = props;

  return (
    <div className={styles.pathwayContainer}>
      <h2 className={styles.timelineHeader}>Path {path} Application</h2>
      <p className={styles.timelineDescription}>
        You must complete all 5 steps in order for your application to be reviewed and to qualify
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
          <TimelinePoint completed={progress > 4} inProgress={progress === 4}>
            Payment Information
          </TimelinePoint>
          <hr className={styles.timelineLine} />
        </div>
      </div>
    </div>
  );
}
