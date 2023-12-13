import { Route, Routes, useLocation } from "react-router-dom";
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
import Test from "./pages/Test";
import ProtectedRoute from "./components/ProtectedRoute";
import { AnimatePresence } from "framer-motion";
import NewPost from "./pages/NewPost";
import ProtectedRolRoute from "./components/ProtectedRolRoute";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import PostsEditPage from "./pages/PostsEditPage";
import EditPost from "./pages/EditPost";
import DeletePost from "./pages/DeletePost";
import SLRequestsPage from "./pages/SLRequestsPage";
import SLReportsPage from "./pages/SLReportsPage";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<NavBar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/coat-of-arms" element={<CoatArmsPage />} />
          <Route path="/historical-events" element={<HistoricalEventsPage />} />
          <Route path="/mission-and-vision" element={<MissionVisionPage />} />
          <Route path="/h-cabildo" element={<HCabildo />} />
          <Route path="/codes-ethics" element={<CodesEthicsPage />} />
          <Route path="/codes-conduct" element={<CodesConductPage />} />
          <Route
            path="/municipal-directory"
            element={<MunicipalDirectoryPage />}
          />
          <Route
            path="/circumstantial-act"
            element={<CircumstantialActPage />}
          />
          <Route path="/declaranet-convention" element={<DECLARANETPage />} />
          <Route path="/privacy-notices" element={<PrivacyNoticesPage />} />
          <Route path="/pmd-teocelo" element={<PMDTeoceloPage />} />
          <Route path="/pae-teocelo" element={<PAETeoceloPage />} />
          <Route path="/fism-evaluation" element={<FISMEvaluationPage />} />
          <Route
            path="/fortamun-evaluation"
            element={<FORTAMUNEvaluationPage />}
          />
          {/* <Route path="/prueba" element={<Test />} /> */}

          <Route element={<ProtectedRoute />}>
            <Route element={<ProtectedRolRoute rolRoute="employee.sc" />}>
              <Route path="/add-post" element={<NewPost />} />
              <Route path="/posts/edit" element={<PostsEditPage />} />
              <Route path="/posts/edit/:title" element={<EditPost />} />
              <Route path="/posts/delete" element={<DeletePost />} />
            </Route>
            <Route element={<ProtectedRolRoute rolRoute="employee.sl" />}>
              <Route path="/sl-requests" element={<SLRequestsPage />} />
              <Route path="/sl-reports" element={<SLReportsPage />} />
            </Route>
          </Route>

          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:title" element={<PostPage />} />
        </Route>
        <Route path="/loginregister" element={<LoginRegisterPage />} />
        <Route path="*" element={<h1>Not found.</h1>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
