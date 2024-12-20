import { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";
import ChatMessage from "./chat-message";
import { IMessage } from "@/types/chat";

interface ChatProps {
  chatId: string;
  type: string;
  messages: IMessage[];
  user: string;
  isLoading: boolean;
}

const Chat = ({ chatId, type, messages, user }: ChatProps) => {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<IMessage[]>(messages);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = useMutation({
    mutationFn: (message: string) =>
      api.post("/chat/ask", { chatId, message, user }),
  });

  useEffect(() => {
    if (messages) {
      setHistory(messages);
    }
  }, [messages]);

  useEffect(() => {
    if (chatContainerRef.current) {
      setTimeout(() => {
        chatContainerRef.current!.scrollTop = chatContainerRef.current!.scrollHeight;
      }, 0);
    }
  }, [history]);

  const requesting = sendMessage.isPending;
  const canSendMessage = !requesting && message.length > 0;

  const handleSendMessage = async () => {
    if (canSendMessage) {
      setHistory((prev) => [
        ...prev,
        {
          role: "user",
          content: message,
          _id: `user-${Date.now()}`,
          createdAt: new Date(),
          readable: true,
        },
        {
          role: "assistant",
          content: "IS_LOADING",
          _id: `ai-${Date.now()}`,
          createdAt: new Date(),
          readable: true,
        }
      ]);
      
      setMessage("");

      const response = await sendMessage.mutateAsync(message);

      setHistory((prevState) => [...prevState.slice(0, -1), response.data.message]);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div
        ref={chatContainerRef}
        className="flex flex-col gap-2 p-0.5 overflow-y-auto flex-grow"
      >
        {history?.map((message: IMessage, index) => (
          <ChatMessage key={`message-${message._id}-${index}`} {...message} />
        ))}
      </div>
      <div className="flex flex-row gap-2 items-center p-2">
        <input
          className="w-full bg-gray-100 rounded-md p-2"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem aqui"
        />
        <button
          className={`h-full px-4 py-2 font-bold text-white rounded-md ${canSendMessage ? "bg-customPurple hover:bg-green-600" : "bg-gray-300"
            }`}
          disabled={!canSendMessage}
          onClick={handleSendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
