// app/lessons/page.tsx or components/LessonsPage.tsx
import MyCalendar from "@/components/calendar/calendar";
import LearningProgress from "@/components/cards/learningProgress";
import QuickActions from "@/components/cards/quickActions";
import StudentsLayout from "@/components/Layouts/StudentsLayout";
import { fetchLessons } from "@/utils/fetxhLessons";
import { lessonsToEvents } from "@/utils/lessonsToEvent";
import React from "react";

export default async function LessonsPage() {
    const rawLessons = await fetchLessons();
    const formattedEvents = rawLessons && rawLessons.length ? lessonsToEvents(rawLessons) : [];
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
