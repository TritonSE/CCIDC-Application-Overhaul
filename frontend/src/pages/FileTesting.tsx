import { useState } from "react";

import FileUploadPopupWindow from "../components/FileUploadPopupWindow.tsx";

export function FileTesting() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <h2>File Testing</h2>

      <button onClick={openPopup} style={{ display: isPopupOpen ? "none" : "block" }}>
        File Upload
      </button>

      {isPopupOpen && <FileUploadPopupWindow />}
    </>
  );
}
