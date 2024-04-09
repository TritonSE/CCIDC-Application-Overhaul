import React, { ReactNode } from "react";

import styles from "./FormSection.module.css"; // Import CSS styles for Pathway component

export type FormInput = {
  inputTitle: string;
  defaultMessage: string;
  inputType: "text" | "dropdown" | "checkbox"; // Add other input types as needed
  dropdownOptions?: string[];
  required?: boolean;
};

export type FormSectionProps = {
  sectionName: string;
  formInputs: FormInput[];
  children?: ReactNode;
};

export const FormSection: React.FC<FormSectionProps> = ({ sectionName, formInputs }) => {
  return (
    <div>
      <h3 className={styles.sectionName}>{sectionName}</h3>
      <div className={styles.formSectionContainer}>
        {formInputs.map((formInput, index) => (
          <div className={styles.inputBox} key={index}>
            <div className={styles.inputTitle}>{formInput.inputTitle}</div>
            {formInput.inputType === "text" &&
              (formInput.required ? (
                <input
                  required
                  type="text"
                  className={styles.inputText}
                  placeholder={formInput.defaultMessage}
                />
              ) : (
                <input
                  type="text"
                  className={styles.inputText}
                  placeholder={formInput.defaultMessage}
                />
              ))}
            {formInput.inputType === "dropdown" &&
              formInput.dropdownOptions &&
              (formInput.required ? (
                <select className={styles.inputText} id="drop">
                  <option value="" className={styles.optionDefault} selected disabled>
                    Select One
                  </option>
                  {formInput.dropdownOptions.map((dropOption, dropIndex) => (
                    <option
                      key={dropIndex}
                      value={dropOption}
                      className={dropOption ? styles.optionSelected : styles.optionDefault}
                    >
                      {dropOption}
                    </option>
                  ))}
                </select>
              ) : (
                <select required className={styles.inputText} id="drop">
                  <option value="" className={styles.optionDefault} selected disabled>
                    Select One
                  </option>
                  {formInput.dropdownOptions.map((dropOption, dropIndex) => (
                    <option
                      key={dropIndex}
                      value={dropOption}
                      className={dropOption ? styles.optionSelected : styles.optionDefault}
                    >
                      {dropOption}
                    </option>
                  ))}
                </select>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
