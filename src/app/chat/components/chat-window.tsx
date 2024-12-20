import React from 'react'
import Chat from '@/app/chat/components/chat'
import type { IChat } from '@/types/chat'

interface ChatWindowProps {
    chat: IChat;
    isLoading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chat, isLoading }) => {
    return <Chat chatId={chat._id} messages={chat.messages} type={chat.type} user={chat.user} isLoading={isLoading}/>
}

export default ChatWindow