import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import ChatBot from "../components/ChatBot.jsx";
import Menu from "../pages/Menu.jsx";

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
      <ChatBot />
    </>
  );
}

export default AppRoutes;