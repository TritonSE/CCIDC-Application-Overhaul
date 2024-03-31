import { useState } from "react";

import CongratulationsPopupWindow from "../components/CongratulationsPopupWindow";

function TestCongratulations() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    console.log("here");
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <CongratulationsPopupWindow
        buttonText="Open Popup"
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
      <img
        src="https://www.iconpacks.net/icons/3/free-red-arrow-right-icon-11366-thumb.png"
        alt="Click Me"
        style={{ cursor: "pointer", width: "100px", height: "auto" }}
        onClick={openPopup}
      />
    </div>
  );
}

export default TestCongratulations;
