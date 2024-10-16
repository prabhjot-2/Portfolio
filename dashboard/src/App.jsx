import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import ManageSkills from "./pages/ManageSkills";
import ManageProjects from "./pages/ManageProjects";
import UpdateProject from "./pages/UpdateProject";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ManageTimeline from "./pages/ManageTimeline";
import ViewProject from "./pages/ViewProject";
import { useDispatch } from "react-redux";
import { getUser } from "./store/slices/userSlice";
import { getAllTimeline } from "./store/slices/timelineSlice";
import { getAllMessages } from "./store/slices/messageSlice";
import { getAllSkills } from "./store/slices/skillSlice";
import { getAllSoftwareApplications } from "./store/slices/softwareApplicationSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllTimeline());
    dispatch(getAllMessages());
    dispatch(getAllSkills());
    dispatch(getAllSoftwareApplications())

  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/manage/skills" element={<ManageSkills />} />
        <Route path="/manage/timeline" element={<ManageTimeline />} />
        <Route path="/manage/projects" element={<ManageProjects />} />
        <Route path="/view/project/:id" element={<ViewProject />} />
        <Route path="/update/project/:id" element={<UpdateProject />} />
      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
    </Router>
  );
}

export default App;