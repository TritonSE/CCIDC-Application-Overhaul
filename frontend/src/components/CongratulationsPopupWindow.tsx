import React, { useRef } from "react";

import checkMark from "../assets/checkMarkIcon.svg";
import closeIcon from "../assets/closeIcon.svg";

import { Button } from "./Button.tsx";
import styles from "./CongratulationsPopupWindow.module.css";

type CongratulationsPopupWindowProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CongratulationsPopupWindow: React.FC<CongratulationsPopupWindowProps> = ({
  isOpen,
  onClose,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closePopupAndReturn = () => {
    onClose();
    window.location.href = "https://ccidc.org/";
  };

  const closePopup = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget && e.target !== closeButtonRef.current) return;
    closePopupAndReturn();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      onClose();
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          className={styles.popupCanvas}
          onClick={closePopup}
          onKeyDown={handleKeyPress}
          role="button"
          tabIndex={0}
        >
          <div className={styles.popupWindow}>
            <button
              className={styles.closeButtonContainer}
              ref={closeButtonRef}
              onClick={closePopupAndReturn}
              aria-label="Close Popup"
              tabIndex={0}
              type="button"
            >
              <img src={closeIcon} alt="Close Popup" />
            </button>
            <img className={styles.checkMark} src={checkMark} alt="Green Checkmark" />
            <p className={styles.mainText}> Congratulations! </p>
            <p className={styles.reviewText}>
              Your application has been completed as is now under review with CCIDC.
            </p>
            <div>
              <Button onClick={closePopupAndReturn}> Click here to return to Main Page</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CongratulationsPopupWindow;
