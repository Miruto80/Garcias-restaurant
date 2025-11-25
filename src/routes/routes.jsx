import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Navbar from "../components/Navbar.jsx"; // asegúrate de tener este archivo
import ChatBot from "../components/ChatBot.jsx";

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ChatBot />
    </>
  );
}

export default AppRoutes;