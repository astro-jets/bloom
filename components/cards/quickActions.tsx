'use client'

import { BiPlus, BiSync } from "react-icons/bi";
import { PiDownload } from "react-icons/pi";

export default function QuickActions() {
    return (
        <div className="w-full bg-white p-4 rounded-xl shadow space-y-2">
            <h3 className="text-lg text-gray-900 font-semibold">Quick Actions</h3>

            <div className="flex flex-col space-y-4">
                <div className="rounded-lg shadow bg-slate-900 text-center text-white p-2 flex space-x-3 justify-center">
                    <BiPlus size={20} className="fill-white" />
                    <span>Schedule New Lesson</span>
                </div>
                <div className="rounded-lg bg-white border border-gray-300 shadow text-center text-black p-2 flex space-x-3 justify-center">
                    <PiDownload size={20} className="fill-black" />
                    <span>Export Schedule</span>
                </div>
                <div className="rounded-lg bg-white border border-gray-300 shadow text-center text-black p-2 flex space-x-3 justify-center">
                    <BiSync size={20} className="fill-black" />
                    <span>Sync with Calendar</span>
                </div>
            </div>

        </div>
    );
}
