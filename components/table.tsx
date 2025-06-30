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


const TableOne = () => {
    return (
        < div className="overflow-x-auto bg-white shadow rounded" >
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
        </div >
    );
};

export default TableOne;
