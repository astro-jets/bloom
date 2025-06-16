// app/lessons/page.tsx or components/LessonsPage.tsx
import MyCalendar from "@/components/calendar/calendar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";


export default function LessonsPage() {
    return (
        <DefaultLayout>
            <main className="ml-[17.3%] w-full max-w-6xl mx-auto ">
                <div className="p-4 w-full flex justify-between">
                    <h1 className="text-2xl font-semibold mb-4">Lessons</h1>
                    {/* Filter Section */}
                    <div className="flex flex-wrap gap-3 justify-between items-center mb-6">
                        <div className="flex gap-2">
                            <select className="rounded px-3 py-2 w-40 bg-white text-sm shadow-sm">
                                <option>All Tutors</option>
                            </select>
                            <select className="rounded px-3 py-2 w-40 bg-white text-sm shadow-sm">
                                <option>All Students</option>
                            </select>
                        </div>
                    </div>
                </div>
                <MyCalendar />
            </main>
        </DefaultLayout>
    );
}
