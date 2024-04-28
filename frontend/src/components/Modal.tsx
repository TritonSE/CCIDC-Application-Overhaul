import React, { useRef, useEffect } from "react";

import checkMark from "../assets/checkMarkIcon.svg";
import closeIcon from "../assets/closeIcon.svg";
import { Button } from "./Button.tsx";

import styles from "./Modal.module.css";

type ModalProps = { isOpen: boolean; onClose: () => void; children?: React.ReactNode };

export function Modal(props: ModalProps) {
  const { isOpen, onClose, children } = props;

  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLImageElement>(null);
  const modalWindowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  function handleMouseClick(e: React.MouseEvent<HTMLElement>) {
    if (e.target == canvasRef.current || e.target == closeButtonRef.current) {
      onClose();
    }
  }

  useEffect(() => {
    // Focus the container div automatically to listen for "Escape" key press
    if (drawerRef && isOpen) {
      if (drawerRef && drawerRef.current) drawerRef.current.focus();
    }
  }, [drawerRef, isOpen]);

  function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    // Close modal when user clicks "Escape" key
    if (event.key === "Escape") {
      onClose();
    }
  }

  return (
    <div className={styles.modalDrawer} ref={drawerRef} onKeyDown={handleKeyPress} tabIndex={-1}>
      {isOpen && (
        <div className={styles.popupCanvas} ref={canvasRef} onClick={handleMouseClick}>
          <div className={styles.popupWindow} ref={modalWindowRef}>
            <button
              className={styles.closeButtonContainer}
              aria-label="Close Popup"
              tabIndex={0}
              type="button"
            >
              <img src={closeIcon} alt="Close Popup" ref={closeButtonRef} />
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export function CongratulationsModal(props: ModalProps) {
  function returnToMainPage() {
    window.location.href = "https://ccidc.org/";
  }
  return (
    <Modal {...props}>
      <div className={styles.modalChildren}>
        <img className={styles.modalImage} src={checkMark} alt="Green Checkmark" />
        <p className={styles.mainText}> Congratulations! </p>
        <p className={styles.reviewText}>
          Your application has been completed as is now under review with CCIDC.
        </p>
        <div>
          <Button onClick={returnToMainPage}>Click here to return to Main Page</Button>
        </div>
      </div>
    </Modal>
  );
}
