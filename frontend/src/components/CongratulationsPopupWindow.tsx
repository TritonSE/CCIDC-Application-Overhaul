import React, { useRef, useState } from "react";
import styles from "./CongratulationsPopupWindow.module.css";
import closeIcon from "../assets/closeIcon.svg";
import checkMark from "../assets/checkMarkIcon.svg";
import { Button } from "./Button.tsx";

interface CongratulationsPopupWindowProps {
  buttonText: string; // Define prop for button text
}
const CongratulationsPopupWindow: React.FC<CongratulationsPopupWindowProps> = ({ buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLImageElement>(null);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // close if clicking outside of popup or on close button
    if (e.target !== e.currentTarget && e.target !== closeButtonRef.current) return;
    window.location.href = "https://ccidc.org/";
    setIsOpen(false);
  };

  const closePopupAndReturn = () => {
    setIsOpen(false);
    window.location.href = "https://ccidc.org/";
  };

  return (
    <div>
      <Button onClick={openPopup}>{buttonText}</Button>
      {isOpen && (
        <div className={styles.popupCanvas} onClick={closePopup}>
          <div className={styles.popupWindow}>
            <div className={styles.closeButtonContainer}>
              <img
                className={styles.closeButton}
                onClick={closePopup}
                ref={closeButtonRef}
                src={closeIcon}
              />
            </div>
            <div className={styles.checkMark}>
              <img src={checkMark} />
            </div>
            <div className={styles.spacer} style={{ height: "2px" }}></div> {/* Added spacer */}
            <div className={styles.mainText}> Congratulations! </div>
            <div className={styles.spacer} style={{ height: "2px" }}></div> {/* Added spacer */}
            <div className={`${styles.subText} ${styles.centeredText}`}>
              Your application has been completed as is now under review with CCIDC.
            </div>
            <div className={styles.spacer} style={{ height: "2px" }}></div> {/* Added spacer */}
            <div className={styles.closeButton}>
              <Button onClick={closePopupAndReturn} children="Click here to return to Main Page" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CongratulationsPopupWindow;
