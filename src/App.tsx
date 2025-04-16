import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BioPage from "./pages/portfolio";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BioPage />} path="/myportfolio" />
    </Routes>
  );
}

export default App;
