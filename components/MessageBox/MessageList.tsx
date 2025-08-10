"use client";

import { Key } from "react";
import { BiRefresh } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import { useMessageStore } from "@/stores/useMessageStore";

interface User {
    id: string;
    name: string;
    role: string;
}

interface Thread {
    id: string;
    name: string;
    role: string;
    user: User;
    unreadCount: number;
}

interface MessageListProps {
    threads: Thread[];
    userId: string;
}

export default function MessageList({ threads, userId }: MessageListProps) {
    const setSelectedThread = useMessageStore((state) => state.setSelectedThread);

    return (
        <div className="w-full h-screen flex flex-col bg-white">
            {/* Header */}
            <div className="h-16 flex justify-between items-center w-full px-4 py-3 shadow border border-gray-200">
                <h3 className="text-gray-900 text-xl">Messages</h3>
                <div className="flex space-x-3">
                    <BiRefresh className="fill-gray-900 cursor-pointer" size={20} />
                    <BsMegaphone className="fill-gray-900 cursor-pointer" size={20} />
                </div>
            </div>

            {/* Thread List */}
            <div className="h-full w-full space-y-1">
                {threads.map((thread, index: Key) => (
                    <div
                        key={index}
                        className="py-4 flex justify-between items-center border-b border-gray-200 cursor-pointer shadow-sm hover:bg-gray-50 transition"
                        onClick={() => setSelectedThread(thread.user, userId)}
                    >
                        <div className="flex space-x-2 h-15">
                            {/* Avatar */}
                            <div className="flex flex-col relative w-14 h-14 items-center justify-center">
                                <div className="rounded-full h-12 w-12 overflow-hidden shadow">
                                    <img
                                        src="/images/user-05.png"
                                        alt={`${thread.user.name} avatar`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-3 h-3 rounded-full bg-green-500 absolute right-1 bottom-1"></div>
                            </div>

                            {/* User Info */}
                            <div className="flex flex-col space-y-2">
                                <p className="text-md font-semibold text-black">{thread.user.name}</p>
                                <p className="text-xs rounded-2xl text-black w-12 py-1 text-center font-semibold bg-gray-100">
                                    Tutor
                                </p>
                            </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-col items-center space-y-5 h-15 pr-4">
                            <p className="text-xs text-black font-semibold">Yesterday</p>
                            {thread.unreadCount > 0 && (
                                <div className="w-4 h-4 text-[10px] rounded-full flex bg-slate-900 text-white items-center justify-center">
                                    {thread.unreadCount}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
