interface ChatList {
  chatroomId: number;
  name: string;
  lastMessage: string;
  lastMessageDate: string;
  imgUrl: string;
}

type ChatListResponse = ChatList[];

interface ChatMessage {
  chatroomId: string;
  senderId: string;
  senderName: string;
  profileImg: string;
  date: string;
  content: string;
}

type ChatMessageResponse = ChatMessage[];

export type { ChatListResponse, ChatMessageResponse };
