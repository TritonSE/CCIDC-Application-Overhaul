import { useState } from "react";
import {
  CongratulationsModal,
  RequirementsNotMetModal,
  CompleteInOneSittingModal,
  ConfirmSubmissionModal,
} from "../components/index";

export function TestModals() {
  const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] = useState(false);
  const [isRequirementsNotMetModalOpen, setIsRequirementsNotMetModalOpen] = useState(false);
  const [isCompleteInOneSittingModalOpen, setIsCompleteInOneSittingModalOpen] = useState(false);
  const [isConfirmSubmissionModalOpen, setIsConfirmSubmissionModalOpen] = useState(false);
  return (
    <div style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <button onClick={() => setIsCongratulationsModalOpen(true)}>
        Open Congratulations Modal
      </button>
      <CongratulationsModal
        isOpen={isCongratulationsModalOpen}
        onClose={() => setIsCongratulationsModalOpen(false)}
      ></CongratulationsModal>
      <button onClick={() => setIsRequirementsNotMetModalOpen(true)}>
        Open Requirements Not Met Modal
      </button>
      <RequirementsNotMetModal
        isOpen={isRequirementsNotMetModalOpen}
        onClose={() => setIsRequirementsNotMetModalOpen(false)}
      ></RequirementsNotMetModal>
      <button onClick={() => setIsCompleteInOneSittingModalOpen(true)}>
        Open Complete In One Sitting Modal
      </button>
      <CompleteInOneSittingModal
        path={2}
        isOpen={isCompleteInOneSittingModalOpen}
        onClose={() => setIsCompleteInOneSittingModalOpen(false)}
      ></CompleteInOneSittingModal>
      <button onClick={() => setIsConfirmSubmissionModalOpen(true)}>
        Open Confirm Submission Modal
      </button>
      <ConfirmSubmissionModal
        onSubmit={() => console.log("submit!!")}
        isOpen={isConfirmSubmissionModalOpen}
        onClose={() => setIsConfirmSubmissionModalOpen(false)}
      ></ConfirmSubmissionModal>
    </div>
  );
}
