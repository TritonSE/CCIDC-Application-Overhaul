import React, { useEffect, useRef, useState } from "react";
import closeIcon from "../assets/closeIcon.svg";
import fileUploadIcon from "../assets/fileUploadIcon.svg";
import styles from "./FileUploadPopupWindow.module.css";
import spinnerImage from "../assets/spinner.png";
import checkMark from "../assets/fileUploadCheckmark.svg";

interface FileUploadPopupWindowProps {
  areFilesUploaded: (value: boolean) => void; // Indicates whether files are uploaded
}
const FileUploadPopupWindow: React.FC<FileUploadPopupWindowProps> = ({
  areFilesUploaded: areFilesUploadedProp,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLImageElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileIds, setFileIds] = useState<string[]>([]);
  const [uploadedCount, setUploadedCount] = useState(0);
  const [totalFilesCount, setTotalFilesCount] = useState(0);
  const [uploadingFile, setUploadingFile] = useState(false);

  useEffect(() => {
    if (fileIds.length > 0) {
      areFilesUploadedProp(true);
    } else {
      areFilesUploadedProp(false);
    }
  }, [fileIds, areFilesUploadedProp]);

  const openPopup = () => {
    setIsOpen(true);
    setTotalFilesCount(0);
    setUploadedCount(0);
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

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove(styles.dragOver);
    const files = e.dataTransfer.files;

    const filesToUpload = [...selectedFiles].slice(0, 1);
    filesToUpload.push(...files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...filesToUpload.slice(0, 1)]);

    setTotalFilesCount(filesToUpload.length);
    for (const file of filesToUpload) {
      const formData = new FormData();
      formData.append("files", file);
      formData.append("folderName", "testing");
      try {
        setUploadingFile(true); // Set uploadingFile to true to display "Uploading file" text and spinner
        const response = await fetch("http://localhost:3001/file/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Server responded with a non-200 status code");
        }

        const data = await response.json();
        console.log("File uploaded successfully:", data);
        setFileIds((fileIds) => [...fileIds, data[0].fileId]);
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setUploadingFile(false); // Set uploadingFile back to false after uploading is complete
      }
    }
    if (uploadedCount === totalFilesCount) {
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filesToUpload = Array.from(files).slice(0, 1);

      setSelectedFiles((prevFiles) => [...prevFiles, ...filesToUpload]);

      setTotalFilesCount(filesToUpload.length);
      for (const file of filesToUpload) {
        const formData = new FormData();
        formData.append("files", file);
        formData.append("folderName", "testing");

        try {
          setUploadingFile(true); // Set uploadingFile to true to display "Uploading file" text and spinner
          const response = await fetch("http://localhost:3001/file/upload", {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Server responded with a non-200 status code");
          }

          const data = await response.json();
          console.log("File uploaded successfully:", data);

          setFileIds((fileIds) => [...fileIds, data[0].fileId]);
        } catch (error) {
          console.error("Error uploading file:", error);
        } finally {
          setUploadingFile(false);
        }
      }
    }
    if (uploadedCount === totalFilesCount) {
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  function handleDeleteFile(index: number): void {
    const fileId = fileIds[index];

    fetch(`http://localhost:3001/file/delete/file/${fileId}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          const updatedFileIds = fileIds.filter((id) => id !== fileId);
          setFileIds(updatedFileIds);
          console.log("File deleted successfully");
          const updatedFiles = [...selectedFiles];
          updatedFiles.splice(index, 1);
          setSelectedFiles(updatedFiles);
        } else {
          console.error("Failed to delete the file");
          response.text().then((text) => {
            console.error(text);
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting file:", error);
      });
  }

  const areFilesUploaded = Object.keys(fileIds).length > 0;

  return (
    <>
      <button onClick={openPopup}>File Upload</button>
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
            {uploadedCount === 0 && (
              <div
                className={styles.dragAndDropArea}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {uploadingFile ? (
                  <div className={styles.spinnerContainer}>
                    <img
                      className={`${styles.spinner} ${styles.spinning}`}
                      src={spinnerImage}
                      alt="Spinner"
                    />
                    <p>Uploading file...</p>
                  </div>
                ) : fileIds.length > 0 && totalFilesCount > 0 ? (
                  <div className={styles.uploadCompleteMessage}>
                    <img className={styles.checkMark} src={checkMark} alt="CheckMark" />
                    <p>Upload Successful!</p>
                  </div>
                ) : (
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
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {areFilesUploaded && (
        <div className={styles.uploadedFilesWrapper}>
          {fileIds.map((fileId, index) => (
            <div key={fileId} className={styles.fileBox}>
              <div className={styles.fileName}>
                {selectedFiles[index].name} has been successfully uploaded
              </div>
              <div
                className={styles.removeButton}
                onClick={() => {
                  handleDeleteFile(index);
                }}
              >
                x
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FileUploadPopupWindow;
