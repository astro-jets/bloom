"use client"

import { BiSend, BiSolidPhoneCall } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

const MessageBox = () => {
    const boxWidth = "100%";

    return (
        <div className={`w-full h-full md:w-[${boxWidth}] h-full flex flex-col bg-white`}>
            <div className="h-16 flex justify-between items-center w-full px-4 py-2 shadow border border-gray-200">
                <div className="flex items-center">
                    <img className="h-10 w-10 overflow-hidden rounded-full"
                        src="/images/user-03.png"
                        alt="" />
                    <p className="font-semibold ml-3 text-slate-600">Paul</p>
                </div>
                <div className="flex items-center space-x-5">
                    <BiSolidPhoneCall className="fill-gray-900" size={20} />
                    <FaVideo className="fill-gray-900" size={20} />
                    <BsThreeDotsVertical className="fill-gray-900" size={20} />

                </div>
            </div>
            {/*  message container */}
            <div className="p-4 h-[77vh] mt-1 overflow-y-auto custom-scrollbar">
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className="w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                {/*  messages */}
                <div className="w-full flex flex-start overflow-y-auto">
                    <div className="w-full md:w-1/2 flex space-x-1">
                        <div className="h-10 w-12 shadow flex items-center justify-center rounded-full p-0 ">
                            <img className="w-full h-full  "
                                src="/images/user-05.png"
                                alt="" />
                        </div>
                        <div className="flex-col space-y-2 w-full">
                            <div className=" w-full bg-slate-100 p-4 rounded-b-2xl rounded-tr-2xl">
                                <p className=" text-sm text-gray-900">
                                    Hey all, <br />
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which dont look even slightly believable.
                                </p>
                            </div>
                            <span className="text-gray-900 text-xs">3:25 PM</span>
                        </div>
                    </div>
                </div>
                {/*  me */}
                <div className="w-full flex justify-end  my-4">
                    <div className="w-full md:w-1/2 flex items-start space-x-1">
                        <div className=" w-full bg-slate-900 p-4 rounded-b-xl rounded-tl-xl">
                            <p className=" text-sm text-white">
                                Hey, <br />
                                we are own hidden lake forest which is netural lake are generaly found in mountain.
                            </p>
                        </div>

                        <div className="h-10 w-12 shadow flex items-center justify-center  rounded-full p-0 ">
                            <img className="w-full h-full"
                                src="/images/user-03.png"
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-6 w-full mt-2 flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-900" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <div className="min-h-12 w-5/6 flex justify-between px-3 items-center  bg-slate-50 focus-within:border-slate-300 rounded-lg shadow border border-gray-200">
                    <textarea
                        className="w-full hide-scrollbar h-auto px-3 pt-3 bg-transparent outline-none placeholder:text-gray-900 "
                        placeholder="Type your message"
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-900" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="rounded-2xl p-2 bg-slate-900">
                        <BiSend className="fill-white" size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageBox;