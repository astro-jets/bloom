import { WeeklySchedule } from "@/components/cards/weeklySchedule";
import StudentsLayout from "@/components/Layouts/StudentsLayout";
import { fetchLessons } from "@/utils/fetxhLessons";
import { parseWeeklyEvents } from "@/utils/parseWeeklyEvetns";
import { BiSolidComment } from "react-icons/bi";
import { BsRocketTakeoffFill, BsClock, BsFire, BsBook, BsStarFill } from "react-icons/bs";

export default async function Dashboard() {
    const rawLessons = await fetchLessons();
    const weeklyEvents = rawLessons && rawLessons.length ? parseWeeklyEvents(rawLessons) : [];

    console.log("Weekly Events => ", weeklyEvents)
    return (
        <StudentsLayout>
            <div className="w-full space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Explore Library Banner */}
                    <div className="h-50 relative overflow-hidden bg-[#201f1f] text-white p-6 rounded-xl col-span-2 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Visit the library to explore material curated for you!</h2>
                            <p className="text-sm mb-3">Your learning adventure continues</p>
                            <button className="bg-white text-black font-semibold px-4 py-2 rounded-md">Explore</button>
                        </div>
                        <div className="bg-[#474444b2] absolute -bottom-5 -right-5  flex items-center justify-center rounded-full h-40 w-40">
                            <BsRocketTakeoffFill size={48} className=" fill-white" />
                        </div>
                    </div>

                    {/* Monthly Progress */}
                    <div className="bg-white flex flex-col space-y-6 md:space-y-2 rounded-xl shadow p-4 relative">
                        <div className="">
                            <h3 className="font-semibold text-black">Monthly Progress</h3>
                            <p className="text-gray-600 text-sm">Keep it up!</p>
                        </div>
                        <p className="text-5xl font-semibold md:mt-2 flex md:items-center justify-center space-x-2">
                            <span>12</span> <span className="text-base font-medium">Topics</span>
                        </p>
                        <div className="w-11/12 absolute bottom-4  flex justify-between items-center ">
                            <button className="mt-2 text-sm p-2 bg-gray-100 shadow rounded-full"><BsFire size={20} /></button>
                            <button className="mt-2 text-sm p-2 bg-gray-100 shadow rounded-xl font-medium">View Progress</button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mb-6">
                    {/* Next Lesson */}
                    <div className="bg-white rounded-xl space-y-2 shadow p-4">
                        <div className="flex justify-between">
                            <h3 className="font-medium mb-1">Next Lesson</h3>
                            <span className="bg-gray-100 font-semibold flex items-center justify-center text-xs px-2 py-0.5 rounded-full ml-auto">Today</span>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold">Math</h2>
                            <p className="text-sm text-gray-500">Fractions & Decimals</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-sm font-bold">
                            <BsClock size={16} />
                            <span>4:00 PM - 5:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <img
                                src="/images/user-04.png"
                                alt="Ms. Johnson"
                                className="w-8 h-8 rounded-full border"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm">Ms. Johnson</span>
                                <span className="text-xs text-gray-500">Math Teacher</span>
                            </div>
                        </div>
                        <button className="mt-4 bg-black text-white cursor-pointer w-full py-2 rounded-md font-semibold">
                            Join Lesson
                        </button>
                    </div>

                    {/* Homework Due */}
                    <div className="bg-white rounded-xl space-y-4 shadow p-4">
                        <div className="flex justify-between">
                            <h3 className="font-medium mb-1">Homework Due</h3>
                            <span className="bg-gray-100 font-bold text-lg flex items-center justify-center  p-3 h-8 w-8 rounded-full ml-auto">3</span>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <div className="rounded-lg flex p-3 justify-between items-center bg-gray-100 shadow">
                                <p>Science Project</p>
                                <p>Tommorow</p>
                            </div>
                            <div className="rounded-lg flex p-3 justify-between items-center bg-gray-100 shadow">
                                <p>Book Report</p>
                                <p>Firday</p>
                            </div>
                            <div className="rounded-lg flex p-3 justify-between items-center bg-gray-100 shadow">
                                <p>Math Problems</p>
                                <p>Next Monday</p>
                            </div>
                        </div>
                        <button className="mt-4 bg-white border shadow text-black cursor-pointer w-full py-2 rounded-md font-semibold">
                            View All
                        </button>
                    </div>
                    {/* Performance */}
                    <div className="bg-white rounded-xl shadow p-4">
                        <h3 className="text-gray-600 font-medium mb-2">Performance</h3>
                        <div className="flex flex-col items-center justify-center h-40">
                            <div className="relative w-40 h-40">
                                <svg className="absolute w-full h-full text-gray-500" viewBox="0 0 36 36">
                                    <path
                                        className="text-gray-200 stroke-current"
                                        strokeWidth="2"
                                        fill="none"
                                        d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                        className="stroke-current text-slate-900"
                                        strokeDasharray="85, 100"
                                        strokeWidth="2"
                                        fill="none"
                                        d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center font-bold text-lg">
                                    85%
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Great progress!</p>
                        </div>
                    </div>
                    {/* Weekly Schedule */}
                    <div className="md:col-span-2 ">
                        {weeklyEvents && <WeeklySchedule events={weeklyEvents} />}
                    </div>
                    {/* Recent Updates */}
                    <div className="bg-white rounded-xl shadow p-4 h-full">
                        <h3 className="text-gray-600 font-medium mb-2">Recent Updates</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 flex items-center justify-center rounded-full p-2 bg-gray-200">
                                    <BsBook size={20} className="" />
                                </div>
                                <div className="flex flex-col">
                                    <span>New Science Homework </span>
                                    <span className="text-gray-400 text-xs">1 hour ago</span>

                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 flex items-center justify-center rounded-full p-2 bg-gray-200">
                                    <BsStarFill size={20} className="" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Physics Homework Graded </span>
                                    <span className="text-gray-400 text-xs">1 hour ago</span>

                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 flex items-center justify-center rounded-full p-2 bg-gray-200">
                                    <BiSolidComment size={20} className="" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Message from tutor </span>
                                    <span className="text-gray-400 text-xs">1 hour ago</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mb-6"></div>
                </div>
            </div>

        </StudentsLayout>
    );
}
