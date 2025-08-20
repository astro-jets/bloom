"use client";

import { useState } from "react";
import { submitHomework } from "@/utils/routes";

export default function HomeworkSubmissionForm({ studentId, homeworkID }: { studentId: string; homeworkID: string }) {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            alert("Please upload a file before submitting!");
            return;
        }

        const formData = new FormData();
        formData.append("studentId", studentId);
        formData.append("document", file);

        console.log({
            file: file, studentId, homeworkID
        })

        try {
            setLoading(true);
            const result = await submitHomework(formData, homeworkID); // axios call
            console.log("Submission => ", result);
            alert("✅ Submission successful!");
        } catch (err) {
            console.error("Submission failed", err);
            alert("❌ Submission failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="studentId" value={studentId} />

            <div>
                <label className="block mb-1 font-semibold text-gray-700">
                    Upload File
                </label>
                <div>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">  PDF (MAX. 50mb)</p>
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            name="file"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
            >
                {loading ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}
