import FileUploadPopupWindow from "../components/FileUploadPopupWindow.tsx";

export function Candidates() {
  return (
    <>
      <h2>Candidates</h2>
      <FileUploadPopupWindow buttonText="Upload Files" />
      <FileUploadPopupWindow buttonText="Upload Files2" />
    </>
  );
}
