interface ChatList {
  roomId: number;
  name: String;
  lastMessage: String;
  lastMessageDate: String;
  imgUrl: String;
}

type ChatListResponse = ChatList[];

interface ChatMessage {
  chatRoomId: string;
  senderId: string;
  senderName: string;
  profileImg: string;
  date: string;
  content: string;
}

type ChatMessageResponse = ChatMessage[];

export type { ChatListResponse, ChatMessageResponse };
