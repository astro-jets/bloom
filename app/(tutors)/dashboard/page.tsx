import MyCalendar from "@/components/calendar/calendar";
import PerformanceScoreCard from "@/components/charts/perfomanceScoreCard";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableOne from "@/components/table";
import { BiSolidComment } from "react-icons/bi";
import { BsBarChartLine, BsBook, BsCalendar, BsArrowUp, BsChevronLeft, BsChevronRight, BsBellFill } from "react-icons/bs";
import { FaUserGraduate, } from "react-icons/fa";
import { HiPresentationChartBar } from "react-icons/hi";
import { lessonsToEvents } from "@/utils/lessonsToEvent";
import { fetchLessons } from "@/utils/fetxhLessons";
import DashboardRightSideBar from "@/components/Layouts/DashboardRightSidebar";

export default async function Dashboard() {
    const rawLessons = await fetchLessons();
    const formattedEvents = rawLessons && rawLessons.length ? lessonsToEvents(rawLessons) : [];
    return (
        <DefaultLayout>

            {/* Main Content */}
            <main className="h-full custom-scrollbar py-2 px-4 pb-10 md:overflow-y-auto w-full md:w-[60%] md:ml-[17.3%]">
                <div className="mb-6 mt-16 md:mt-0 flex justify-between items-center w-full">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-gray-700">Good morning, Sarah!</h2>
                        <p className="text-sm text-gray-500">Tuesday, May 29, 2025</p>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <BsBellFill className="fill-gray-600" size={20} />
                        <img src={'/images/user-04.png'} className={'object-cover w-12 h-12 rounded-full'} alt={''} />
                        <DropdownDefault />
                    </div>

                </div>

                {/* Top Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-[#333A48] p-4 rounded-xl h-40">
                        <div className="flex justify-between items-center w-full">
                            <h3 className="text-sm font-medium text-gray-600">Total Students</h3>
                            <span className="rounded-xl bg-[#f4F6F3] p-2">
                                <FaUserGraduate size={18} color="#5B57D0" /></span>
                        </div>
                        <p className="text-[#2c2d39] text-3xl font-bold mt-4">24</p>
                        <p className="text-md items-center flex text-gray-500 mt-2">
                            <BsArrowUp color={'#111'} size={10} />
                            <span>12% vs last month</span>

                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl h-40">
                        <div className="flex justify-between items-center w-full">
                            <h3 className="text-sm font-medium text-gray-600">Total Lessons</h3>
                            <span className="rounded-xl bg-[#f4F6F3] p-2">
                                <HiPresentationChartBar size={20} color="#5B57D0" /></span>
                        </div>
                        <p className="text-[#2c2d39] text-3xl font-bold mt-4">152</p>
                        <p className="text-md items-center flex text-gray-500 mt-2">
                            <BsArrowUp color={'#111'} size={10} />
                            <span>8% vs last month</span>

                        </p>
                    </div>

                    <PerformanceScoreCard />

                </div>


                <div className="w-full mb-6 rounded-sm overflow-x-auto bg-white shadow-default md:h-80">
                    <div className="flex justify-between px-4">
                        <h3 className="text-xl font- my-2 text-[#2c2d39] px-2">This Weeks Schedule</h3>

                        <div className="flex space-x-3 items-center ">
                            <span className="p-1 border border-gray-300 rounded shadow">
                                <BsChevronLeft className="fill-gray-700" size={20} />
                            </span>
                            <span className="p-1 border border-gray-300 rounded shadow">
                                <BsChevronRight className="fill-gray-700" size={20} />
                            </span>
                        </div>
                    </div>
                    <table className="border-0 min-w-full table-auto">
                        <thead>
                            <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-[#2c2d39]">
                                <th className="flex h-10 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                                    <span className="hidden lg:block"> Monday </span>
                                    <span className="block lg:hidden"> Mon </span>
                                </th>
                                <th className="flex h-10 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                                    <span className="hidden lg:block"> Tuesday </span>
                                    <span className="block lg:hidden"> Tue </span>
                                </th>
                                <th className="flex h-10 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                                    <span className="hidden lg:block"> Wednesday </span>
                                    <span className="block lg:hidden"> Wed </span>
                                </th>
                                <th className="flex h-10 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                                    <span className="hidden lg:block"> Thursday </span>
                                    <span className="block lg:hidden"> Thur </span>
                                </th>
                                <th className="flex h-10 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                                    <span className="hidden lg:block"> Friday </span>
                                    <span className="block lg:hidden"> Fri </span>
                                </th>
                                <th className="flex h-10 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                                    <span className="hidden lg:block"> Saturday </span>
                                    <span className="block lg:hidden"> Sat </span>
                                </th>
                                <th className="flex h-10 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                                    <span className="hidden lg:block"> Sunday </span>
                                    <span className="block lg:hidden"> Sun </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Line 1 --> */}
                            <tr className="grid grid-cols-7 min-h-16 h-full">
                                <td className="flex flex-col space-y-1 relative cursor-pointer ">
                                    <span className="font-medium text-[#2c2d39] text-center">
                                        27
                                    </span>
                                </td>

                                <td className="flex flex-col space-y-1 relative cursor-pointer ">
                                    <span className="font-medium text-[#2c2d39] text-center">
                                        28
                                    </span>
                                    <div className="w-full cursor-pointer px-1 h-16 overflow-hidden">
                                        <div className="rounded-lg bg-gray-100  z-99 mb-1 flex w-full flex-col  border-primary bg-gray px-2 py-1 text-left  group-hover:visible group-hover:opacity-100  visible opacity-100">
                                            <span className="event-name text-sm font-semibold text-[#2c2d39]">
                                                Sophia R
                                            </span>
                                            <span className="time text-sm font-medium text-[#2c2d39]">
                                                Physics
                                            </span>
                                            <span className="time text-xs font-small text-gray-500">
                                                9:00 AM
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full cursor-pointer px-1 h-16 overflow-hidden">
                                        <div className="rounded-lg bg-gray-100  z-99 mb-1 flex w-full flex-col  border-primary bg-gray px-2 py-1 text-left  group-hover:visible group-hover:opacity-100  visible opacity-100">
                                            <span className="event-name text-sm font-semibold text-[#2c2d39]">
                                                Olivia P
                                            </span>
                                            <span className="time text-sm font-medium text-[#2c2d39]">
                                                Math
                                            </span>
                                            <span className="time text-xs font-small text-gray-500">
                                                1:00 PM
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full cursor-pointer px-1 h-16 overflow-hidden">
                                        <div className="rounded-lg bg-gray-100  z-99 mb-1 flex w-full flex-col  border-primary bg-gray px-2 py-1 text-left  group-hover:visible group-hover:opacity-100  visible opacity-100">
                                            <span className="event-name text-sm font-semibold text-[#2c2d39]">
                                                Mason K
                                            </span>
                                            <span className="time text-sm font-medium text-[#2c2d39]">
                                                Chemistry
                                            </span>
                                            <span className="time text-xs font-small text-gray-500">
                                                3:30 PM
                                            </span>
                                        </div>
                                    </div>
                                </td>

                                <td className="flex flex-col space-y-1 relative cursor-pointer ">
                                    <span className="font-bold text-[#5C56D3] text-center">
                                        29
                                    </span>
                                    <div className="w-full cursor-pointer px-1 h-16 overflow-hidden">
                                        <div className="event bg-gray-100 border-[#5C56D3] border-l-2   z-99 mb-1 flex w-full flex-col rounded-lg  border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100  md:visible md:w-[100%] md:opacity-100">
                                            <span className="event-name text-sm font-semibold text-[#2c2d39]">
                                                Emma W
                                            </span>
                                            <span className="time text-sm font-medium text-[#2c2d39]">
                                                Math
                                            </span>
                                            <span className="time text-xs font-small text-gray-500">
                                                3:30 PM
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full cursor-pointer px-1 h-16 overflow-hidden">
                                        <div className="rounded-lg bg-gray-100 border-[#5C56D3] border-l-2  z-99 mb-1 flex w-full flex-col  border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100  md:visible md:w-[100%] md:opacity-100">
                                            <span className="event-name text-sm font-semibold text-[#2c2d39]">
                                                Alex T
                                            </span>
                                            <span className="time text-sm font-medium text-[#2c2d39]">
                                                Science
                                            </span>
                                            <span className="time text-xs font-small text-gray-500">
                                                5:00 PM
                                            </span>
                                        </div>
                                    </div>
                                </td>

                                <td className="flex flex-col space-y-1 relative cursor-pointer ">
                                    <span className="font-medium text-[#2c2d39] text-center">
                                        30
                                    </span>
                                    <div className="w-full cursor-pointer px-1 h-16 overflow-hidden">
                                        <div className="rounded-lg bg-gray-100  z-99 mb-1 flex w-full flex-col  border-primary bg-gray px-2 py-1 text-left  group-hover:visible group-hover:opacity-100  visible opacity-100">
                                            <span className="event-name text-sm font-semibold text-[#2c2d39]">
                                                Eva S
                                            </span>
                                            <span className="time text-sm font-medium text-[#2c2d39]">
                                                Spanish
                                            </span>
                                            <span className="time text-xs font-small text-gray-500">
                                                9:30 AM
                                            </span>
                                        </div>
                                    </div>
                                </td>

                                <td className="flex flex-col space-y-1 relative cursor-pointer ">
                                    <span className="font-medium text-[#2c2d39] text-center">
                                        31
                                    </span>
                                    <div className="w-full cursor-pointer px-1 h-16 overflow-hidden">
                                        <div className="rounded-lg bg-gray-100  z-99 mb-1 flex w-full flex-col  border-primary bg-gray px-2 py-1 text-left  group-hover:visible group-hover:opacity-100  visible opacity-100">
                                            <span className="event-name text-sm font-semibold text-[#2c2d39]">
                                                Noah J
                                            </span>
                                            <span className="time text-sm font-medium text-[#2c2d39]">
                                                History
                                            </span>
                                            <span className="time text-xs font-small text-gray-500">
                                                3:30 PM
                                            </span>
                                        </div>
                                    </div>
                                </td>

                                <td className="flex flex-col space-y-1 relative cursor-pointer ">
                                    <span className="font-medium text-[#2c2d39] text-center">
                                        1
                                    </span>
                                    <div className="w-full cursor-pointer px-1 h-16 overflow-hidden">
                                        <div className="event bg-gray-100    z-99 mb-1 flex w-full flex-col rounded-lg  border-primary bg-gray px-2 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100  md:visible md:w-[100%] md:opacity-100">
                                            <span className="event-name text-sm font-semibold text-[#2c2d39]">
                                                Jack L
                                            </span>
                                            <span className="time text-sm font-medium text-[#2c2d39]">
                                                English
                                            </span>
                                            <span className="time text-xs font-small text-gray-500">
                                                9:30 AM
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full cursor-pointer px-1 h-16 overflow-hidden">
                                        <div className="rounded-lg bg-gray-100  z-99 mb-1 flex w-full flex-col  border-primary bg-gray px-2 py-1 text-left  group-hover:visible group-hover:opacity-100  visible opacity-100">
                                            <span className="event-name text-sm font-semibold text-[#2c2d39]">
                                                Emma W
                                            </span>
                                            <span className="time text-sm font-medium text-[#2c2d39]">
                                                Math
                                            </span>
                                            <span className="time text-xs font-small text-gray-500">
                                                3:30 PM
                                            </span>
                                        </div>
                                    </div>
                                </td>

                                <td className="flex flex-col space-y-1 relative cursor-pointer ">
                                    <span className="font-medium text-[#2c2d39] text-center">
                                        2
                                    </span>
                                </td>


                            </tr>
                            {/* <!-- Line 1 --> */}
                            {/* <!-- Line 2 --> */}
                        </tbody>
                    </table>
                </div>
                <div className="mb-6">
                    <TableOne />
                </div>
                {formattedEvents && <MyCalendar events={formattedEvents} />}
            </main>

            <DashboardRightSideBar />
        </DefaultLayout>
    );
}
