"use client"
import { BsBook } from "react-icons/bs";
import { HiPresentationChartBar } from "react-icons/hi";
import { useLessonModalStore } from '@/stores/useLessonModalSotre';
import { ReminderCard } from "../cards/reminderCard";

const DashboardRightSideBar = () => {
    const openModal = useLessonModalStore((state) => state.openModal);

    return (
        <>
            {/*  Right Sidebar */}
            <aside className="hidden md:block fixed custom-scrollbar overflow-y-auto top-0 right-0 bg-white rounded-xl shadow p-4 space-y-6 h-screen w-[23%]">
                <div className="flex-col flex space-y-2">
                    <h2 className="mb-2 text-gray-700 capitalize">NEXT SCHEDULED LESSON</h2>

                    <div className="bg-blue-900/5 p-3 rounded-lg text-center space-y-2">
                        <div className="flex justify-between items-center">
                            <p className="text-[#5C56D3] text-md font-semibold">Today, 2:00 PM</p>
                            <div className="rounded-xl  bg-[#5C56D3] text-white p-1" style={{ 'fontSize': '10px' }}>In 1 hour</div>
                        </div>
                        <div className="flex space-x-3 items-center text-[#2c2d39]">
                            <img src={'/images/user-04.png'} className={'object-cover w-12 h-12 rounded-full'} alt={''} />
                            <div className="flex flex-col items-start justify-start">
                                <h3 className="font-bold">Sophia Richards</h3>
                                <p className="text-sm text-gray-700">Math - Calculus</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-[#5855D8] text-white text-sm px-4 py-2 rounded-sm shadow cursor-pointer"
                                onClick={openModal}>View Details</button>
                            <button className="bg-white text-[#2c2d39] text-sm px-4 py-2 rounded-sm shadow">Reschedule</button>
                        </div>
                    </div>
                </div>

                {/* Shortcuts */}
                {/* <div className="flex flex-col">
                    <h2 className="mb-2 text-gray-700">SHORTCUTS</h2>
                    <div className="grid grid-cols-2 gap-2">

                        <div className="bg-[#f3f4f6] w-25 flex items-center justify-center space-x-3 p-2 rounded-sm">
                            <HiPresentationChartBar size={20} color="black" />
                            <p className="text-[#2c2d39] text-sm">Lessons</p>
                        </div>
                        <div className="bg-[#f3f4f6] w-25 flex items-center justify-center space-x-3 p-2 rounded-sm">
                            <BsCalendar size={20} color="black" />
                            <p className="text-[#2c2d39] text-sm">Schedule</p>
                        </div>

                        <div className="bg-[#f3f4f6] w-30 flex items-center justify-center space-x-3 p-2 rounded-sm">
                            <BiSolidComment size={20} color="black" />
                            <p className="text-[#2c2d39] text-sm">Messages</p>
                        </div>

                        <div className="bg-[#f3f4f6]  w-30 flex items-center justify-center space-x-3 p-2 rounded-sm">
                            <BsBook size={20} color="black" />
                            <p className="text-[#2c2d39] text-sm">Homework</p>
                        </div>


                        <div className="bg-[#f3f4f6] w-25 flex items-center justify-center space-x-3 p-2 rounded-sm">
                            <BsBarChartLine size={20} color="black" />
                            <p className="text-[#2c2d39] text-sm">Reports</p>
                        </div>
                    </div>

                </div> */}

                <ReminderCard />

                {/* Notifications */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <h2 className="text-gray-700">RECENT NOTIFICATIONS</h2>
                        <p className="text-[#5C56D3] font-thin text-xs">mark all as read</p>
                    </div>
                    <div className="grid grid-cols-1 gap-y-2 py-2 w-full ">
                        <div className="flex items-center justify-around rounded-2xl h-25 w-full bg-gray-100  border-l border-[#5C56D3]">
                            <div className="w-10 h-10 bg-[#5C56D3]/10 rounded-full p-1 flex items-center justify-center"><BsBook size={20} color="blue" /></div>
                            <div className="flex flex-col w-4/5">
                                <p className="text-[#2c2d39] text-sm text-bold">New Homework Submission</p>
                                <p className="text-xs text-gray-500">Sophia ricahrds submitted a calculus problem.</p>
                                <p className="text-xs text-gray-700">10:30 am</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-around rounded-2xl h-25 w-full bg-gray-100  border-l border-[#5C56D3]">
                            <div className="w-10 h-10 bg-[#5C56D3]/10 rounded-full p-1 flex items-center justify-center"><HiPresentationChartBar size={20} color="blue" /></div>
                            <div className="flex flex-col w-4/5">
                                <p className="text-[#2c2d39] text-sm text-bold">Lesson Rescheduled</p>
                                <p className="text-xs text-gray-500">Jack Lee Moved his lesson to Thursday.</p>
                                <p className="text-xs text-gray-700">yesterday 10:30 am</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-around rounded-2xl h-25 w-full bg-gray-100  border-l border-[#5C56D3]">
                            <div className="w-10 h-10 bg-[#5C56D3]/10 rounded-full p-1 flex items-center justify-center"><HiPresentationChartBar size={20} color="blue" /></div>
                            <div className="flex flex-col w-4/5">
                                <p className="text-[#2c2d39] text-sm text-bold">New Message</p>
                                <p className="text-xs text-gray-500">Mason Keller: we will cover topic 5 today.</p>
                                <p className="text-xs text-gray-700">yesterday 2:30 pm</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-[#5C56D3] text-center font-thin text-xs">view all</p>
                </div>

            </aside>
        </>
    );
}

export default DashboardRightSideBar;