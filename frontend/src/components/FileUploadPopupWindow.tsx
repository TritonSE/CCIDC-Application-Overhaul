import React, { useContext, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import closeIcon from "../assets/closeIcon.svg";
import fileIcon from "../assets/fileIcon.svg";
import fileUploadIcon from "../assets/fileUploadIcon.svg";
import upload from "../assets/uploadIcon.svg";
import { FormContext } from "../contexts/FormContext";

import styles from "./FileUploadPopupWindow.module.css";

interface FileUploadPopupWindowProps {
  buttonTitle: string;
}
const FileUploadPopupWindow: React.FC<FileUploadPopupWindowProps> = ({ buttonTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLImageElement>(null);
  const { formFiles, setFormFiles } = useContext(FormContext);

  const fileUuid = useMemo(() => uuidv4(), []);
  const file = useMemo(() => formFiles[fileUuid] ?? null, [formFiles, fileUuid]);

  const deleteFile = () => {
    if (file !== null) {
      setFormFiles((prevFormFiles) => ({
        ...prevFormFiles,
        [fileUuid]: null,
      }));
    }
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = (e: React.MouseEvent<HTMLElement>) => {
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
    e.currentTarget.classList.remove(styles.dragOver);
    const files = e.dataTransfer.files;

    if (files.length > 0) {
      setFormFiles((prevFormFiles) => ({
        ...prevFormFiles,
        [fileUuid]: files[0],
      }));
    }

    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesToUpload = Array.from(files).slice(0, 1);

      if (filesToUpload.length > 0) {
        setFormFiles((prevFormFiles) => ({
          ...prevFormFiles,
          [fileUuid]: filesToUpload[0],
        }));
      }

      setIsOpen(false);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      {file === null ? (
        <button type="button" className={styles.uploadButton} onClick={openPopup}>
          {buttonTitle}
          <img src={upload} className={styles.uploadButtonImg} alt="buttonpng" />
        </button>
      ) : null}
      {isOpen && (
        <div className={styles.popupCanvas}>
          <div className={styles.popupWindow}>
            <div className={styles.closeButtonContainer}>
              <img
                className={styles.closeButton}
                onClick={closePopup}
                ref={closeButtonRef}
                src={closeIcon}
                alt="Close"
              />
            </div>

            <div className={styles.title}> Upload Files </div>
            <div className={styles.subtext}> Add your relevant files here. </div>
            {file ? null : (
              <div
                className={styles.dragAndDropArea}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className={styles.dragAndDropInstructions}>
                  <img src={fileUploadIcon} alt="File Upload" />
                  <p className={styles.subtext}> Drag and drop your files here</p>
                  <p className={styles.subtext}> or </p>
                  <p className={styles.browseFiles} onClick={handleUploadClick}>
                    browse files
                  </p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    multiple
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {file !== null && (
        <div className={styles.uploadedFilesWrapper}>
          <div className={styles.fileBox}>
            <div className={styles.fileName}>
              <img className={styles.fileIconDisplay} src={fileIcon} alt="File icon" />
              {file.name} has been successfully uploaded
            </div>
            <button className={styles.removeButton} onClick={deleteFile}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FileUploadPopupWindow;
