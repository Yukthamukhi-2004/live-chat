import type { MessageType } from "../Types";

interface Props {
  message: MessageType;
}

export default function Message({ message }: Props) {
  const isUser = message.sender === "user";

  const time = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`px-4 py-2 rounded-xl max-w-xs ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <p>{message.text}</p>
        <span className="text-xs opacity-70 block mt-1">{time}</span>
      </div>
    </div>
  );
}
