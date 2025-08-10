"use client";

import { BsBook } from "react-icons/bs";
import { HiPresentationChartBar } from "react-icons/hi";
import { useLessonModalStore } from "@/stores/useLessonModalSotre";
import { ReminderCard } from "../cards/reminderCard";
import moment from "moment";

interface Subject {
    subject_name: string;
}

interface Student {
    name: string;
}

export interface SidbarLesson {
    lessonDate: string;
    startTime: string;
    Subject: Subject;
    student?: Student;
}

interface DashboardRightSideBarProps {
    lesson: SidbarLesson;
}

export default function DashboardRightSideBar({ lesson }: DashboardRightSideBarProps) {
    const openModal = useLessonModalStore((state) => state.openModal);

    // Combine lesson date and start time
    const lessonStart = lesson.lessonDate
        ? moment(`${lesson.lessonDate}T${lesson.startTime}`)
        : moment(Date.now());

    const now = moment();
    const minutesToLesson = lessonStart.diff(now, "minutes");

    // Check if lesson is within 15 mins and not more than 1hr past
    const canJoin = minutesToLesson <= 15 && minutesToLesson >= -60;

    return (
        <aside className="hidden md:block fixed custom-scrollbar overflow-y-auto top-0 right-0 bg-white rounded-xl shadow p-4 space-y-6 h-screen w-[23%]">
            {/* Next Scheduled SidbarLesson */}
            <div className="flex-col flex space-y-2">
                <h2 className="mb-2 text-gray-700 capitalize">NEXT SCHEDULED LESSON</h2>

                <div className="bg-blue-900/5 p-3 rounded-lg text-center space-y-2">
                    <div className="flex justify-between items-center">
                        <p className="text-[#5C56D3] text-md font-semibold">
                            {lesson.startTime}
                        </p>
                        <div
                            className="rounded-xl bg-[#5C56D3] text-white p-1 text-[10px]"
                        >
                            In{" "}
                            {minutesToLesson < 60
                                ? `${minutesToLesson} min`
                                : `${Math.floor(minutesToLesson / 60)} hours`}
                        </div>
                    </div>

                    <div className="flex space-x-3 items-center text-[#2c2d39]">
                        <img
                            src="/images/user-04.png"
                            className="object-cover w-12 h-12 rounded-full"
                            alt="Student Avatar"
                        />
                        <div className="flex flex-col items-start">
                            <h3 className="font-bold">{lesson.student?.name ?? "Unknown Student"}</h3>
                            <p className="text-sm text-gray-700">{lesson.Subject.subject_name}</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            className="bg-[#5855D8] text-white text-sm px-4 py-2 rounded-sm shadow cursor-pointer"
                            onClick={openModal}
                        >
                            {canJoin ? "Join SidbarLesson" : "View Details"}
                        </button>
                        <button className="bg-white text-[#2c2d39] text-sm px-4 py-2 rounded-sm shadow">
                            Reschedule
                        </button>
                    </div>
                </div>
            </div>

            {/* Reminders */}
            <ReminderCard />

            {/* Notifications */}
            <div className="flex flex-col">
                <div className="flex justify-between items-center">
                    <h2 className="text-gray-700">RECENT NOTIFICATIONS</h2>
                    <p className="text-[#5C56D3] font-thin text-xs">mark all as read</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 py-2 w-full">
                    <NotificationItem
                        icon={<BsBook size={20} color="blue" />}
                        title="New Homework Submission"
                        description="Sophia Richards submitted a calculus problem."
                        time="10:30 am"
                    />
                    <NotificationItem
                        icon={<HiPresentationChartBar size={20} color="blue" />}
                        title="SidbarLesson Rescheduled"
                        description="Jack Lee moved his lesson to Thursday."
                        time="yesterday 10:30 am"
                    />
                    <NotificationItem
                        icon={<HiPresentationChartBar size={20} color="blue" />}
                        title="New Message"
                        description="Mason Keller: we will cover topic 5 today."
                        time="yesterday 2:30 pm"
                    />
                </div>

                <p className="text-[#5C56D3] text-center font-thin text-xs">view all</p>
            </div>
        </aside>
    );
}

interface NotificationItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    time: string;
}

function NotificationItem({ icon, title, description, time }: NotificationItemProps) {
    return (
        <div className="flex items-center justify-around rounded-2xl h-25 w-full bg-gray-100 border-l border-[#5C56D3]">
            <div className="w-10 h-10 bg-[#5C56D3]/10 rounded-full p-1 flex items-center justify-center">
                {icon}
            </div>
            <div className="flex flex-col w-4/5">
                <p className="text-[#2c2d39] text-sm font-bold">{title}</p>
                <p className="text-xs text-gray-500">{description}</p>
                <p className="text-xs text-gray-700">{time}</p>
            </div>
        </div>
    );
}
