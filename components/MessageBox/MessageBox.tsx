"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { BiSend, BiSolidPhoneCall } from "react-icons/bi";
import { useMessageStore } from "@/stores/useMessageStore";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

const MessageBox = () => {
    const { data: session } = useSession();
    const { messages, selectedThread, sendMessage } = useMessageStore();
    const [newMessage, setNewMessage] = useState("");

    const handleSend = async () => {
        if (!selectedThread || !session?.user?.id) return;
        const res = await sendMessage(session.user.id, selectedThread, newMessage);
        console.log("Handle Send response => ", res)
        setNewMessage(""); // ✅ clear textarea
    };

    return (

        <>{selectedThread &&
            <div className="w-full md:w-full h-full flex flex-col bg-white">
                <div className="h-16 flex justify-between items-center w-full px-4 py-2 shadow border border-gray-200">
                    <div className="flex items-center">
                        <img className="h-10 w-10 overflow-hidden rounded-full"
                            src="/images/user-03.png"
                            alt="" />
                        <p className="font-semibold ml-3 text-slate-600">
                            {selectedThread ? selectedThread.name : "Select a thread"}
                        </p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <BiSolidPhoneCall className="fill-gray-900" size={20} />
                        <FaVideo className="fill-gray-900" size={20} />
                        <BsThreeDotsVertical className="fill-gray-900" size={20} />
                    </div>
                </div>

                {/* messages list */}
                <div className="p-4 h-[70vh] md:h-[77vh] mt-1 overflow-y-auto custom-scrollbar">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`w-full flex ${msg.senderId === session?.user?.id ? "justify-end" : "justify-start"
                                } my-2`}
                        >
                            <div
                                className={`p-3 rounded-xl max-w-xs ${msg.senderId === session?.user?.id
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-100 text-black"
                                    }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ✅ only show input if thread selected */}
                {selectedThread && (
                    <div className="md:pb-3 w-full mt-2 flex items-center space-x-4">
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="w-full h-12 px-3 pt-3 bg-slate-50 outline-none placeholder:text-gray-900 rounded-lg border border-gray-200"
                            placeholder="Type your message"
                        />
                        <div
                            className="rounded-2xl p-2 bg-slate-900 cursor-pointer"
                            onClick={handleSend}
                        >
                            <BiSend className="fill-white" size={20} />
                        </div>
                    </div>
                )}
            </div>
        } </>
    );
};

export default MessageBox;
