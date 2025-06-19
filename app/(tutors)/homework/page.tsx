"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { FaFilter } from "react-icons/fa";

type HomeworkStatus = "Pending" | "Submitted" | "Overdue";

type Homework = {
    student: string;
    subject: string;
    title: string;
    submitted: string;
    status: HomeworkStatus;
};

const dummyHomeworks: Homework[] = [
    {
        student: "Emma Wilson",
        subject: "Mathematics",
        title: "Algebra Equations",
        submitted: "2025-05-28",
        status: "Pending",
    },
    {
        student: "James Brown",
        subject: "Physics",
        title: "Newton's Laws",
        submitted: "2025-05-27",
        status: "Submitted",
    },
    {
        student: "Sophia Martinez",
        subject: "English",
        title: "Essay on Shakespeare",
        submitted: "2025-05-26",
        status: "Pending",
    },
    {
        student: "Lucas Johnson",
        subject: "Chemistry",
        title: "Periodic Table Quiz",
        submitted: "2025-05-25",
        status: "Submitted",
    },
    {
        student: "Olivia Taylor",
        subject: "Biology",
        title: "Cell Structure Report",
        submitted: "2025-05-24",
        status: "Overdue",
    },
];

const statusColors: Record<HomeworkStatus, string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Submitted: "bg-green-100 text-green-800",
    Overdue: "bg-red-100 text-red-800",
};

const Homeworks = () => {
    return (
        <DefaultLayout>
            <main className="h-full custom-scrollbar py-6 px-8 overflow-y-auto w-[83%] ml-[17.3%]">
                <div className="mb-6 flex justify-between items-center w-full">
                    <div className="">
                        <h2 className="text-xl font-bold text-[#5855D8]">Homework</h2>
                        <p className="text-gray-500 mt-1">
                            Track and manage all assigned homework for your students.
                        </p>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <span className="bg-white w-25 p-2 text-black rounded shadow space-x-2 flex items-center justify-center">
                            <FaFilter size={20} className={'fill-gray-900 text-sm'} />
                            <p>Filter</p>
                        </span>
                        <span className="p-2 text-white bg-gray-800 rounded shadow">+ Assign Homework</span>
                    </div>

                </div>
                {/* Top Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white shadow rounded p-4">
                        <h3 className="text-gray-500 text-sm">Total Submissions</h3>
                        <p className="text-xl font-semibold">28</p>
                        <p className="text-green-500 text-xs mt-1">+4 from last week</p>
                    </div>
                    <div className="bg-white shadow rounded p-4">
                        <h3 className="text-gray-500 text-sm">Pending Review</h3>
                        <p className="text-xl font-semibold">12</p>
                        <p className="text-yellow-500 text-xs mt-1">Needs your attention</p>
                    </div>
                    <div className="bg-white shadow rounded p-4">
                        <h3 className="text-gray-500 text-sm">Average Grade</h3>
                        <p className="text-xl font-semibold">87%</p>
                        <p className="text-green-500 text-xs mt-1">+2% from last month</p>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white shadow rounded">
                    <h2 className="text-xl font-bold text-gary-800 px-4 py-2">Recent Submissions</h2>
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
                            {dummyHomeworks.map((hw, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">{hw.student}</td>
                                    <td className="px-6 py-4">{hw.subject}</td>
                                    <td className="px-6 py-4">{hw.title}</td>
                                    <td className="px-6 py-4">{new Date(hw.submitted).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[hw.status]}`}
                                        >
                                            {hw.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-gray-900 cursor-pointer">
                                            {hw.status === "Submitted" ? "View" : "Review"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr className="p-6!">
                                <td className="px-6 py-4">Showing 5 of 28 submissions</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="pr-12" >
                                    {/* Pagination */}
                                    <div className="flex justify-end items-center space-x-2">
                                        <button className="px-3 py-1 rounded shadow border border-[#ccc] text-gray-900 flex items-center">
                                            Previous
                                        </button>
                                        <button className="px-3 py-1 rounded shadow text-gray-50 bg-gray-900 flex items-center">
                                            Next
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>
        </DefaultLayout>
    );
};

export default Homeworks;
