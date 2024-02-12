import NavBar from "./components/NavBar.js";
import { Routes, Route, Outlet } from "react-router-dom";

import Consumers from "./pages/Consumers.tsx";
import Candidates from "./pages/Candidates.tsx";
import CIDS from "./pages/CIDS.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Resources from "./pages/Resources.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Login from "./pages/Login.tsx";
import Apply from "./pages/Apply.tsx";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Candidates />} />
          <Route path="consumers" element={<Consumers />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="cids" element={<CIDS />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="apply" element={<Apply />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
}

export default App;
