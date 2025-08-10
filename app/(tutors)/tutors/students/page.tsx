import { options } from "@/app/api/auth/[...nextauth]/options";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Pagination from "@/components/pagination/pagination";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BiSolidComment } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { fetchStudentsByTutor } from "@/utils/routes";

// --- Types ---
type Status = "active" | "pending" | "missed";

interface Lesson {
    lessonDate: string; // YYYY-MM-DD
    startTime: string;  // HH:mm:ss
    status: string;
}

interface StudentApi {
    id: string;
    name: string;
    packageName?: string;
    studentPackage?: {
        status?: Status;
    };
    lessons: Lesson[];
}

interface StudentCardData {
    id: string;
    name: string;
    grade: string;
    subjects: string;
    package: string;
    nextLesson: string;
    progress: {
        current: number;
        total: number;
    };
    status: Status;
    avatarUrl: string;
}

// --- Helper Functions ---
function formatNextLesson(lessons: Lesson[]): string {
    if (!lessons?.length) return "N/A";

    const upcoming = lessons
        .map((l) => ({
            ...l,
            startDate: new Date(`${l.lessonDate}T${l.startTime}`)
        }))
        .filter((l) => l.startDate > new Date())
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    if (!upcoming.length) return "N/A";

    const next = upcoming[0].startDate;
    return `${next.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
    })}, ${next.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
    })}`;
}

const statusColors: Record<Status, string> = {
    active: "bg-green-600",
    pending: "bg-yellow-600",
    missed: "bg-red-600",
};

// --- Main Component ---
export default async function StudentsPage() {
    const session = await getServerSession(options);
    const user = session?.user;
    if (!user) {
        redirect("/");
    }

    const apiResponse: StudentApi[] = await fetchStudentsByTutor(user.id);

    const students: StudentCardData[] = apiResponse.map((student) => {
        const totalLessons = student.lessons.length;
        const completedLessons = student.lessons.filter(
            (l) => l.status.toLowerCase() === "completed"
        ).length;

        return {
            id: student.id,
            name: student.name,
            grade: "Grade: 57%", // Placeholder
            subjects: "Subject: English", // Placeholder
            package: student.packageName ?? "Unknown Package",
            nextLesson: formatNextLesson(student.lessons),
            progress: {
                current: completedLessons,
                total: totalLessons,
            },
            status: student.studentPackage?.status ?? "pending",
            avatarUrl: "/images/user-12.png",
        };
    });

    return (
        <DefaultLayout>
            <main className="h-full custom-scrollbar p-2 md:px-4 md:overflow-y-auto md:w-[83%] w-full md:ml-[17.3%] pb-10">
                <h1 className="mt-16 md:mt-0 text-2xl font-semibold">My Students</h1>
                <p className="mb-6 text-sm text-gray-600">
                    Manage your assigned students and track their progress.
                </p>

                {/* Filters */}
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

                {/* Student Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {students.map((student) => {
                        const percent = student.progress.total
                            ? Math.round(
                                (student.progress.current / student.progress.total) * 100
                            )
                            : 0;

                        return (
                            <div key={student.id} className="bg-white rounded p-4 shadow">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-gray-100 rounded-full p-1">
                                            <Image
                                                width={60}
                                                height={60}
                                                src={student.avatarUrl}
                                                alt={`${student.name} avatar`}
                                                className="object-cover rounded-full"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-medium">{student.name}</p>
                                            <p className="text-xs text-gray-500">{student.grade}</p>
                                            <p className="text-xs text-gray-500">{student.subjects}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <span
                                            className={`h-2 w-2 rounded-full ${statusColors[student.status] || "bg-gray-500"
                                                }`}
                                        />
                                        <span className="text-sm capitalize">{student.status}</span>
                                    </div>
                                </div>

                                <div className="text-sm flex justify-between text-gray-900 mb-3">
                                    <p>Package:</p>
                                    <p className="font-bold">{student.package}</p>
                                </div>
                                <div className="text-sm flex justify-between text-gray-900 mb-3">
                                    <p>Next Lesson:</p>
                                    <p className="font-bold">{student.nextLesson}</p>
                                </div>

                                <div className="mb-3">
                                    <div className="text-sm flex justify-between text-gray-900 mb-1">
                                        <p>Progress:</p>
                                        <p className="font-bold">
                                            {student.progress.current}/{student.progress.total} lessons
                                        </p>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-gray-900 h-2 rounded-full"
                                            style={{ width: `${percent}%` }}
                                        />
                                    </div>
                                    <div className="text-left text-xs text-gray-500 mt-1">
                                        {percent}% complete
                                    </div>
                                </div>

                                <div className="flex space-x-3 items-center">
                                    <Link
                                        href={`/tutors/students/${student.id}`}
                                        className="w-70 bg-gray-900 text-white text-sm p-2 rounded font-medium hover:bg-gray-700"
                                    >
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
