import { Outlet, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/index.ts";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { Apply, Candidates } from "./pages/index.ts";

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
    <AuthProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Candidates />} />
            <Route path="apply" element={<Apply />} />
            <Route path="candidates" element={<Candidates />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
