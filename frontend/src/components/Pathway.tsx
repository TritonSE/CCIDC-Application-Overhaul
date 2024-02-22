import React, { ReactNode } from "react";

import styles from "../stylesheets/Pathway.module.css"; // Import CSS styles for Pathway component

export type PathwayProps = {
  pathName: string;
  qualifications: string[];
  children?: ReactNode;
};

export const Pathway: React.FC<PathwayProps> = ({ pathName, qualifications, children }) => {
  return (
    <div className={styles.pathwayContainer}>
      <h3 className={styles.pathName}>{pathName}</h3>
      <div className={styles.pathwayText}>
        <span className={styles.red}>Qualifications:</span>
        <ol className={styles.olist}>
          {qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ol>
        {children}
      </div>
    </div>
  );
};
