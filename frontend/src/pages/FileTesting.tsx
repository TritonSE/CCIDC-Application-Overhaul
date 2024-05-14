import React, { useState, useEffect } from "react";
import FileUploadPopupWindow from "../components/FileUploadPopupWindow.tsx";

export function FileTesting() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [areFilesUploaded, setAreFilesUploaded] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  useEffect(() => {
    console.log("Files uploaded:", areFilesUploaded);
  }, [areFilesUploaded]);

  const handleUploadedFiles = (areFilesUploaded: boolean) => {
    setAreFilesUploaded(areFilesUploaded);
  };

  return (
    <>
      <h2>File Testing</h2>
      <button onClick={openPopup} style={{ display: isPopupOpen ? "none" : "block" }}>
        File Upload
      </button>
      {isPopupOpen && <FileUploadPopupWindow areFilesUploaded={handleUploadedFiles} />}
      <p>Files uploaded: {areFilesUploaded.toString()}</p>
    </>
  );
}
