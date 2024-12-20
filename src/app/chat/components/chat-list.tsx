import { HiMiniPlus, HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import { IChatList } from "@/types/chat";
import { When } from "react-if";
import { useState } from "react";

interface ChatListProps {
    chats: IChatList[];
    setActiveChat: (chatId: string) => void;
    handleCreateNewChat: () => void;
    handleDelete: (chatId: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, setActiveChat, handleCreateNewChat, handleDelete }) => {
    const [isHovered, setIsHovered] = useState(-1);

    return (
        <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4 h-128 max-h-128">
            <div className="w-full flex justify-end gap-2 pr-5">
                <button
                    type="button"
                    onClick={handleCreateNewChat}
                    className="w-7 h-7 ml-6 flex justify-center items-center text-white bg-customPurple hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-customPurple font-medium rounded-full"
                >
                    <HiMiniPlus />
                </button>
            </div>

            <div>
                {chats?.map((chat, key) => (
                    <span
                        className="flex items-center gap-4.5 px-7.5 py-3 hover:bg-gray-1 dark:hover:bg-dark-2 cursor-pointer"
                        key={key}
                        onClick={() => setActiveChat(chat._id)}
                        onMouseEnter={() => setIsHovered(key)}
                        onMouseLeave={() => setIsHovered(-1)}
                    >
                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <h5 className="font-medium text-dark dark:text-white">
                                    Conversa #{key + 1}
                                </h5>
                            </div>
                            <When condition={isHovered === key}>
                                <div className="flex items-center" onClick={() => handleDelete(chat._id)}>
                                    <HiOutlineTrash />
                                </div>
                            </When>
                        </div>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ChatList;
