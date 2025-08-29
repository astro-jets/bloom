import { gradeHomework } from "@/utils/routes";
import { useState } from "react";

export default function HomeworkGrader({ homeworkId, tutorId }: { homeworkId: string, tutorId: string }) {
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
            const res = await gradeHomework(formData, homeworkId)
            console.log(res)
            if (res) {
                setMessage("Feedback submitted successfully ✅");
                setFeedback("");
                setGrade("");
                setShowForm(false);
            } else {
                setMessage("Failed to submit feedback");
            }
        } catch (error) {
            setMessage("Error sending feedback ❌");
            console.log("Error => ", error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            {!showForm ? (
                <button
                    onClick={() => setShowForm(true)}
                    className="px-2 py-1 rounded cursor-pointer transition ease-in-out duration-300 hover:scale-110 text-gray-700 bg-white h-8 border border-gray-300 shadow-xl"
                >
                    Review
                </button>
            ) : (
                <div className="fixed inset-0 z-50 bg-[#ffffff69] backdrop-blur bg-opacity-50 flex items-center justify-center h-full">
                    <form
                        onSubmit={handleSubmit}
                        className="mt-4 p-4 border rounded-2xl shadow space-y-4 max-w-sm"
                    >
                        <div>
                            <label className="block text-sm font-medium mb-1">Feedback</label>
                            <textarea
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="w-full border rounded p-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Grade</label>
                            <input
                                type="text"
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)}
                                className="w-full border rounded p-2"
                                placeholder="A+"
                                required
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-4 py-2 cursor-pointer bg-green-600 text-white rounded-2xl shadow hover:bg-green-700 disabled:opacity-50"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 cursor-pointer bg-gray-300 rounded-2xl shadow hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>

                        {message && <p className="text-sm mt-2">{message}</p>}
                    </form>
                </div>
            )}
        </div>
    );
}
