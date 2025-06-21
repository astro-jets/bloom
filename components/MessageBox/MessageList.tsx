import { BiRefresh } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";

const MessageList = () => {
    return (
        <div className="w-full h-screen flex flex-col bg-white">
            <div className="h-12 flex justify-between items-center w-full px-4 py-3 shadow border border-gray-200">
                <h3 className="text-gray-900 text-xl">Messages</h3>

                <div className="flex space-x-3">
                    <BiRefresh className="fill-gray-900" size={20} />
                    <BsMegaphone className="fill-gray-900" size={20} />
                </div>
            </div>

            <div className="h-full w-full space-y-1">
                <div className=" py-4 flex justify-between items-center bg-none border-b border-gray-200 cursor-pointer shadow">
                    <div className="space-x-2 flex h-15">
                        {/* Actual avatar */}
                        <div className="flex flex-col relative w-14 h-14 items-center justify-center">
                            <div className="rounded-full h-12 w-12 overflow-hidden shadow">
                                <img src={'/images/user-05.png'} className="w-full object-cover" />
                            </div>
                            <div className="w-3 h-3 rounded-full bg-green-500 absolute right-1 bottom-1"></div>
                        </div>

                        <div className="flex-col flex space-y-2">
                            <p className="text-md font-semibold text-black"> Micheal Chen</p>
                            <p className="text-xs rounded-2xl text-black w-12 py-1 text-center  font-semibold bg-gray-100">Tutor</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start space-y-5 h-15 p-0 pr-4">
                        <p className="text-xs text-black font-semibold">Yesterday</p>
                        <div className="w-4 h-4 text-sm rounded-full flex bg-slate-900 text-slate-300 items-center justify-center bg">2</div>
                    </div>
                </div>

                <div className=" py-4 flex justify-between items-center bg-slate-900 cursor-pointer shadow ">
                    <div className="space-x-2 flex h-15">
                        {/* Actual avatar */}
                        <div className="flex flex-col relative w-14 h-14 items-center justify-center">
                            <div className="rounded-full h-12 w-12 overflow-hidden shadow">
                                <img src={'/images/user-04.png'} className="w-full object-cover" />
                            </div>
                            <div className="w-3 h-3 rounded-full bg-green-500 absolute right-1 bottom-1"></div>
                        </div>

                        <div className="flex-col flex space-y-2">
                            <p className="text-md font-semibold text-white"> Sarah Johnson</p>
                            <p className="text-xs rounded-2xl text-white w-12 py-1 text-center  font-semibold bg-gray-600">Tutor</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start space-y-5 h-15 p-0 pr-4">
                        <p className="text-xs text-white font-semibold">10:34 AM</p>
                        <div className="w-2 h-2 text-sm rounded-full flex bg-gray-600 text-slate-900 items-center justify-center bg"></div>
                    </div>
                </div>

                <div className=" py-4 flex justify-between items-center bg-none border-b border-gray-200 cursor-pointer shadow">
                    <div className="space-x-2 flex h-15">
                        {/* Actual avatar */}
                        <div className="flex flex-col relative w-14 h-14 items-center justify-center">
                            <div className="rounded-full h-12 w-12 overflow-hidden shadow">
                                <img src={'/images/user-07.png'} className="w-full object-cover" />
                            </div>
                            <div className="w-3 h-3 rounded-full bg-green-500 absolute right-1 bottom-1"></div>
                        </div>

                        <div className="flex-col flex space-y-2">
                            <p className="text-md font-semibold text-black"> Emily Davis</p>
                            <p className="text-xs rounded-2xl text-black w-12 py-1 text-center  font-semibold bg-gray-100">Admin</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start space-y-5 h-15 p-0 pr-4">
                        <p className="text-xs text-black font-semibold">2 days ago</p>
                        <div className="w-2 h-2 text-sm rounded-full flex bg-gray-600 text-slate-900 items-center justify-center bg"></div>
                    </div>
                </div>

                <div className=" py-4 flex justify-between items-center bg-none border-b border-gray-200 cursor-pointer shadow">
                    <div className="space-x-2 flex h-15">
                        {/* Actual avatar */}
                        <div className="flex flex-col relative w-14 h-14 items-center justify-center">
                            <div className="rounded-full h-12 w-12 overflow-hidden shadow">
                                <img src={'/images/user-08.png'} className="w-full object-cover" />
                            </div>
                            <div className="w-3 h-3 rounded-full bg-green-500 absolute right-1 bottom-1"></div>
                        </div>

                        <div className="flex-col flex space-y-2">
                            <p className="text-md font-semibold text-black"> Alex Roudrgez</p>
                            <p className="text-xs rounded-2xl text-black w-12 py-1 text-center  font-semibold bg-gray-100">Tutor</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start space-y-5 h-15 p-0 pr-4">
                        <p className="text-xs text-black font-semibold">1 week ago</p>
                        <div className="w-2 h-2 text-sm rounded-full flex bg-gray-600 text-slate-900 items-center justify-center bg"></div>
                    </div>
                </div>

                <div className=" py-4 flex justify-between items-center bg-none border-b border-gray-200 cursor-pointer shadow">
                    <div className="space-x-2 flex h-15">
                        {/* Actual avatar */}
                        <div className="flex flex-col relative w-14 h-14 items-center justify-center">
                            <div className="rounded-full h-12 w-12 overflow-hidden shadow">
                                <img src={'/images/user-10.png'} className="w-full object-cover" />
                            </div>
                            <div className="w-3 h-3 rounded-full bg-green-500 absolute right-1 bottom-1"></div>
                        </div>

                        <div className="flex-col flex space-y-2">
                            <p className="text-md font-semibold text-black"> Lisa Wang</p>
                            <p className="text-xs rounded-2xl text-black w-12 py-1 text-center  font-semibold bg-gray-100">Student</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start space-y-5 h-15 p-0 pr-4">
                        <p className="text-xs text-black font-semibold">Yesterday</p>
                        <div className="w-2 h-2 text-sm rounded-full flex bg-gray-600 text-slate-900 items-center justify-center bg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageList;