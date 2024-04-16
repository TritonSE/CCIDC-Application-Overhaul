import { Outlet, Route, Routes } from "react-router-dom";


import { NavBar } from "./components/index.ts";
import { Apply, Candidates, TestCongratulations, ThankyouForApplying, PrescreeningForm } from "./pages/index.ts";


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
