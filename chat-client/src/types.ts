export interface Message {
  sender: string;
  content: string;
  timestamp: Date;
}

export interface ChatViewProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

export interface PopupProps {
  message: string;
}
