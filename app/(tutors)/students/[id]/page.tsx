import React from "react";
import { AssignmentHeader } from "@/components/assignments/AssignmentHeader";
import { PDFViewer } from "@/components/assignments/PDFViewer";
import { GradingSection } from "@/components/assignments/GradingSection";
import { StudentProfile } from "@/components/assignments/StudentProfile";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const StudentsProfile = () => {
    const recentGrades = [
        { subject: "Physics Quiz", score: "92%" },
        { subject: "English Essay", score: "85%" },
        { subject: "Chemistry Lab", score: "78%" },
    ];

    return (
        <DefaultLayout>
            <main className="w-full ml-[17.3%] mx-auto p-1 space-y-4 flex justify-between">
                <div className="w-[66.5%] rounded bg-white  p-4 overflow-y-scroll custom-scrollbar ">
                    <AssignmentHeader
                        studentName="Emma Wilson"
                        dueDate="May 25, 2025"
                        submittedDate="May 28, 2025"
                        isLate={true}
                    />
                    <PDFViewer fileName="algebra_homework.pdf" />
                    <GradingSection />

                    <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                            Save Draft
                        </button>
                        <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">
                            Submit Grade
                        </button>
                    </div>
                </div>

                <div className="w-[33%] h-screen rounded bg-white ">
                    <StudentProfile
                        name="Emma Wilson"
                        grade="10"
                        average={87}
                        classAverage={82}
                        recentGrades={recentGrades}
                    />
                </div>
            </main>
        </DefaultLayout>
    );
};

export default StudentsProfile;