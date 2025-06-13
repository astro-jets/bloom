import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import { BsBellFill, BsEye } from "react-icons/bs";

const students = [
    {
        id: 1,
        name: "Olivia P",
        subject: "Mathematics",
        progress: 75,
        lastLesson: "May 28",
        avatar: "https://i.pravatar.cc/100?u=olivia",
    },
    {
        id: 2,
        name: "Mason K",
        subject: "Chemistry",
        progress: 42,
        lastLesson: "May 27",
        avatar: "https://i.pravatar.cc/100?u=mason",
    },
    {
        id: 3,
        name: "Eva S",
        subject: "Spanish",
        progress: 85,
        lastLesson: "May 30",
        avatar: "https://i.pravatar.cc/100?u=eva",
    },
];

export default function StudentManagementTable() {
    return (
        <DefaultLayout>
            <main className="h-full custom-scrollbar py-2 px-4 overflow-y-auto w-[83%] ml-[17.3%]">
                <div className="mb-6 flex justify-between items-center w-full">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-[#5855D8]">Student Management</h1>
                        <p className="text-gray-500">View and manage student data in table view</p>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <BsBellFill className="fill-gray-600" size={20} />
                        <img src={'/images/user-04.png'} className={'object-cover w-12 h-12 rounded-full'} alt={''} />
                        <DropdownDefault />
                    </div>

                </div>

                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full bg-white text-sm">
                        <thead className="bg-[#5C56D3] text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Student</th>
                                <th className="py-3 px-4 text-left">Subject</th>
                                <th className="py-3 px-4 text-left">Progress</th>
                                <th className="py-3 px-4 text-left">Last Lesson</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr
                                    key={student.id}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="py-4 px-4 flex items-center gap-3">
                                        <img
                                            src={student.avatar}
                                            alt={student.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <span className="font-medium text-gray-800">{student.name}</span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">{student.subject}</td>
                                    <td className="py-4 px-4 text-gray-700">
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className={`${student.progress >= 50 ? 'bg-[#5C56D3]' : 'bg-red-700'}  h-2.5 rounded-full`}
                                                style={{ width: `${student.progress}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-1">
                                            {student.progress}%
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-gray-700">{student.lastLesson}</td>
                                    <td className="py-4 px-4">
                                        <div className="flex gap-2">
                                            <button className="px-3 cursor-pointer py-1 text-xs flex space-x-3 bg-[#5C56D3] text-white rounded hover:bg-purple-700">
                                                <span>View</span>
                                                <BsEye size={20} color="white" />
                                            </button>
                                            <button className="px-3 cursor-pointer py-1 text-xs bg-gray-100 text-gray-800 rounded hover:bg-gray-200">
                                                Message
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </DefaultLayout>
    );
}
