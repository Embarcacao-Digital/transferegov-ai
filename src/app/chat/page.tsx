"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { useCreateChat, useDeleteChat, useGetAllChats, useGetChat } from "@/api/hooks/chats";
import ChatList from "./components/chat-list";
import ChatWindow from "./components/chat-window";
import { Else, If, Then } from "react-if";
import { useQueryClient } from "@tanstack/react-query";

const Chat: React.FC = () => {
  const [activeChat, setActiveChat] = useState('');
  const { data, isLoading } = useGetAllChats();
  const { data: dataChat, isLoading: isLoadingChat } = useGetChat(activeChat);
  const queryClient = useQueryClient();

  const { mutateAsync: mutateCreate } = useCreateChat();
  const {mutateAsync: mutateDelete} = useDeleteChat();

  if (isLoading) return null;

  const handleCreateNewChat = async () => {
    await mutateCreate().
      then(response => {
        setActiveChat(response.data.chatId);
        queryClient.invalidateQueries({ queryKey: ["chats"] });
      });
  }

  const handleDeleteChat = async (id: string) => {
    await mutateDelete(id).
      then(() => {
        if(activeChat === id) {
          setActiveChat('');
        }
        queryClient.invalidateQueries({ queryKey: ["chats"] });
      });
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Chats" />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-3">
          <ChatList chats={data} setActiveChat={setActiveChat} handleCreateNewChat={handleCreateNewChat} handleDelete={handleDeleteChat}/>
        </div>
        <div className="col-span-12 xl:col-span-9">
          <div className="flex align-middle items-center rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card h-128 max-h-128">
            <If condition={activeChat}>
              <Then>
                {!isLoadingChat && <ChatWindow chat={dataChat} isLoading={isLoadingChat} />}
              </Then>
              <Else>
                <div className="w-full flex flex-col items-center gap-2">
                  <p className="text-center">Selecione um chat para continuar</p>
                  <button
                    type="button"
                    onClick={handleCreateNewChat}
                    className="text-white bg-customPurple hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-customPurple dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Iniciar nova conversa
                  </button>
                </div>
              </Else>
            </If>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Chat;
