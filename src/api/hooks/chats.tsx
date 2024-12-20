"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useGetAllChats = () => {
    return useQuery({
        queryKey: ["chats"],
        queryFn: async () => {
            const response = await api.get(`/chat`);
            return response.data;
        }
    })
}

export const useGetChat = (chatId: string) => {
    return useQuery({
        queryKey: [`chat_${chatId}`],
        queryFn: async () => {
            const response = await api.get(`/chat/messages/${chatId}`);
            return response.data;
        },
        enabled: !!chatId
    })
}

export const useCreateChat = () => {
    return useMutation({
        mutationFn: async () => await api.post('/chat/start',
            {
                "user": "email@email.com",
                "type": "Default"
            }
        )
    })
}

export const useDeleteChat = () => {
    return useMutation({
        mutationFn: async (id: string) => await api.delete(`/chat/${id}`,    
        )
    })
}