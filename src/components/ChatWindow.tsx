import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import type { MessageType } from "../Types";
import InputBox from "./InputBox";
import Message from "./Message";

const socket = io("http://localhost:3000");

export default function ChatWindow() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const handleReceiveMessage = (message: MessageType) => {
      setMessages((prev) => {
        if (prev.some((existingMessage) => existingMessage.id === message.id)) {
          return prev;
        }

        return [...prev, { ...message, sender: "bot" }];
      });
    };

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, []);

  const handleSend = (text: string) => {
    const newMessage: MessageType = {
      id: crypto.randomUUID(),
      text,
      sender: "user",
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
    socket.emit("send_message", newMessage);
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-10">
      <div className="flex h-[32rem] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-black/20">
        <div className="border-b border-slate-200 px-6 py-4 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
            Live Chat
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Conversation
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto bg-slate-50 p-4">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center text-sm text-slate-500">
              Start the conversation by sending your first message.
            </div>
          ) : (
            messages.map((message) => (
              <Message key={message.id} message={message} />
            ))
          )}
        </div>

        <InputBox onSend={handleSend} />
      </div>
    </div>
  );
}
