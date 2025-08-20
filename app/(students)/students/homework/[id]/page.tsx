import React from "react";
import moment from "moment";
import HomeworkViewer from "@/components/forms/HomeworkViewer";
import StudentsLayout from "@/components/Layouts/StudentsLayout";
import { fetchHomeworkById } from "@/utils/routes";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import HomeworkSubmissionForm from "@/components/forms/homeworkSubmissionForm";


const StudentsProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const homework = await fetchHomeworkById(id);
    const isLate = true;
    const file = homework.fileUrl;
    const session = await getServerSession(options);
    const user = session?.user

    if (!user) return

    return (
        <StudentsLayout>
            <main className="w-full space-y-4 pb-20 flex justify-between">
                <div className="w-full space-y-4 rounded">
                    {/* Homework Details */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Assignment Details</h2>
                        <div className="flex flex-col justify-between bg-gray-100 rounded space-y-2">
                            <p className="text-gray-800 flex flex-col">
                                <span>Assignment:</span>
                                <span className="font-bold">{homework.title}</span>
                            </p>
                            <p className="text-gray-800 flex flex-col">
                                <span>Tutor:</span>
                                <span className="font-bold">{homework.tutor.name}</span>
                            </p>
                            <p className="text-gray-800 flex flex-col">
                                <span>Due Date:</span>
                                <span className="font-bold">{moment(homework.dueDate).calendar()}</span>
                            </p>
                            <p className="flex flex-col">
                                <span>Status</span>
                                <div className="flex space-x-3 items-center">
                                    <span
                                        className={`${isLate ? " bg-red-500 animate-pulse" : "bg-green-600"
                                            }  h-3 w-3 rounded-full`}
                                    ></span>
                                    {isLate && " (Late)"}
                                </div>
                            </p>
                            <p className="text-gray-800 flex flex-col overflow-hidden">
                                <span>Description:</span>
                                <pre className="font-serif overflow-hidden">
                                    {homework.description}
                                </pre>
                            </p>
                        </div>
                    </div>

                    {file && <HomeworkViewer fileUrl={file} />}

                    {/* Homework Submission Form */}
                    <HomeworkSubmissionForm studentId={user.id} homeworkID={homework.id} />
                </div>
            </main>
        </StudentsLayout>
    );
};

export default StudentsProfile;
