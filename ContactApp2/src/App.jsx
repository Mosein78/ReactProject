import { Navigate, Route, Routes } from "react-router-dom";
import AppContact from "./pages/AppContact";
import FormContact from "./pages/FormContact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/realPage" element={<AppContact />} />
        <Route path="/" element={<Navigate to="realPage" />} />
        <Route path="/formPage" element={<FormContact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
