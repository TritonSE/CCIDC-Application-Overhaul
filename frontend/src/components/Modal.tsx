import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import checkMark from "../assets/checkMarkIcon.svg";
import closeIcon from "../assets/closeIcon.svg";
import errorAlert from "../assets/errorAlert.svg";
import warningHand from "../assets/warningHand.svg";
import questionMark from "../assets/questionMark.svg";
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
        <Button onClick={returnToMainPage}>Click here to return to Main Page</Button>
      </div>
    </Modal>
  );
}

export function RequirementsNotMetModal(props: ModalProps) {
  const navigate = useNavigate();
  return (
    <Modal {...props}>
      <div className={styles.modalChildren}>
        <img className={styles.modalImage} src={errorAlert} alt="Error Alert" />
        <p className={styles.mainText}> Requirements Not Met </p>
        <p className={styles.reviewText}>
          Your application seems to be missing a necessary component. Please review the requirements
          for each pathway{" "}
          <a
            onClick={() => navigate("/candidates")}
            className={styles.modalLink + " " + styles.linkBlue}
          >
            here
          </a>{" "}
          and reapply when you have met the requirements for at least path one.
        </p>
        {/* TODO: route to correct page */}
        <Button onClick={undefined}>Retake Prescreening Questions</Button>
      </div>
    </Modal>
  );
}

interface CompleteInOneSittingModalProps extends ModalProps {
  path: 1 | 2 | 3 | 4;
}

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

interface ConfirmSubmissionModal extends ModalProps {
  onSubmit: () => void;
}
export function ConfirmSubmissionModal(props: ConfirmSubmissionModal) {
  const { onClose, onSubmit } = props;

  return (
    <Modal {...props}>
      <div className={styles.modalChildren}>
        <img className={styles.modalImage} src={questionMark} alt="Question Mark" />
        <p className={styles.mainText}>Ready to submit?</p>
        <Button onClick={onSubmit}>Submit Application Now</Button>
        <a onClick={onClose} className={styles.modalLink}>
          Keep Reviewing Your Application
        </a>
      </div>
    </Modal>
  );
}
