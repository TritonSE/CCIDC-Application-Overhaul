import React from "react";

import { cartWhite } from "../assets";
import checkMarkIcon from "../assets/checkMarkIcon.svg";

import { Button } from "./Button";
import styles from "./CongratulationsPage.module.css";

export const CongratulationsPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <img width={133} height={133} src={checkMarkIcon} alt="checkmark" />
      <h1 style={{ marginTop: 0 }}>Congratulations</h1>
      <p>Your application has been received and is now under review with CCIDC.</p>
      <a href="https://ccidc.org/product-category/idex/" className={styles.link}>
        <Button onClick={() => {}}>
          <div className={styles.buttonContents}>
            <img
              className={styles.cartImage}
              width={24}
              height={24}
              src={cartWhite}
              alt="shopping cart"
            />
            Proceed to Payment Page
          </div>
        </Button>
      </a>
    </div>
  );
};
