"use client";

import { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { FaFilter } from "react-icons/fa";
import { fetchTutorsHomeworks } from "@/utils/routes";
import { useSession } from "next-auth/react";
import { Submission } from "@/types/types";


type HomeworkStatus = "Pending" | "Submitted" | "Overdue" | "Graded";

type Homework = {
    id: string;
    student: string;
    subject: string;
    title: string;
    submitted: string | null;
    status: HomeworkStatus;
    grade?: string;
    fileUrl?: string;
};

const statusColors: Record<HomeworkStatus, string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Submitted: "bg-blue-100 text-blue-800",
    Overdue: "bg-red-100 text-red-800",
    Graded: "bg-green-100 text-green-800",
};

function mapHomework(item: { submissions: Submission[]; dueDate: string; id: string; lesson: { student: { name: string; }; }; title: string; description: string; fileUrl: string; }): Homework {
    const submission = item.submissions?.[0];
    let status: HomeworkStatus = "Pending";

    if (submission) {
        if (submission.status === "Graded") status = "Graded";
        else status = "Submitted";
    } else {
        const due = new Date(item.dueDate);
        status = due < new Date() ? "Overdue" : "Pending";
    }

    return {
        id: item.id,
        student: item.lesson?.student?.name || "Unknown",
        subject: item.title,
        title: item.description,
        submitted: submission?.submissionDate || null,
        status,
        grade: submission?.grade,
        fileUrl: submission?.fileUrl || item.fileUrl,
    };
}

const Homeworks = () => {
    const { data: session } = useSession();
    const [homeworks, setHomeworks] = useState<Homework[]>([]);

    useEffect(() => {

        async function fetchData() {
            if (!session?.user) return; // only run if session is available
            try {
                const data = await fetchTutorsHomeworks(session.user.id);
                setHomeworks(data.map(mapHomework));
            } catch (err) {
                console.error("Error fetching homeworks:", err);
            }
        }

        fetchData();
    }, [session?.user?.id]);

    // --- 📊 Stats calculations ---
    const totalSubmissions = homeworks.filter(
        (hw) => hw.status === "Submitted" || hw.status === "Graded"
    ).length;

    const pendingReview = homeworks.filter((hw) => hw.status === "Pending").length;

    const gradedHomeworks = homeworks.filter((hw) => hw.status === "Graded" && hw.grade);
    const avgGrade =
        gradedHomeworks.length > 0
            ? Math.round(
                gradedHomeworks.reduce((acc, hw) => acc + (parseFloat(hw.grade!) || 0), 0) /
                gradedHomeworks.length
            )
            : 0;

    return (
        <DefaultLayout>
            <main className="h-full md:overflow-y-auto w-full custom-scrollbar py-6 px-2 md:px-8 md:w-[83%] md:ml-[17.3%]">
                {/* Header */}
                <div className="mb-6 mt-16 md:mt-0 flex flex-col md:flex-row justify-between items-center w-full">
                    <div>
                        <h2 className="text-xl font-bold text-[#5855D8]">Homework</h2>
                        <p className="text-gray-500 mt-1">
                            Track and manage all assigned homework for your students.
                        </p>
                    </div>
                    <div className="hidden md:flex space-x-3 items-center">
                        <span className="bg-white w-25 p-2 text-black rounded shadow space-x-2 flex items-center justify-center">
                            <FaFilter size={20} className={"fill-gray-900 text-sm"} />
                            <p>Filter</p>
                        </span>
                        <span className="p-2 text-white bg-gray-800 rounded shadow">
                            + Assign Homework
                        </span>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-sm font-medium text-gray-500">Total Submissions</h3>
                        <p className="mt-2 text-2xl font-semibold text-gray-900">
                            {totalSubmissions}
                        </p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-sm font-medium text-gray-500">Pending Review</h3>
                        <p className="mt-2 text-2xl font-semibold text-gray-900">
                            {pendingReview}
                        </p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-sm font-medium text-gray-500">Average Grade</h3>
                        <p className="mt-2 text-2xl font-semibold text-gray-900">
                            {avgGrade}%
                        </p>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white shadow rounded">
                    <h2 className="text-xl font-bold text-gray-800 px-4 py-2">
                        Recent Submissions
                    </h2>
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
                            {homeworks.map((hw) => (
                                <tr key={hw.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">{hw.student}</td>
                                    <td className="px-6 py-4">{hw.subject}</td>
                                    <td className="px-6 py-4">{hw.title}</td>
                                    <td className="px-6 py-4">
                                        {hw.submitted
                                            ? new Date(hw.submitted).toLocaleDateString()
                                            : "Not submitted"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[hw.status]}`}
                                        >
                                            {hw.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {hw.fileUrl ? (
                                            <a
                                                href={hw.fileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                {hw.status === "Graded" ? "View Grade" : "Open"}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400">N/A</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </DefaultLayout>
    );
};

export default Homeworks;
