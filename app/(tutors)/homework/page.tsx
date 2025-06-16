"use client";

import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

type HomeworkStatus = "Pending" | "Submitted" | "Overdue";


type Homework = {
    title: string;
    subject: string;
    dueDate: string;
    status: HomeworkStatus;
};

const dummyHomeworks: Homework[] = [
    {
        title: "Algebra Worksheet",
        subject: "Mathematics",
        dueDate: "2025-06-20",
        status: "Pending",
    },
    {
        title: "Grammar Quiz",
        subject: "English",
        dueDate: "2025-06-18",
        status: "Submitted",
    },
    {
        title: "Chemistry Lab Report",
        subject: "Science",
        dueDate: "2025-06-22",
        status: "Overdue",
    },
    {
        title: "Algebra Worksheet",
        subject: "Mathematics",
        dueDate: "2025-06-20",
        status: "Pending",
    },
    {
        title: "Grammar Quiz",
        subject: "English",
        dueDate: "2025-06-18",
        status: "Submitted",
    },
    {
        title: "Chemistry Lab Report",
        subject: "Science",
        dueDate: "2025-06-22",
        status: "Overdue",
    },
    {
        title: "Algebra Worksheet",
        subject: "Mathematics",
        dueDate: "2025-06-20",
        status: "Pending",
    },
    {
        title: "Grammar Quiz",
        subject: "English",
        dueDate: "2025-06-18",
        status: "Submitted",
    },
    {
        title: "Chemistry Lab Report",
        subject: "Science",
        dueDate: "2025-06-22",
        status: "Overdue",
    },
    {
        title: "Algebra Worksheet",
        subject: "Mathematics",
        dueDate: "2025-06-20",
        status: "Pending",
    },
    {
        title: "Grammar Quiz",
        subject: "English",
        dueDate: "2025-06-18",
        status: "Submitted",
    },
    {
        title: "Chemistry Lab Report",
        subject: "Science",
        dueDate: "2025-06-22",
        status: "Overdue",
    },
    {
        title: "Algebra Worksheet",
        subject: "Mathematics",
        dueDate: "2025-06-20",
        status: "Pending",
    },
    {
        title: "Grammar Quiz",
        subject: "English",
        dueDate: "2025-06-18",
        status: "Submitted",
    },
    {
        title: "Chemistry Lab Report",
        subject: "Science",
        dueDate: "2025-06-22",
        status: "Overdue",
    },
];

const statusColors: Record<HomeworkStatus, string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Submitted: "bg-green-100 text-green-800",
    Overdue: "bg-red-100 text-red-800",
};

const Homeworks = () => {
    const [filter, setFilter] = useState("All");

    const filteredData =
        filter === "All"
            ? dummyHomeworks
            : dummyHomeworks.filter((hw) => hw.status === filter);

    return (
        <DefaultLayout>
            <main className="h-full custom-scrollbar py-2 px-4 overflow-y-auto w-[83%] ml-[17.3%]">
                <div className="mb-6 flex justify-between items-center w-full">
                    <div className="">
                        <h2 className="text-2xl font-bold text-[#5855D8]">Homework</h2>
                        <p className="text-gray-500 mt-1">
                            Track and manage all assigned homework for your students.
                        </p>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <BsBellFill className="fill-gray-600" size={20} />
                        <img src={'/images/user-04.png'} className={'object-cover w-12 h-12 rounded-full'} alt={''} />
                        <DropdownDefault />
                    </div>

                </div>
                <div className="p-6 w-full">


                    {/* Filter + Search */}
                    <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">Filter by:</label>
                            <select
                                className="text-sm rounded border-gray-300 focus:ring-[#5855D8] focus:border-[#5855D8]"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                <option>All</option>
                                <option>Pending</option>
                                <option>Submitted</option>
                                <option>Overdue</option>
                            </select>
                        </div>

                        <div className="relative w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Search by title..."
                                className="w-full rounded border-gray-300 pl-10 pr-3 py-2 text-sm focus:ring-[#5855D8] focus:border-[#5855D8]"
                            />
                            <FaSearch className="absolute left-3 top-2.5 text-gray-400" size={14} />
                        </div>
                    </div>

                    {/* Homework Table */}
                    <div className="overflow-auto bg-white rounded-xl shadow-md">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-[#5C56D3] text-white uppercase text-xs border-b">
                                <tr>
                                    <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Subject</th>
                                    <th className="px-4 py-3">Due Date</th>
                                    <th className="px-4 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((hw, idx) => (
                                    <tr
                                        key={idx}
                                        className="border-b hover:bg-gray-50 transition duration-150"
                                    >
                                        <td className="px-4 py-3 font-medium text-gray-900">{hw.title}</td>
                                        <td className="px-4 py-3">{hw.subject}</td>
                                        <td className="px-4 py-3">{hw.dueDate}</td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[hw.status]}`}
                                            >
                                                {hw.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                                {filteredData.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="text-center py-6 text-gray-400">
                                            No homework found for {filter} status.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </DefaultLayout>
    );
};

export default Homeworks;
