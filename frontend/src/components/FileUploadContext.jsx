import React, { createContext, useState } from "react";

const FileUploadContext = createContext({
  isOpen: false,
  openPopup: () => {},
  closePopup: () => {},
});

const FileUploadProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const value = { isOpen, openPopup, closePopup };

  return <FileUploadContext.Provider value={value}>{children}</FileUploadContext.Provider>;
};

export { FileUploadContext, FileUploadProvider };
