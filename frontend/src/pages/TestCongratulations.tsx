/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState, useContext } from "react"; // Organized imports
import { FormContext } from "../contexts/FormContext";
import { CongratulationsPopupWindow } from "../components";

export function TestCongratulations() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const { submitForm } = useContext(FormContext);

  const handleSubmit = async () => {
    try {
      // Call the submitForm function to send form data to the backend
      await submitForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <CongratulationsPopupWindow isOpen={isPopupOpen} onClose={closePopup} />
      <img
        src="https://www.iconpacks.net/icons/3/free-red-arrow-right-icon-11366-thumb.png"
        alt="Click Me"
        style={{ cursor: "pointer", width: "100px", height: "auto" }}
        onClick={openPopup}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
