import { fetchMessages, sendMessage } from "@/utils/routes"; // ✅ import axios helper
import { create } from "zustand";

interface Thread {
  id: string;
  name: string;
  role: string;
}

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
}

interface MessageStore {
  selectedThread: Thread | null;
  messages: Message[];
  loading: boolean;
  setSelectedThread: (thread: Thread, userId: string) => Promise<void>;
  sendMessage: (
    userId: string,
    thread: Thread,
    content: string
  ) => Promise<void>;
}

export const useMessageStore = create<MessageStore>((set, get) => ({
  selectedThread: null,
  messages: [],
  loading: false,

  setSelectedThread: async (thread, userId) => {
    set({ loading: true, selectedThread: thread, messages: [] });

    try {
      const res = await fetchMessages(userId, thread.id);
      set({ messages: res, loading: false });
    } catch (err) {
      console.error("Error fetching messages:", err);
      set({ loading: false });
    }
  },

  sendMessage: async (userId, thread, content) => {
    if (!content.trim()) return;

    // ✅ Create an optimistic message
    const tempMessage: Message = {
      id: `temp-${Date.now()}`,
      senderId: userId,
      receiverId: thread.id,
      content,
      read: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // ✅ Show optimistic message immediately
    set({ messages: [...get().messages, tempMessage] });

    try {
      // ✅ Use axios helper here
      const savedMessage = await sendMessage({
        senderId: userId,
        receiverId: thread.id,
        content,
      });

      // ✅ Replace optimistic message with the actual one from API
      set({
        messages: get().messages.map((msg) =>
          msg.id === tempMessage.id ? savedMessage : msg
        ),
      });
    } catch (err) {
      console.error("Send message error:", err);
      // 🚨 Optionally remove or mark the failed message
    }
  },
}));
