'use client'

import { BsCalendar2 } from 'react-icons/bs';
import { FaBookOpen, FaClock } from 'react-icons/fa';

export default function StudentStatsCard() {
    return (
        <div className="w-full bg-white p-4 h-60 overflow-hidden rounded-xl shadow space-y-3 text-sm text-gray-700">
            <h3 className="text-xl font-semibold text-gray-900">Student Stats</h3>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span>Attendance Rate</span>
                    <span className="font-bold text-xl">94%</span>
                </div>
                <div className="p-3 rounded-full bg-purple-100 text-purple-700">
                    <BsCalendar2 size={20} />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span>Total Lessons</span>
                    <span className="font-bold text-xl">18</span>
                </div>
                <div className="p-3 rounded-full bg-purple-100 text-purple-700">
                    <FaBookOpen size={20} />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span>Last Session</span>
                    <span className="font-bold text-lg">May 10, 2024</span>
                </div>
                <div className="p-3 rounded-full bg-purple-100 text-purple-700">
                    <FaClock size={20} />
                </div>
            </div>
        </div>
    );
}
