/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useState } from "react";

import { CongratulationsPopupWindow } from "../components";

export function TestCongratulations() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
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
    </div>
  );
}
