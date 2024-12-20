import Markdown from "react-markdown";
import useIsMobile from "@/hooks/useIsMobile";
import type { IMessage } from "@/types/chat";
import { Else, If, Then } from "react-if";
import { SyncLoader } from "react-spinners";

const ChatMessage = ({ role, content, createdAt }: IMessage) => {
  const isMobile = useIsMobile();
  const isUser = role === "user";
  const isLoading = content === "IS_LOADING";

  console.log('loading', isLoading);

  return (
    <div
      className={`rounded-lg p-2.5 mb-5 shadow-md ${isUser ? "bg-blue-100 self-end" : "bg-white self-start"
        } ${isMobile ? "max-w-[95%]" : "max-w-[60%]"}`}
    >
      <h6 className="font-bold">
        {isUser ? "Você" : "Agente"}
      </h6>
      <div className="mt-2.5 text-black">
        <If condition={isLoading}>
          <Then>
            <SyncLoader size={8}/>
          </Then>
          <Else>
            <Markdown>
              {content}
            </Markdown>
          </Else>
        </If>
      </div>
      <p className="block mt-2.5 text-gray-500">
        {createdAt?.toLocaleString("pt-BR")}
      </p>
    </div>

  );
};

export default ChatMessage;
