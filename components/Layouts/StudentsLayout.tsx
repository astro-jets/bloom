"use client"
import { BsBellFill } from "react-icons/bs";
import DropdownDefault from "../Dropdowns/DropdownDefault";
import StudentsLeftSideBar from "./StudentsLeftSideBar";

const StudentsLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className="min-h-full bg-[#F3F4F6] dark:bg-[#24303F]  md:px-2 font-sans">
            <div className="relative h-screen flex flex-col md:flex-row">
                <StudentsLeftSideBar />
                <div className="flex flex-col w-full md:ml-[17.3%] md:w-full p-2 overflow-y-scroll custom-scrollbar">
                    <div className="mb-6 mt-16 md:mt-0 flex justify-between items-center w-full">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-700">Good morning, Alex!</h2>
                            <p className="text-sm text-gray-500">Tuesday, May 29, 2025</p>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <BsBellFill className="fill-gray-600" size={20} />
                            <img src={'/images/user-08.png'} className={'object-cover w-12 h-12 rounded-full'} alt={''} />
                            <DropdownDefault />
                        </div>

                    </div>
                    {/* Main Content */}
                    <div className="h-full  pb-10 w-full ">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentsLayout;