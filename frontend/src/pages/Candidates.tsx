import { useState } from "react";

import CongratulationsPopupWindow from "../components/CongratulationsPopupWindow";

function Candidates() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      openPopup();
    }
  };

  return (
    <div>
      <input type="text" placeholder="Press Enter to Open Popup" onKeyPress={handleKeyPress} />
      <CongratulationsPopupWindow
        buttonText="Open Popup"
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </div>
  );
}

export default Candidates;
