import React, { useRef, useState } from "react";
import styles from "./FileUploadPopupWindow.module.css";
import closeIcon from "../assets/closeIcon.svg";
import fileUploadIcon from "../assets/fileUploadIcon.svg";
import { Button } from "./Button.tsx";
import { google } from "googleapis";
import * as fs from "fs";
import * as path from "path";

interface FileUploadPopupWindowProps {
  buttonText: string; // Define prop for button text
}

const FileUploadPopupWindow: React.FC<FileUploadPopupWindowProps> = ({ buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLImageElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileIds, setFileIds] = useState<string[]>([]);

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

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Remove the visual indication when a file is dropped
    e.currentTarget.classList.remove(styles.dragOver);
    // Access the dropped files
    const files = e.dataTransfer.files;

    // Limit the number of selected files to 10
    const filesToUpload = [...selectedFiles].slice(0, 10);
    filesToUpload.push(...files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...filesToUpload.slice(0, 10)]);

    console.log(filesToUpload);

    for (const file of filesToUpload) {
      const formData = new FormData();
      formData.append("files", file);

      try {
        const response = await fetch("http://localhost:3001/file/upload", {
          method: "POST",
          body: formData, // FormData object will be used here directly
        });

        if (!response.ok) {
          throw new Error("Server responded with a non-200 status code");
        }

        const data = await response.json();
        console.log("File uploaded successfully:", data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
    closePopup;
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesToUpload = Array.from(files).slice(0, 10);

      setSelectedFiles((prevFiles) => [...prevFiles, ...filesToUpload]);

      for (const file of filesToUpload) {
        const formData = new FormData();
        formData.append("files", file);

        try {
          const response = await fetch("http://localhost:3001/file/upload", {
            method: "POST",
            body: formData, // FormData object will be used here directly
          });

          if (!response.ok) {
            throw new Error("Server responded with a non-200 status code");
          }

          const data = await response.json();
          //console.log("File uploaded successfully:", data);
          console.log(data);
          setFileIds((prevIds) => [...prevIds, data[0].fileId]);
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
      closePopup;
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  function handleDeleteFile(index: number): void {
    console.log(fileIds[index]);
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  }

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
                  multiple
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.uploadedFilesWrapper}>
        {selectedFiles.length > 0 &&
          selectedFiles.map((file, index) => (
            <div key={file.name} className={styles.fileBox}>
              <div className={styles.fileName}>{file.name} has been successfully uploaded</div>
              <div className={styles.removeButton} onClick={() => handleDeleteFile(index)}>
                x
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default FileUploadPopupWindow;
