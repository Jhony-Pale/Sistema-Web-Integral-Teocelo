import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import HistoryPage from "./pages/HistoryPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import CoatArmsPage from "./pages/CoatArmsPage";
import HistoricalEventsPage from "./pages/HistoricalEventsPage";
import MissionVisionPage from "./pages/MissionVisionPage";
import HCabildo from "./pages/HCabildo";

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
        </Route>
        <Route path="/loginregister" element={<LoginRegisterPage/>} />
        <Route path="*" element={<h1>Not found.</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
