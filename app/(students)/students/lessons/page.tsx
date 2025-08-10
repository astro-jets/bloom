// app/lessons/page.tsx or components/LessonsPage.tsx
import MyCalendar from "@/components/calendar/calendar";
import LearningProgress from "@/components/cards/learningProgress";
import QuickActions from "@/components/cards/quickActions";
import StudentsLayout from "@/components/Layouts/StudentsLayout";
import { fetchStudentSchedule } from "@/utils/routes";
import { lessonsToEvents } from "@/utils/lessonsToEvent";
import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function LessonsPage() {
    // ✅ Get the logged-in session (server-side)
    const session = await getServerSession(options);

    // ✅ If no session, send user to /signin immediately
    if (!session) {
        redirect("/");
    }
    const userRole = session?.user?.role;
    const rawLessons = await fetchStudentSchedule(session.user.id);
    const formattedEvents = rawLessons && rawLessons.length ? lessonsToEvents(rawLessons, session, userRole as 'student') : [];
    return (
        <StudentsLayout>
            <div className="flex flex-col md:flex-row space-y-6 justify-between">
                <div className="w-full md:w-[73%] flex flex-col bg-white rounded shadow">
                    <h1 className="text-2xl font-semibold mb-4 px-4">Schedule</h1>
                    {formattedEvents && <MyCalendar events={formattedEvents} />}
                </div>
                <div className="w-full flex flex-col md:w-[25%] pb-2 space-y-4">
                    <LearningProgress />
                    <QuickActions />
                </div>
            </div>
        </StudentsLayout>
    );
}
