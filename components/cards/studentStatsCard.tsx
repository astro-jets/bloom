'use client';

import { Student } from '@/types/types';
import { BsCalendar2 } from 'react-icons/bs';
import { FaBookOpen, FaClock } from 'react-icons/fa';
import moment from 'moment';

export default function StudentStatsCard({ student }: { student: Student }) {

    const totalLessons = student.lessons?.length || 0;

    // Count how many lessons have status "Completed"
    const completedLessons = student.lessons?.filter(
        (lesson) => lesson.status.toLowerCase() === 'completed'
    ).length || 0;

    // Calculate attendance rate
    const attendanceRate = totalLessons > 0
        ? Math.round((completedLessons / totalLessons) * 100)
        : 0;

    // Find the most recent lesson
    const sortedLessons = [...(student.lessons || [])].sort((a, b) =>
        new Date(b.lessonDate).getTime() - new Date(a.lessonDate).getTime()
    );

    const lastSession = student.lessons?.[student.lessons.length - 1]?.lessonDate;
    const lastSessionDate = lastSession ? moment(lastSession).format('MMMM D, YYYY') : 'N/A';

    return (
        <div className="w-full bg-white p-4 h-60 overflow-hidden rounded-xl shadow space-y-3 text-sm text-gray-700">
            <h3 className="text-xl font-semibold text-gray-900">Student Stats</h3>

            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span>Attendance Rate</span>
                    <span className="font-bold text-xl">{attendanceRate}%</span>
                </div>
                <div className="p-3 rounded-full bg-purple-100 text-purple-700">
                    <BsCalendar2 size={20} />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span>Total Lessons</span>
                    <span className="font-bold text-xl">{totalLessons}</span>
                </div>
                <div className="p-3 rounded-full bg-purple-100 text-purple-700">
                    <FaBookOpen size={20} />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span>Last Session</span>
                    <span className="font-bold text-lg">{lastSessionDate}</span>
                </div>
                <div className="p-3 rounded-full bg-purple-100 text-purple-700">
                    <FaClock size={20} />
                </div>
            </div>
        </div>
    );
}
