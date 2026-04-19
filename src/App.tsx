import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import ChatWindow from "./components/ChatWindow";
import Home from "./components/Home";
import Login from "./components/LoginPage";

export default function App() {
  return (
    <div className=" bg-slate-950">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatWindow />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/LoginPage" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
