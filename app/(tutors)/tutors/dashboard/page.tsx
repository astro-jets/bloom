import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import MyCalendar from "@/components/calendar/calendar";
import PerformanceScoreCard from "@/components/charts/perfomanceScoreCard";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableOne from "@/components/table";
import { BsArrowUp, BsBellFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { HiPresentationChartBar } from "react-icons/hi";
import { lessonsToEvents } from "@/utils/lessonsToEvent";
import { fetchSubTopicsBySubject, fetchTopicsBySubject, fetchTutorSchedule } from "@/utils/routes";
import DashboardRightSideBar, { SideBarLesson } from "@/components/Layouts/DashboardRightSidebar";
import { WeeklySchedule } from "@/components/cards/weeklySchedule";
import { parseWeeklyEvents } from "@/utils/parseWeeklyEvetns";
import { redirect } from "next/navigation";
import { LessonDetailsModal } from "@/components/forms/LessonDetailsModal";


// types/lesson.ts
interface Lesson {
    id: string;
    lessonDate: string; // ISO date: "2025-08-06"
    startTime: string;  // "09:00:00"
    endTime?: string;   // optional
    Subject?: {
        subject_name: string;
        subject_id: string;
    };
    Tutor?: {
        id: string;
        name: string;
    };
    Student?: {
        id: string;
        name: string;
    };
}


export default async function Dashboard() {
    const session = await getServerSession(options);

    if (!session?.user) {
        redirect("/");
    }

    const userName = session.user.name ?? "";
    const userRole = session.user.role as "tutor";
    const userId = session.user.id;

    // Fetch Lessons
    const rawLessons = await fetchTutorSchedule(userId);
    const formattedEvents =
        rawLessons && rawLessons.length
            ? lessonsToEvents(rawLessons, session, userRole)
            : [];
    const weeklyEvents =
        rawLessons && rawLessons.length ?
            parseWeeklyEvents(rawLessons, userRole)
            : [];

    function getNextLesson(lessons: Lesson[]): Lesson & { startDateTime: Date } | null {
        const now = new Date();

        const upcomingLessons = lessons
            .map((lesson) => {
                const dateTimeStr = `${lesson.lessonDate}T${lesson.startTime}`;
                const startDateTime = new Date(dateTimeStr);
                return { ...lesson, startDateTime };
            })
            .filter((lesson) => lesson.startDateTime > now)
            .sort((a, b) => a.startDateTime.getTime() - b.startDateTime.getTime());

        return upcomingLessons[0] || null;
    }

    const nextLesson = getNextLesson(rawLessons);

    const topics = await fetchTopicsBySubject('1')
    const subtopics = await fetchSubTopicsBySubject('2')

    return (
        <DefaultLayout>
            <main className="h-full custom-scrollbar py-2 px-4 pb-10 md:overflow-y-auto w-full md:w-[60%] md:ml-[17.3%]">
                {/* Header */}
                <div className="mb-6 mt-16 md:mt-0 flex justify-between items-center w-full">
                    <div className="flex flex-col">
                        Good morning, {userName}!
                        <p className="text-sm text-gray-500">Tuesday, May 29, 2025</p>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <BsBellFill className="fill-gray-600" size={20} />
                        <img
                            src={"/images/user-04.png"}
                            className="object-cover w-12 h-12 rounded-full"
                            alt=""
                        />
                        <DropdownDefault />
                    </div>
                </div>

                {/* Top Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-[#333A48] p-4 rounded-xl h-40">
                        <div className="flex justify-between items-center w-full">
                            <h3 className="text-sm font-medium text-gray-600">Total Students</h3>
                            <span className="rounded-xl bg-[#f4F6F3] p-2">
                                <FaUserGraduate size={18} color="#5B57D0" />
                            </span>
                        </div>
                        <p className="text-[#2c2d39] text-3xl font-bold mt-4">24</p>
                        <p className="text-md items-center flex text-gray-500 mt-2">
                            <BsArrowUp color={"#111"} size={10} />
                            <span>12% vs last month</span>
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl h-40">
                        <div className="flex justify-between items-center w-full">
                            <h3 className="text-sm font-medium text-gray-600">Total Lessons</h3>
                            <span className="rounded-xl bg-[#f4F6F3] p-2">
                                <HiPresentationChartBar size={20} color="#5B57D0" />
                            </span>
                        </div>
                        <p className="text-[#2c2d39] text-3xl font-bold mt-4">152</p>
                        <p className="text-md items-center flex text-gray-500 mt-2">
                            <BsArrowUp color={"#111"} size={10} />
                            <span>8% vs last month</span>
                        </p>
                    </div>

                    <PerformanceScoreCard />
                </div>

                {/* Weekly Schedule */}
                {weeklyEvents && <WeeklySchedule events={weeklyEvents} />}

                {/* Table */}
                <div className="mb-6">
                    <TableOne />
                </div>

                {/* Calendar */}
                {formattedEvents && <MyCalendar events={formattedEvents} />}
            </main>
            {
                nextLesson &&
                <LessonDetailsModal
                    topics={topics}
                    subTopics={subtopics}
                    tutorid={userId}
                    lessonId={nextLesson.id}
                />
            }
            <DashboardRightSideBar lesson={nextLesson as SideBarLesson} />
        </DefaultLayout>
    );
}
