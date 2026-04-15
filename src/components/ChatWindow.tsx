import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Message from "./Message";
import InputBox from "./InputBox";
import type { MessageType } from "../Types";

// Connect to the backend
const socket = io("http://localhost:3000");

export default function ChatWindow() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  /* 
  useEffect(() => {
    // Listen for incoming messages from other clients
    socket.on("receive_message", (data: MessageType) => {
      // Show received messages as being from a "bot" / other user for visual distinction
      setMessages((prev) => [...prev, { ...data, sender: "bot" }]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []); */

  const handleSend = (text: string) => {
    const newMessage: MessageType = {
      id: crypto.randomUUID(),
      text,
      sender: "user",
      timestamp: Date.now(),
    };

    // Add locally to our own screen
    setMessages((prev) => [...prev, newMessage]);

    // Send it to the server
    socket.emit("send_message", newMessage);
  };

  useEffect(() => {
    socket.on("receive_message", (message: MessageType) => {});
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 border rounded-xl shadow-lg flex flex-col h-500px">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-2">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>

      <InputBox onSend={handleSend} />
    </div>
  );
}
