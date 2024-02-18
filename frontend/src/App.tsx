import { Outlet, Route, Routes } from "react-router-dom";

import { NavBar, PrescreeningForm } from "./components/index.ts";
import { Apply, Candidates } from "./pages/index.ts"

function Layout() {
  return (
    <>
      <NavBar></NavBar>
      <PrescreeningForm></PrescreeningForm>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Candidates />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="apply" element={<Apply />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
