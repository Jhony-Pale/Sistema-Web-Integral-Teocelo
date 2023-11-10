import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import HistoryPage from "./pages/HistoryPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import CoatArmsPage from "./pages/CoatArmsPage";
import HistoricalEventsPage from "./pages/HistoricalEventsPage";
import MissionVisionPage from "./pages/MissionVisionPage";
import HCabildo from "./pages/HCabildo";
import MunicipalDirectoryPage from "./pages/MunicipalDirectoryPage";
import CircumstantialActPage from "./pages/CircumstantialActPage";
import CodesEthicsPage from "./pages/CodesEthicsPage";
import CodesConductPage from "./pages/CodesConductPage";
import DECLARANETPage from "./pages/DECLARANETPage";
import PrivacyNoticesPage from "./pages/PrivacyNoticesPage";
import PMDTeoceloPage from "./pages/PMDTeoceloPage";
import PAETeoceloPage from "./pages/PAETeoceloPage";
import FISMEvaluationPage from "./pages/FISMEvaluationPage";
import FORTAMUNEvaluationPage from "./pages/FORTAMUNEvaluationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/coat-of-arms" element={<CoatArmsPage />} />
          <Route path="/historical-events" element={<HistoricalEventsPage />} />
          <Route path="/mission-and-vision" element={<MissionVisionPage />} />
          <Route path="/h-cabildo" element={<HCabildo />} />
          <Route path="/codes-ethics" element={<CodesEthicsPage />} />
          <Route path="/codes-conduct" element={<CodesConductPage />} />
          <Route path="/municipal-directory" element={<MunicipalDirectoryPage />} />
          <Route path="/circumstantial-act" element={<CircumstantialActPage />} />
          <Route path="/declaranet-convention" element={<DECLARANETPage />} />
          <Route path="/privacy-notices" element={<PrivacyNoticesPage />} />
          <Route path="/pmd-teocelo" element={<PMDTeoceloPage />} />
          <Route path="/pae-teocelo" element={<PAETeoceloPage />} />
          <Route path="/fism-evaluation" element={<FISMEvaluationPage />} />
          <Route path="/fortamun-evaluation" element={<FORTAMUNEvaluationPage />} />
        </Route>
        <Route path="/loginregister" element={<LoginRegisterPage/>} />
        <Route path="*" element={<h1>Not found.</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
