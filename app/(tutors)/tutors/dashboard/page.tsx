import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import MyCalendar from "@/components/calendar/calendar";
import PerformanceScoreCard from "@/components/charts/perfomanceScoreCard";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { BsArrowUp, BsBellFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { HiPresentationChartBar } from "react-icons/hi";
import { lessonsToEvents } from "@/utils/lessonsToEvent";
import { fetchSubTopicsBySubject, fetchTopicsBySubject, fetchTutorSchedule, fetchTutorsHomeworks } from "@/utils/routes";
import DashboardRightSideBar, { SideBarLesson } from "@/components/Layouts/DashboardRightSidebar";
import { WeeklySchedule } from "@/components/cards/weeklySchedule";
import { parseWeeklyEvents } from "@/utils/parseWeeklyEvetns";
import { redirect } from "next/navigation";
import { LessonDetailsModal } from "@/components/forms/LessonDetailsModal";
import { Submission } from "@/types/types";


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

type HomeworkStatus = "Pending" | "Submitted" | "Overdue" | "Graded";

type Homework = {
    id: string;
    student: string;
    subject: string;
    title: string;
    submitted: string | null;
    status: HomeworkStatus;
    grade?: string;
    fileUrl?: string;
};

const statusColors: Record<HomeworkStatus, string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Submitted: "bg-blue-100 text-blue-800",
    Overdue: "bg-red-100 text-red-800",
    Graded: "bg-green-100 text-green-800",
};

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



    function mapHomework(item: { submissions: Submission[]; dueDate: string; id: string; lesson: { student: { name: string; }; }; title: string; description: string; fileUrl: string; }): Homework {
        const submission = item.submissions?.[0];
        let status: HomeworkStatus = "Pending";

        if (submission) {
            if (submission.status === "Graded") status = "Graded";
            else status = "Submitted";
        } else {
            const due = new Date(item.dueDate);
            status = due < new Date() ? "Overdue" : "Pending";
        }

        return {
            id: item.id,
            student: item.lesson?.student?.name || "Unknown",
            subject: item.title,
            title: item.description,
            submitted: submission?.submissionDate || null,
            status,
            grade: submission?.grade,
            fileUrl: submission?.fileUrl || item.fileUrl,
        };
    }

    // Homework stuff and submissions
    const tutorsHomeworks = await fetchTutorsHomeworks(userId)

    const submissions: Homework[] = tutorsHomeworks.map(mapHomework)


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
                <div className="overflow-x-auto bg-white shadow rounded mb-20">
                    <h2 className="text-xl font-bold text-gray-800 px-4 py-2">
                        Recent Submissions
                    </h2>
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-50 text-sm text-gray-600">
                            <tr>
                                <th className="text-left px-6 py-3">Student</th>
                                <th className="text-left px-6 py-3">Subject</th>
                                <th className="text-left px-6 py-3">Assignment</th>
                                <th className="text-left px-6 py-3">Submitted</th>
                                <th className="text-left px-6 py-3">Status</th>
                                <th className="text-left px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-200">
                            {submissions.map((hw) => (
                                <tr key={hw.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">{hw.student}</td>
                                    <td className="px-6 py-4">{hw.subject}</td>
                                    <td className="px-6 py-4">{hw.title.split(' ', 8).map(w => (w + ' '))}</td>
                                    <td className="px-6 py-4">
                                        {hw.submitted
                                            ? new Date(hw.submitted).toLocaleDateString()
                                            : "Not submitted"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[hw.status]}`}
                                        >
                                            {hw.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {hw.fileUrl ? (
                                            <a
                                                href={hw.fileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                {hw.status === "Graded" ? "View Grade" : "Open"}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400">N/A</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
