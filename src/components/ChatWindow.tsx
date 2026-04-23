import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import type { MessageType } from "../Types";
import InputBox from "./InputBox";
import Message from "./Message";


const socket = io("http://localhost:3000");

export default function ChatWindow() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [roomId, setRoomId] = useState<string>("");

  useEffect(() => {
    const handleReceiveMessage = (message: MessageType) => {
      console.log("Received message:", message);
      setMessages((prev) => {
        if (prev.some((existingMessage) => existingMessage.id === message.id)) {
          return prev;
        }

        return [...prev, { ...message }];
      });

      
    };

    socket.on("receive_message", handleReceiveMessage);
socket.on("userJoined", (data) => {
  console.log("A user joined the room:", data);
});
    return () => {
      socket.off("receive_message", handleReceiveMessage);
      console.log("User got dissconnected");
    };
  }, []);

  const handleSend = (text: string) => {
    const newMessage: MessageType = {
      id: crypto.randomUUID(),
      text,
      roomId : roomId,
      timestamp: Date.now(),
    };


    setMessages((prev) => [...prev, newMessage]);
    socket.emit("send_message", newMessage);
  };



  const createRoom = () => {
    socket.emit("createRoom", roomId);
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-10">
      <div className="flex h-[32rem] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/40">
        <div className="border-b border-zinc-700 px-6 py-4 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Live Chat
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-white">
            Conversation
          </h1>
        </div>
         <input
              type="text"
              placeholder="Type your message..."
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className=" rounded-md border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
            />
            <button onClick={createRoom} className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-yellow-300">
              create room
            </button>
           <div className="flex-1 overflow-y-auto bg-zinc-800 p-4">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center text-sm text-zinc-400">
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
