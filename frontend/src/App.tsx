import { Outlet, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/index.ts";
import { Apply, Candidates } from "./pages/index.ts";
import UploadButtonWithPopup from "./components/ButtonForFileUploadPopup";
import TestButton from "./components/PopupWindow.tsx";

function Layout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <UploadButtonWithPopup />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Candidates />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="apply" element={<Apply />} />
        </Route>
      </Routes>
      <TestButton />
    </div>
  );
}

export default App;
