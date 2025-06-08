import TableOne from "@/components/table";
import { BiCameraMovie, BiSolidComment } from "react-icons/bi";
import { BsBarChartLine, BsBook, BsCalendar, BsPeople, BsStarFill } from "react-icons/bs";
import { FaCalendar, FaEnvelope } from "react-icons/fa";
import { HiPresentationChartBar } from "react-icons/hi";
import { PiGraduationCapLight } from "react-icons/pi";

export default function Dashboard() {
    return (
        <div className="h-full bg-gray-100 p-2 font-sans">
            <div className="relative h-screen flex">
                {/* Sidebar */}
                <aside className="fixed flex flex-col items-center top-0 left-0 bg-white rounded-xl shadow p-4 h-screen w-[16%]">
                    <h1 className="text-2xl font-bold mb-6 text-blue-800 ">Bloom</h1>
                    <nav className=" flex flex-col gap-4 py-4 space-y-4 w-full text-gray-700 border-t border-gray-300">
                        <button className="cursor-pointer flex items-center gap-3 text-sm  hover:text-blue-700"><BsCalendar /> Dashboard</button>
                        <button className="cursor-pointer flex items-center gap-3 text-sm hover:text-blue-700"><BsPeople /> Student Management</button>
                        <button className="cursor-pointer flex items-center gap-3 text-sm hover:text-blue-700"><BsBook /> Homework</button>
                        <button className="cursor-pointer flex items-center gap-3 text-sm hover:text-blue-700"><BiCameraMovie /> Recordings</button>
                        <button className="cursor-pointer flex items-center gap-3 text-sm hover:text-blue-700"><HiPresentationChartBar /> Lessons</button>
                        <button className="cursor-pointer flex items-center gap-3 text-sm hover:text-blue-700"><FaCalendar /> Schedules</button>
                        <button className="cursor-pointer flex items-center gap-3 text-sm hover:text-blue-700 relative"><FaEnvelope /><span>Messages</span><span className="ml-auto text-xs bg-gray-500 text-white rounded-full px-2">3</span></button>
                        <button className="cursor-pointer flex items-center gap-3 text-sm hover:text-blue-700"><BsBarChartLine /> Reports</button>
                    </nav>
                    <div className="absolute bottom-6 w-11/12 border-t border-gray-300 pt-4">
                        <div className="bg-blue-400 p-3 rounded-lg text-center">
                            <h3 className="font-semibold text-sm mb-2">Upgrade to Pro</h3>
                            <p className="text-xs mb-2">Get access to advanced analytics and lesson plans.</p>
                            <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded">Learn More</button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="h-full custom-scrollbar p-4 overflow-y-auto w-[62%] ml-[16%]">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-700">Good morning, Sarah!</h2>
                        <p className="text-sm text-gray-500">Tuesday, May 29, 2025</p>
                    </div>

                    {/* Top Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-xl shadow">
                            <div className="flex justify-between items-center w-full">
                                <h3 className="text-sm font-medium text-gray-600">Total Students</h3>
                                <span className="rounded-xl bg-blue-300 p-1"><PiGraduationCapLight size={20} color="blue" /></span>
                            </div>
                            <p className="text-black text-2xl font-bold mt-1">24</p>
                            <p className="text-xs text-red-500">▼ 12% vs last month</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow">
                            <div className="flex justify-between items-center w-full">
                                <h3 className="text-sm font-medium text-gray-600">Total Lessons</h3>
                                <span className="rounded-xl bg-blue-300 p-1"><HiPresentationChartBar size={20} color="blue" /></span>
                            </div>
                            <p className="text-black text-2xl font-bold mt-1">152</p>
                            <p className="text-xs text-red-500">▼ 8% vs last month</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow">
                            <div className="flex justify-between items-center w-full">
                                <h3 className="text-sm font-medium text-gray-600">Performance Score</h3>
                                <span className="rounded-xl bg-blue-300 p-1"><BsStarFill size={20} color="blue" /></span>
                            </div>

                            <p className="text-2xl font-bold text-green-600 mt-1">92%</p>
                            <p className="text-xs text-gray-500">Excellent (student feedback)</p>
                        </div>
                    </div>


                    <div className="w-full mb-6 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <h3 className="text-lg font-semibold my-2 text-black">This Weeks Schedule</h3>
                        <table className="w-full">
                            <thead>
                                <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white bg-blue-500">
                                    <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                                        <span className="hidden lg:block"> Sunday </span>
                                        <span className="block lg:hidden"> Sun </span>
                                    </th>
                                    <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                                        <span className="hidden lg:block"> Monday </span>
                                        <span className="block lg:hidden"> Mon </span>
                                    </th>
                                    <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                                        <span className="hidden lg:block"> Tuesday </span>
                                        <span className="block lg:hidden"> Tue </span>
                                    </th>
                                    <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                                        <span className="hidden lg:block"> Wednesday </span>
                                        <span className="block lg:hidden"> Wed </span>
                                    </th>
                                    <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                                        <span className="hidden lg:block"> Thursday </span>
                                        <span className="block lg:hidden"> Thur </span>
                                    </th>
                                    <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                                        <span className="hidden lg:block"> Friday </span>
                                        <span className="block lg:hidden"> Fri </span>
                                    </th>
                                    <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                                        <span className="hidden lg:block"> Saturday </span>
                                        <span className="block lg:hidden"> Sat </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- Line 1 --> */}
                                <tr className="grid grid-cols-7 min-h-16 h-full">
                                    <td className="flex flex-col space-y-2  relative cursor-pointer border border-stroke">
                                        <span className="font-medium text-black text-center">
                                            27
                                        </span>
                                    </td>

                                    <td className="flex flex-col space-y-2  relative cursor-pointer border border-stroke">
                                        <span className="font-medium text-black text-center">
                                            28
                                        </span>
                                        <div className="w-full cursor-pointer px-1">
                                            <div className="rounded-lg bg-gray-100  border-blue-500  z-99 mb-1 flex w-full flex-col border-l-[3px] border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[100%] md:opacity-100">
                                                <span className="event-name text-sm font-semibold text-black">
                                                    Sophia R
                                                </span>
                                                <span className="time text-sm font-medium text-black">
                                                    Physics
                                                </span>
                                                <span className="time text-xs font-small text-gray-500">
                                                    9:00 AM
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-full cursor-pointer px-1">
                                            <div className="rounded-lg bg-gray-100  border-blue-500  z-99 mb-1 flex w-full flex-col border-l-[3px] border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[100%] md:opacity-100">
                                                <span className="event-name text-sm font-semibold text-black">
                                                    Olivia P
                                                </span>
                                                <span className="time text-sm font-medium text-black">
                                                    Math
                                                </span>
                                                <span className="time text-xs font-small text-gray-500">
                                                    1:00 PM
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-full cursor-pointer px-1">
                                            <div className="rounded-lg bg-gray-100  border-blue-500  z-99 mb-1 flex w-full flex-col border-l-[3px] border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[100%] md:opacity-100">
                                                <span className="event-name text-sm font-semibold text-black">
                                                    Mason K
                                                </span>
                                                <span className="time text-sm font-medium text-black">
                                                    Chemistry
                                                </span>
                                                <span className="time text-xs font-small text-gray-500">
                                                    3:30 PM
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="flex flex-col space-y-2  relative cursor-pointer border border-stroke">
                                        <span className="font-medium text-black text-center">
                                            29
                                        </span>
                                        <div className="w-full cursor-pointer px-1">
                                            <div className="event bg-gray-100  border-blue-500  z-99 mb-1 flex w-full flex-col rounded-lg border-l-[3px] border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[100%] md:opacity-100">
                                                <span className="event-name text-sm font-semibold text-black">
                                                    Emma W
                                                </span>
                                                <span className="time text-sm font-medium text-black">
                                                    Math
                                                </span>
                                                <span className="time text-xs font-small text-gray-500">
                                                    3:30 PM
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-full cursor-pointer px-1">
                                            <div className="rounded-lg bg-gray-100  border-blue-500  z-99 mb-1 flex w-full flex-col border-l-[3px] border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[100%] md:opacity-100">
                                                <span className="event-name text-sm font-semibold text-black">
                                                    Alex T
                                                </span>
                                                <span className="time text-sm font-medium text-black">
                                                    Science
                                                </span>
                                                <span className="time text-xs font-small text-gray-500">
                                                    5:00 PM
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="flex flex-col space-y-2  relative cursor-pointer border border-stroke">
                                        <span className="font-medium text-black text-center">
                                            30
                                        </span>
                                        <div className="w-full cursor-pointer px-1">
                                            <div className="rounded-lg bg-gray-100  border-blue-500  z-99 mb-1 flex w-full flex-col border-l-[3px] border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[100%] md:opacity-100">
                                                <span className="event-name text-sm font-semibold text-black">
                                                    Eva S
                                                </span>
                                                <span className="time text-sm font-medium text-black">
                                                    Spanish
                                                </span>
                                                <span className="time text-xs font-small text-gray-500">
                                                    9:30 AM
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="flex flex-col space-y-2  relative cursor-pointer border border-stroke">
                                        <span className="font-medium text-black text-center">
                                            31
                                        </span>
                                        <div className="w-full cursor-pointer px-1">
                                            <div className="rounded-lg bg-gray-100  border-blue-500  z-99 mb-1 flex w-full flex-col border-l-[3px] border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[100%] md:opacity-100">
                                                <span className="event-name text-sm font-semibold text-black">
                                                    Noah J
                                                </span>
                                                <span className="time text-sm font-medium text-black">
                                                    History
                                                </span>
                                                <span className="time text-xs font-small text-gray-500">
                                                    3:30 PM
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="flex flex-col space-y-2  relative cursor-pointer border border-stroke">
                                        <span className="font-medium text-black text-center">
                                            1
                                        </span>
                                        <div className="w-full cursor-pointer px-1">
                                            <div className="event bg-gray-100  border-blue-500  z-99 mb-1 flex w-full flex-col rounded-lg border-l-[3px] border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[100%] md:opacity-100">
                                                <span className="event-name text-sm font-semibold text-black">
                                                    Jack L
                                                </span>
                                                <span className="time text-sm font-medium text-black">
                                                    English
                                                </span>
                                                <span className="time text-xs font-small text-gray-500">
                                                    9:30 AM
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-full cursor-pointer px-1">
                                            <div className="rounded-lg bg-gray-100  border-blue-500  z-99 mb-1 flex w-full flex-col border-l-[3px] border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[100%] md:opacity-100">
                                                <span className="event-name text-sm font-semibold text-black">
                                                    Emma W
                                                </span>
                                                <span className="time text-sm font-medium text-black">
                                                    Math
                                                </span>
                                                <span className="time text-xs font-small text-gray-500">
                                                    3:30 PM
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="flex flex-col space-y-2  relative cursor-pointer border border-stroke">
                                        <span className="font-medium text-black text-center">
                                            2
                                        </span>
                                    </td>


                                </tr>
                                {/* <!-- Line 1 --> */}
                                {/* <!-- Line 2 --> */}
                            </tbody>
                        </table>
                    </div>

                    <TableOne />


                    {/* Notifications */}
                    <div className="bg-white rounded-xl shadow p-4 mt-6">
                        <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
                        <ul className="text-sm text-gray-700 space-y-2">
                            <li><span className="text-blue-600 font-semibold">New homework submission:</span> Sophia Richards submitted Calculus Problem Set — <span className="text-gray-500">10:23 AM</span></li>
                            <li><span className="text-blue-600 font-semibold">Lesson rescheduled:</span> Jack Lee moved his lesson to Thursday — <span className="text-gray-500">Yesterday</span></li>
                            <li><span className="text-blue-600 font-semibold">New message:</span> Mason Keller: "Will we cover chapter 5 today?" — <span className="text-gray-500">Yesterday</span></li>
                            <li><span className="text-blue-600 font-semibold">New review:</span> Olivia Parker rated 5-stars — <span className="text-gray-500">2 days ago</span></li>
                        </ul>
                    </div>
                </main>

                {/* Sidebar */}
                <aside className="fixed custom-scrollbar overflow-y-auto top-0 right-0 bg-white rounded-xl shadow p-4 space-y-6 h-screen w-[22%]">
                    <div className="flex-col flex space-y-2">
                        <h2 className="mb-2 text-gray-700">Next Scheduled Lesson</h2>

                        <div className="bg-blue-900/5 p-3 rounded-lg text-center space-y-2">
                            <div className="flex justify-between items-center">
                                <p className="text-blue-500 text-xs">Today, 2:00 PM</p>
                                <div className="rounded-xl  bg-blue-500 text-white p-1" style={{ 'fontSize': '10px' }}>In 1 hour</div>
                            </div>
                            <div className="flex space-x-3 items-center text-black">
                                <img src={'/images/user-04.png'} className={'object-cover w-18 h-18 rounded-full'}/>
                                <div className="flex flex-col items-start justify-start">
                                    <h3 className="font-bold">Sophia Richards</h3>
                                    <p className="text-sm text-gray-700">Math - Calculus</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button className="bg-blue-600 text-white text-sm px-3 py-2 rounded-xl">View Details</button>
                                <button className="bg-white text-black text-sm px-3 py-2 rounded-xl">Reschedule</button>
                            </div>
                        </div>
                    </div>

                    {/* Shortcuts */}
                    <div className="flex flex-col">
                        <h2 className="mb-2 text-gray-700">Shortcuts</h2>
                        <div className="grid grid-cols-2 gap-2">

                            <div className="bg-gray-200 w-25 flex items-center justify-center space-x-3 p-2 rounded-xl">
                                <BsCalendar size={20} color="black" />
                                <p className="text-black text-sm">Schedule</p>
                            </div>

                            <div className="bg-gray-200  w-30 flex items-center justify-center space-x-3 p-2 rounded-xl">
                                <BsBook size={20} color="black" />
                                <p className="text-black text-sm">Homework</p>
                            </div>

                            <div className="bg-gray-200 w-30 flex items-center justify-center space-x-3 p-2 rounded-xl">
                                <BiSolidComment size={20} color="black" />
                                <p className="text-black text-sm">Messages</p>
                            </div>

                            <div className="bg-gray-200 w-25 flex items-center justify-center space-x-3 p-2 rounded-xl">
                                <HiPresentationChartBar size={20} color="black" />
                                <p className="text-black text-sm">Lessons</p>
                            </div>

                            <div className="bg-gray-200 w-25 flex items-center justify-center space-x-3 p-2 rounded-xl">
                                <BsBarChartLine size={20} color="black" />
                                <p className="text-black text-sm">Reports</p>
                            </div>
                        </div>

                    </div>

                    {/* Notifications */}
                    <div className="flex flex-col">
                        <div className="flex justify-between space-x-2 items-center">
                            <h2 className="text-gray-700">Recent Notifications</h2>
                            <p className="text-blue-700 font-thin text-xs">mark all as read</p>
                        </div>
                        <div className="grid grid-cols-1 gap-y-2 py-2 w-full ">
                            <div className="flex items-center justify-around rounded-2xl h-25 w-full bg-gray-100 border-blue-500 border-l">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-full p-1 flex items-center justify-center"><BsBook size={20} color="blue" /></div>
                                <div className="flex flex-col w-4/5">
                                    <p className="text-black text-sm text-bold">New Homework Submission</p>
                                    <p className="text-xs text-gray-500">Sophia ricahrds submitted a calculus problem.</p>
                                    <p className="text-xs text-gray-700">10:30 am</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-around rounded-2xl h-25 w-full bg-gray-100 border-blue-500 border-l">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-full p-1 flex items-center justify-center"><HiPresentationChartBar size={20} color="blue" /></div>
                                <div className="flex flex-col w-4/5">
                                    <p className="text-black text-sm text-bold">Lesson Rescheduled</p>
                                    <p className="text-xs text-gray-500">Jack Lee Moved his lesson to Thursday.</p>
                                    <p className="text-xs text-gray-700">yesterday 10:30 am</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-around rounded-2xl h-25 w-full bg-gray-100 border-blue-500 border-l">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-full p-1 flex items-center justify-center"><HiPresentationChartBar size={20} color="blue" /></div>
                                <div className="flex flex-col w-4/5">
                                    <p className="text-black text-sm text-bold">New Message</p>
                                    <p className="text-xs text-gray-500">Mason Keller: we will cover topic 5 today.</p>
                                    <p className="text-xs text-gray-700">yesterday 2:30 pm</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-blue-700 text-center font-thin text-xs">view all</p>
                    </div>

                </aside>
            </div>
        </div>
    );
}
