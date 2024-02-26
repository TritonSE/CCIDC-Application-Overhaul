import React, { useRef, useState } from "react";
import "./FileUploadPopupWindow.css"; // Import the CSS file

const PopupWindow: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Add visual indication (e.g., change background color) when a file is dragged over the area
    e.currentTarget.classList.add("drag-over");
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Remove the visual indication when a file leaves the area
    e.currentTarget.classList.remove("drag-over");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Remove the visual indication when a file is dropped
    e.currentTarget.classList.remove("drag-over");
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
      <button onClick={togglePopup}>Open Popup</button>
      {isOpen && (
        <div className="popup-window">
          <button className="close-button" onClick={togglePopup}>
            Close
          </button>
          <div className="title"> Upload Files </div>
          <div className="subtext"> Add your relevant files here. </div>
          <div
            className="drag-and-drop-area"
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <p> Drag and drop your files here</p>

            <p> or </p>

            <p onClick={handleUploadClick} className="upload-text-button">
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
      )}
    </div>
  );
};
export default PopupWindow;
