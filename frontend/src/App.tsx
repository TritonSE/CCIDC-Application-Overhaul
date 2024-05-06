import { Outlet, Route, Routes } from "react-router-dom";

import { NavBar } from "./components";
import {
  Application,
  Candidates,
  PrescreeningForm,
  TestCongratulations,
  ThankyouForApplying,
} from "./pages/index.ts";

function Layout() {
  return (
    <>
      <NavBar />
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
          <Route path="path1" element={<Application path={1} />} />
          <Route path="path2" element={<Application path={2} />} />
          <Route path="path3" element={<Application path={3} />} />
          <Route path="path4" element={<Application path={4} />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="prescreening" element={<PrescreeningForm />} />
          <Route path="ThankyouForApplying" element={<ThankyouForApplying />} />
          <Route path="TestCongratulations" element={<TestCongratulations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
