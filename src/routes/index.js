import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import LoginPage from "../pages/login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
