import { Navigate, Route, Routes } from "react-router-dom";
import ChatWindow from "./components/ChatWindow";
import LoginPage from "./components/LoginPage";

export default function App() {
  return (
    <div className=" bg-slate-950">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<ChatWindow />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
