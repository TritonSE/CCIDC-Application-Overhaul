import { useState } from "react";
import { CongratulationsModal } from "../components/index";

export function TestComponents() {
  const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] = useState(false);
  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => setIsCongratulationsModalOpen(true)}>
        Open Congratulations Modal
      </button>
      <CongratulationsModal
        isOpen={isCongratulationsModalOpen}
        onClose={() => setIsCongratulationsModalOpen(false)}
      ></CongratulationsModal>
    </div>
  );
}
