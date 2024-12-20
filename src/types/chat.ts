export type IChatInfo = {
  active?: any;
  name: string;
  lastMessage: string;
  time: string;
  textCount: number;
  dot: number;
};

export interface IMessage {
  role: string;
  content: string;
  readable: boolean;
  createdAt: Date;
  _id: string;
}

export interface IChat {
  _id: string;
  type: string;
  user: string;
  messages: IMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export type IChatList = Omit<IChat,"messages">
