import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import LoginPage from "./components/LoginPage";
import Message from "./components/Message";
import Register from "./components/Register";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <Route path="/" element={<ChatWindow />} />
        <Route path="/InputBox" element={<InputBox />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </div>
    </Routes>
  );
}
