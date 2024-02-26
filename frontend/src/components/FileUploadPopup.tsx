import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const FileUploadPopup = () => {
  const [files, setFiles] = useState<File[]>([]);
  // Track upload status and error messages
  const [status, setStatus] = useState<"initial" | "uploading" | "success" | "fail">("initial");
  const [error, setError] = useState<string | null>(null);

  // Use react-dropzone for drag-and-drop functionality
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  const handleUpload = async () => {
    // Check if files are selected
    if (files.length === 0) {
      setError("Please select files to upload.");
      return;
    }

    setStatus("uploading");

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const result = await axios.post("YOUR_API_ENDPOINT", formData, {
        onUploadProgress: (progressEvent) => {
          // Update progress bar here
        },
      });

      console.log(result.data);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setError("Upload failed. Please try again.");
      setStatus("fail");
    } finally {
      setFiles([]);
      setError(null);
    }
  };

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to browse.</p>
      </div>

      {files.length > 0 && (
        <>
          <h3>Selected files:</h3>
          <ul>
            {files.map((file, index) => (
              <li key={file.name}>
                {file.name} ({file.size} bytes)
              </li>
            ))}
          </ul>
          <button onClick={handleUpload} className="submit">
            Upload files
          </button>
        </>
      )}

      {status === "uploading" && <p>Uploading files...</p>}
      {status === "success" && <p>✅ Uploaded successfully!</p>}
      {status === "fail" && <p>❌ {error || "Upload failed. Please try again."}</p>}
    </div>
  );
};

export default FileUploadPopup;
