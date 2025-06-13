// app/lessons/page.tsx or components/LessonsPage.tsx
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
type LessonStatus = "Upcoming" | "Completed";
type Lesson = {
    id: number;
    title: string;
    subject: string;
    student: string;
    date: string;
    time: string;
    status: LessonStatus;
};

const lessons: Lesson[] = [
    {
        id: 1,
        title: "Calculus Basics",
        student: "Sophia Richards",
        subject: "Math",
        date: "2025-06-14",
        time: "2:00 PM",
        status: "Upcoming",
    },
    {
        id: 2,
        title: "Atomic Structures",
        student: "Mason K.",
        subject: "Chemistry",
        date: "2025-06-12",
        time: "11:00 AM",
        status: "Completed",
    },
    {
        id: 3,
        title: "Civil War History",
        student: "Noah J.",
        subject: "History",
        date: "2025-06-11",
        time: "3:30 PM",
        status: "Completed",
    },
    {
        id: 4,
        title: "Introduction to Spanish",
        student: "Eva S.",
        subject: "Spanish",
        date: "2025-06-15",
        time: "10:00 AM",
        status: "Upcoming",
    },
];

const statusColors: Record<LessonStatus, string> = {
    Upcoming: "text-blue-600 bg-blue-100",
    Completed: "text-green-600 bg-green-100",
};

export default function LessonsPage() {
    return (
        <DefaultLayout>
            <main className="ml-[17.3%] w-full max-w-6xl mx-auto p-6">
                <h1 className="text-2xl font-semibold mb-4">Lessons</h1>

                {/* Filter Section */}
                <div className="flex flex-wrap justify-between items-center mb-6">
                    <div className="space-x-2">
                        <button className="px-4 py-1 text-sm rounded-full bg-purple-100 text-purple-700 font-medium">All</button>
                        <button className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Upcoming</button>
                        <button className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Completed</button>
                    </div>
                    <input
                        type="text"
                        placeholder="Search lessons..."
                        className="px-4 py-2 border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>

                {/* Lessons List */}
                <div className="bg-white rounded-xl shadow overflow-hidden divide-y divide-gray-100">
                    {lessons.map((lesson) => (
                        <div key={lesson.id} className="p-5 flex justify-between items-center hover:bg-gray-50 transition">
                            <div>
                                <h3 className="text-lg font-semibold">{lesson.title}</h3>
                                <p className="text-sm text-gray-500">
                                    {lesson.subject} · {lesson.date} · {lesson.time}
                                </p>
                                <p className="text-sm text-gray-400">with {lesson.student}</p>
                            </div>
                            <span
                                className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[lesson.status]}`}
                            >
                                {lesson.status}
                            </span>
                        </div>
                    ))}
                </div>
            </main>
        </DefaultLayout>
    );
}
