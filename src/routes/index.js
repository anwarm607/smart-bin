import { Routes, Route, BrowserRouter } from "react-router-dom";
import Completion from "../pages/completion";
import Home from "../pages/home";
import TrashInstruction from "../pages/instruction";
import LoginPage from "../pages/login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/instruction" index element={<TrashInstruction />} />
        <Route path="/complete" index element={<Completion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
