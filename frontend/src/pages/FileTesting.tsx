import FileUploadPopupWindow from "../components/FileUploadPopupWindow.tsx";

export function FileTesting() {
  return (
    <>
      <h2>File Testing</h2>
      <FileUploadPopupWindow buttonText="Upload Files" />
      <FileUploadPopupWindow buttonText="Upload Files2" />
    </>
  );
}
