import { options } from "@/app/api/auth/[...nextauth]/options";
import StudentsLayout from "@/components/Layouts/StudentsLayout";
import { fetchHomeworkByStudent } from "@/utils/routes";
import { getServerSession } from "next-auth";
import Link from "next/link";

// ---------- TYPES ----------
type HomeworkStatus = "Pending" | "Submitted" | "Overdue";

interface Submission {
    submissionDate: string;
}

interface Subject {
    subject_name: string;
}

interface Lesson {
    Subject?: Subject;
}

export interface HomeworkData {
    id: string;
    title: string;
    dueDate: string;
    Lesson?: Lesson;
    submissions?: Submission[];
}

interface HomeworkRow {
    subject: string;
    title: string;
    submitted: string;
    status: HomeworkStatus;
    id: string;
}

// ---------- CONSTANTS ----------
const statusColors: Record<HomeworkStatus, string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Submitted: "bg-green-100 text-green-800",
    Overdue: "bg-red-100 text-red-800",
};

// ---------- COMPONENT ----------
const Homeworks = async () => {
    const session = await getServerSession(options);
    const user = session?.user as { id: string } | undefined;

    if (!user) {
        return null;
    }

    const homeworkData: HomeworkData[] = await fetchHomeworkByStudent(user.id);

    const homeworkList: HomeworkRow[] = homeworkData.map((hw) => {
        const hasSubmission = hw.submissions && hw.submissions.length > 0;
        const isOverdue = new Date(hw.dueDate) < new Date() && !hasSubmission;

        const status: HomeworkStatus = hasSubmission
            ? "Submitted"
            : isOverdue
                ? "Overdue"
                : "Pending";

        const submitted = hasSubmission
            ? hw.submissions![0].submissionDate
            : "—";

        return {
            id: hw.id,
            subject: hw.Lesson?.Subject?.subject_name || "—",
            title: hw.title,
            submitted,
            status,
        };
    });

    return (
        <StudentsLayout>
            <div className="mb-6 flex flex-col md:flex-row justify-between items-center w-full">
                <div>
                    <h2 className="text-xl font-bold text-[#5855D8]">Homework</h2>
                    <p className="text-gray-500 mt-1">
                        Track and manage all your homework.
                    </p>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white shadow rounded p-4">
                    <h3 className="text-gray-500 text-sm">Total Submissions</h3>
                    <p className="text-xl font-semibold">
                        {homeworkList.filter((hw) => hw.status === "Submitted").length}
                    </p>
                    <p className="text-green-500 text-xs mt-1">+5 from last week</p>
                </div>
                <div className="bg-white shadow rounded p-4">
                    <h3 className="text-gray-500 text-sm">Pending Review</h3>
                    <p className="text-xl font-semibold">
                        {homeworkList.filter((hw) => hw.status === "Pending").length}
                    </p>
                    <p className="text-yellow-500 text-xs mt-1">Needs your attention</p>
                </div>
                <div className="bg-white shadow rounded p-4">
                    <h3 className="text-gray-500 text-sm">Overdue</h3>
                    <p className="text-xl font-semibold">
                        {homeworkList.filter((hw) => hw.status === "Overdue").length}
                    </p>
                    <p className="text-red-500 text-xs mt-1">Due date missed</p>
                </div>
            </div>

            {/* Homework Table */}
            <div className="overflow-x-auto bg-white shadow rounded">
                <h2 className="text-xl font-bold text-gray-800 px-4 py-2">Your Homework</h2>
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-50 text-sm text-gray-600">
                        <tr>
                            <th className="text-left px-6 py-3">Subject</th>
                            <th className="text-left px-6 py-3">Assignment</th>
                            <th className="text-left px-6 py-3">Submitted</th>
                            <th className="text-left px-6 py-3">Status</th>
                            <th className="text-left px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-200">
                        {homeworkList.map((hw) => (
                            <tr key={hw.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{hw.subject}</td>
                                <td className="px-6 py-4">{hw.title}</td>
                                <td className="px-6 py-4">
                                    {hw.submitted !== "—"
                                        ? new Date(hw.submitted).toLocaleDateString()
                                        : "—"}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[hw.status]}`}
                                    >
                                        {hw.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={`/students/homework/${hw.id}`}
                                        className="text-gray-900 cursor-pointer"
                                    >
                                        {hw.status === "Submitted" ? "View" : "Submit"}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </StudentsLayout>
    );
};

export default Homeworks;
