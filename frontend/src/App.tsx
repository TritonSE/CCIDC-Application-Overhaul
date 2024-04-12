import { Outlet, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/index.ts";
import { AuthProvider, FormProvider } from "./contexts/index.ts";
import {
  Application,
  Candidates,
  FileTesting,
  Login,
  PrescreeningForm,
  RedirectTo404,
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
    <AuthProvider>
      <FormProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Candidates />} />
              <Route path="application" element={<Application />} />
              <Route path="candidates" element={<Candidates />} />
              <Route path="prescreening" element={<PrescreeningForm />} />
              <Route path="ThankyouForApplying" element={<ThankyouForApplying />} />
              <Route path="FileTesting" element={<FileTesting />} />
              <Route path="*" element={<RedirectTo404 />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </FormProvider>
    </AuthProvider>
  );
}

export default App;
