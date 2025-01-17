interface ChatList {
  roomId: number;
  name: String;
  lastMessage: String;
  lastMessageDate: String;
  imgUrl: String;
}

type ChatListResponse = ChatList[];

export type { ChatListResponse };
