import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import checkMark from "../assets/checkMarkIcon.svg";
import closeIcon from "../assets/closeIcon.svg";
import errorAlert from "../assets/errorAlert.svg";
import questionMark from "../assets/questionMark.svg";
import warningHand from "../assets/warningHand.svg";

import { Button } from "./Button.tsx";
import styles from "./Modal.module.css";

type ModalProps = { isOpen: boolean; onClose: () => void; children?: React.ReactNode };

export function Modal(props: ModalProps) {
  const { isOpen, onClose, children } = props;

  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonImageRef = useRef<HTMLImageElement>(null);
  const modalWindowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  function handleMouseClick(e: React.MouseEvent<HTMLElement>) {
    if (e.target === canvasRef.current || e.target === closeButtonImageRef.current) {
      onClose();
    }
  }

  useEffect(() => {
    // focus the container div automatically to listen for "Escape" key press
    if (drawerRef && isOpen) {
      if (drawerRef?.current) drawerRef.current.focus();
    }
  }, [drawerRef, isOpen]);

  function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    // close modal when user clicks "Escape" key
    if (event.key === "Escape") {
      onClose();
    }
    // close modal on when user clicks "Enter" with close button selected
    if (event.key === "Enter" && event.target === closeButtonRef.current) {
      onClose();
    }
  }

  return (
    <div
      className={styles.modalDrawer}
      ref={drawerRef}
      onKeyDown={handleKeyPress}
      onClick={handleMouseClick}
      tabIndex={-1}
      role="presentation"
    >
      {isOpen && (
        <div className={styles.popupCanvas} ref={canvasRef}>
          <div className={styles.popupWindow} ref={modalWindowRef}>
            <button
              className={styles.closeButtonContainer}
              ref={closeButtonRef}
              aria-label="Close Popup"
              tabIndex={0}
              type="button"
            >
              <img src={closeIcon} alt="Close Popup" ref={closeButtonImageRef} />
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
        <Button onClick={returnToMainPage}>Click here to return to Main Page</Button>
      </div>
    </Modal>
  );
}

type RequirementsNotMetModalProps = {
  clearForm: () => void;
} & ModalProps;

export function RequirementsNotMetModal(props: RequirementsNotMetModalProps) {
  const { clearForm, ...modalProps } = props;
  const navigate = useNavigate();
  function onRetake() {
    clearForm();
    modalProps.onClose();
  }
  return (
    <Modal {...modalProps}>
      <div className={styles.modalChildren}>
        <img className={styles.modalImage} src={errorAlert} alt="Error Alert" />
        <p className={styles.mainText}> Requirements Not Met </p>
        <p className={styles.reviewText}>
          Your application seems to be missing a necessary component. Please review the requirements
          for each pathway{" "}
          <button
            onClick={() => {
              navigate("/candidates");
            }}
            className={styles.modalLink + " " + styles.linkBlue}
          >
            here
          </button>{" "}
          and reapply when you have met the requirements for at least path one.
        </p>
        {/* TODO: route to correct page */}
        <Button onClick={onRetake}>Retake Prescreening Questions</Button>
      </div>
    </Modal>
  );
}

type CompleteInOneSittingModalProps = {
  path: 1 | 2 | 3 | 4;
} & ModalProps;

export function CompleteInOneSittingModal(props: CompleteInOneSittingModalProps) {
  const { path, ...modalProps } = props;
  return (
    <Modal {...modalProps}>
      <div className={styles.modalChildren}>
        <img className={styles.modalImage} src={warningHand} alt="Warning Hand" />
        <p className={styles.mainText}>Hi, Path {path} Application</p>
        <p className={styles.reviewText}>
          Before you start, please note that this application form must be completed in one sitting.
          Your details will <b>NOT</b> be saved as you go on.
        </p>
        <Button onClick={modalProps.onClose}>Continue to Application</Button>
        {/* TODO: route to correct page */}
        <a href={"https://ccidc.org/"} className={styles.modalLink}>
          Go back to Applicant Status Page
        </a>
      </div>
    </Modal>
  );
}

type ConfirmSubmissionModal = {
  onSubmit: () => void;
} & ModalProps;
export function ConfirmSubmissionModal(props: ConfirmSubmissionModal) {
  const { onClose, onSubmit } = props;

  return (
    <Modal {...props}>
      <div className={styles.modalChildren}>
        <img className={styles.modalImage} src={questionMark} alt="Question Mark" />
        <p className={styles.mainText}>Ready to submit?</p>
        <Button onClick={onSubmit}>Submit Application Now</Button>
        <button onClick={onClose} className={styles.modalLink}>
          Keep Reviewing Your Application
        </button>
      </div>
    </Modal>
  );
}
