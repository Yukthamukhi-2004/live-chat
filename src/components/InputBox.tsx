import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
}

export default function InputBox({ onSend }: Props) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="flex gap-2 p-2 border-t">
      <input
        className="flex-1 border rounded-lg px-3 py-2 outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />

      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 rounded-lg"
      >
        Send
      </button>
    </div>
  );
}
