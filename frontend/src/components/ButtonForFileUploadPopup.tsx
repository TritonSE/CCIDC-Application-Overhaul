import React, { useState } from "react";
import Modal from "react-modal";
import FileUploadPopup from "./FileUploadPopup";
import "./modalStyles.css";

const ButtonForFileUploadPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Upload Popup</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Upload File Modal"
        className="modal-content"
      >
        <button onClick={closeModal}>Close Modal</button>
        <FileUploadPopup />
      </Modal>
    </div>
  );
};

export default ButtonForFileUploadPopup;
