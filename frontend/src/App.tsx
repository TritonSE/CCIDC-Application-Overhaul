import { Outlet, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/index.ts";
import { Apply, ApplyPage, Candidates, TestCongratulations } from "./pages/index.ts";

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ApplyPage />} />
          {/* <Route index element={<Candidates />} /> */}
          <Route path="apply" element={<Apply />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="TestCongratulations" element={<TestCongratulations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
