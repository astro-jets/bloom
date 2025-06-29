
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Pagination from "@/components/pagination/pagination";
import Image from "next/image";
import Link from "next/link";
import { BiSolidComment } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

type StudentStatus = "Active" | "Pending" | "Missed";

type Student = {
    name: string;
    grade: string;
    subjects: string;
    package: string;
    nextLesson: string;
    progress: { current: number; total: number };
    status: StudentStatus;
    avatarUrl?: string;
};

const students: Student[] = [
    {
        name: "Emma Johnson",
        grade: "Grade 10",
        subjects: "Mathematics",
        package: "Standard (2/week)",
        nextLesson: "Today, 3:00 PM",
        progress: { current: 12, total: 20 },
        status: "Active",
    },
    {
        name: "Michael Chen",
        grade: "Grade 11",
        subjects: "Physics, Chemistry",
        package: "Premium (3/week)",
        nextLesson: "Tomorrow, 10:00 AM",
        progress: { current: 8, total: 24 },
        status: "Pending",
    },
    {
        name: "Sarah Williams",
        grade: "Grade 9",
        subjects: "English Literature",
        package: "Basic (1/week)",
        nextLesson: "Friday, 2:00 PM",
        progress: { current: 15, total: 16 },
        status: "Active",
    },
    {
        name: "David Rodriguez",
        grade: "Grade 12",
        subjects: "Calculus",
        package: "Standard (2/week)",
        nextLesson: "Monday, 4:00 PM",
        progress: { current: 6, total: 20 },
        status: "Missed",
    },
];

const statusColors = {
    Active: "bg-green-600",
    Pending: "bg-yellow-600",
    Missed: "bg-red-600",
};



export default function Studentspage() {
    return (
        <DefaultLayout>
            <main className="h-full custom-scrollbar p-2 md:px-4 nd:overflow-y-auto md:w-[83%] w-full md:ml-[17.3%] pb-24">
                <h1 className="mt-16 md:mt-0 text-2xl font-semibold">My Students</h1>
                <p className="mb-6 text-sm text-gray-600">Manage your assigned students and track their progress.</p>

                {/* Filter Sections */}
                <div className="hidden md:flex flex-wrap gap-3 justify-between items-center mb-6">
                    <div className="flex gap-2">
                        <select className="rounded px-3 py-2 w-40 bg-white text-sm shadow-sm">
                            <option>All Subjects</option>
                        </select>
                        <select className="rounded px-3 py-2 w-40 bg-white text-sm shadow-sm">
                            <option>All Packages</option>
                        </select>
                        <div className="flex relative">
                            <BsSearch className="absolute left-2 top-2.5 fill-gray-600" />
                            <input
                                type="text"
                                placeholder="Search students..."
                                className="outline-0 px-4 py-2 pl-8 text-black bg-white text-sm rounded shadow-sm w-64"
                            />
                        </div>
                    </div>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {students.map((student, index) => {
                        const percent = Math.round((student.progress.current / student.progress.total) * 100);
                        return (
                            <div
                                key={index}
                                className="bg-white rounded p-4 shadow"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-gray-100 rounded-full p-1">
                                            {/* Placeholder Avatar */}
                                            <Image width={60} height={60} src={'/images/user-12.png'} alt="" className="object-cover rounded-full" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-medium">{student.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {student.grade}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {student.subjects}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <span className={`h-2 w-2 rounded-full  ${statusColors[student.status]}`} />
                                        <span className="text-sm">
                                            {student.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-sm flex justify-between text-gray-900 mb-3">
                                    <p>Package:</p>
                                    <p className=" font-bold"> {student.package}</p>
                                </div>
                                <div className="text-sm flex justify-between text-gray-900 mb-3">
                                    <p>Next Lesson:</p><p className=" font-bold"> {student.nextLesson}</p>
                                </div>

                                <div className="mb-3">
                                    <div className="text-sm flex justify-between text-gray-900 mb-1">
                                        <p>Progress:</p>
                                        <p className="font-bold">{student.progress.current}/{student.progress.total} lessons</p>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-gray-900 h-2 rounded-full"
                                            style={{ width: `${percent}%` }}
                                        />
                                    </div>
                                    <div className="text-left text-xs text-gray-500 mt-1">{percent}% complete</div>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    <Link href={'/students/1'} className="w-70 bg-gray-900 text-white text-sm p-2 rounded font-medium hover:bg-gray-700">
                                        View Profile
                                    </Link>
                                    <div className="rounded-sm p-2 items-center justify-center flex border border-gray-900 shadow">
                                        <BiSolidComment className="fill-black" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Pagination />
            </main>
        </DefaultLayout>
    );
}
