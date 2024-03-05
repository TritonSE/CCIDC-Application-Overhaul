import React, { ReactNode } from "react";

import styles from "./FormSection.module.css"; // Import CSS styles for Pathway component

export type FormSectionProps = {
  sectionName: string;
  formTitles: string[];
  children?: ReactNode;
};

export const FormSection: React.FC<FormSectionProps> = ({ sectionName, formTitles }) => {
  return (
    <div>
      <h3 className={styles.sectionName}>{sectionName}</h3>
      <div className={styles.formSectionContainer}>
        <div>
          {formTitles.map((inputTitle, index) => (
            <React.Fragment key={index}>
              <div className={styles.inputTitle}>{inputTitle}</div>
              <input type="text" defaultValue={} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
