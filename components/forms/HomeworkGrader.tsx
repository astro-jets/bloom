import { Submission } from "@/types/types";
import { gradeHomework } from "@/utils/routes";
import { useState } from "react";
import HomeworkViewer from "./HomeworkViewer";

export default function HomeworkGrader({
    submission,
    tutorId,
}: {
    submission: Submission;
    tutorId: string;
}) {
    const [showForm, setShowForm] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [grade, setGrade] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        const formData = new FormData();
        formData.append("grade", grade);
        formData.append("feedback", feedback);
        formData.append("tutorId", tutorId);
        try {
            const res = await gradeHomework(formData, submission.id);
            if (res) {
                setMessage("✅ Feedback submitted successfully");
                setFeedback("");
                setGrade("");
                // setShowForm(false);
            } else {
                setMessage("❌ Failed to submit feedback");
            }
        } catch (error) {
            setMessage("❌ Error sending feedback");
            console.error("Error => ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-2">
            {!showForm ? (
                <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 rounded-xl cursor-pointer hover-grow text-gray-800 font-medium bg-white border border-gray-300 shadow-md hover:bg-gray-100"
                >
                    Review
                </button>
            ) : (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="flex w-full  bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Homework Viewer */}
                        <div className="flex-1 bg-gray-50 ">
                            <HomeworkViewer fileUrl={"/files/file.pdf"} />
                        </div>

                        {/* Feedback Form or Graded View */}
                        <div className="w-[40%] p-6 flex flex-col justify-between">
                            {submission.status !== "Graded" ? (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                        Grade Homework
                                    </h2>

                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-600">
                                            Feedback
                                        </label>
                                        <textarea
                                            value={feedback}
                                            onChange={(e) => setFeedback(e.target.value)}
                                            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            rows={4}
                                            placeholder="Write constructive feedback..."
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-600">
                                            Grade
                                        </label>
                                        <input
                                            type="text"
                                            value={grade}
                                            onChange={(e) => setGrade(e.target.value)}
                                            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="e.g. A+"
                                            required
                                        />
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="flex items-center justify-center px-5 py-2.5 cursor-pointer bg-green-600 text-white font-medium rounded-xl shadow hover:bg-green-700 transition disabled:opacity-50"
                                        >
                                            {loading ? (
                                                <span className="animate-pulse">Submitting...</span>
                                            ) : (
                                                "Submit"
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            className="px-5 py-2.5 cursor-pointer bg-gray-200 text-gray-700 font-medium rounded-xl shadow hover:bg-gray-300 transition"
                                        >
                                            Cancel
                                        </button>
                                    </div>

                                    {message && (
                                        <p
                                            className={`text-sm font-medium mt-3 ${message.includes("✅")
                                                ? "text-green-600"
                                                : "text-red-600"
                                                }`}
                                        >
                                            {message}
                                        </p>
                                    )}
                                </form>
                            ) : (
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        Homework Already Graded
                                    </h2>
                                    <p className="flex items-center space-x-2">
                                        <span className="text-lg font-semibold">Submitted On:{" "}</span>
                                        <span>{new Date(submission.submissionDate).toLocaleDateString()}</span>
                                    </p>

                                    <p className="text-lg font-semibold">
                                        <span>Grade:{" "}</span>
                                        <span><span className="text-blue-600">{submission.grade}</span></span>
                                    </p>
                                    <p className="flex flex-col">
                                        <span className="font-semibold text-lg">Feedback</span>
                                        <span>{submission.feedback}</span>
                                    </p>
                                    <button
                                        onClick={() => setShowForm(false)}
                                        className="mt-4 hover-grow hover-bg-red px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
