import { Outlet, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import AboutUs from "./pages/AboutUs.tsx";
import Apply from "./pages/Apply.tsx";
import CIDS from "./pages/CIDS.tsx";
import Candidates from "./pages/Candidates.tsx";
import Consumers from "./pages/Consumers.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Login from "./pages/Login.tsx";
import Resources from "./pages/Resources.tsx";

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

export default App;
