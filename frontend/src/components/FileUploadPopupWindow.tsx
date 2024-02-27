import React, { useRef, useState } from "react";
import styles from "./FileUploadPopupWindow.module.css";
import closeIcon from "../assets/closeIcon.svg";
import fileUploadIcon from "../assets/fileUploadIcon.svg";

interface FileUploadPopupWindowProps {
  buttonText: string; // Define prop for button text
}
const FileUploadPopupWindow: React.FC<FileUploadPopupWindowProps> = ({ buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLImageElement>(null);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // close if clicking outside of popup or on close button
    if (e.target !== e.currentTarget && e.target !== closeButtonRef.current) return;
    setIsOpen(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add(styles.dragOver);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove(styles.dragOver);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Remove the visual indication when a file is dropped
    e.currentTarget.classList.remove(styles.dragOver);
    // Access the dropped files
    const files = e.dataTransfer.files;
    console.log(files);
    // Handle the file reading logic here
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <button onClick={openPopup}>{buttonText}</button>
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

            <div className={styles.title}> Upload Files </div>
            <div className={styles.subtext}> Add your relevant files here. </div>
            <div
              className={styles.dragAndDropArea}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className={styles.dragAndDropInstructions}>
                <img src={fileUploadIcon} />
                <p className={styles.subtext}> Drag and drop your files here</p>
                <p className={styles.subtext}> or </p>
                <p className={styles.browseFiles} onClick={handleUploadClick}>
                  browse files
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const files = e.target.files;
                    console.log(files);
                    // Handle the file reading logic here
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FileUploadPopupWindow;
