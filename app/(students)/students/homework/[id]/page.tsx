import React from "react";
// import { AssignmentHeader } from "@/components/assignments/AssignmentHeader";
import HomeworkViewer from "@/components/HomeworkViewer"
import StudentsLayout from "@/components/Layouts/StudentsLayout";
import { fetchHomeworkById } from "@/utils/routes";
import moment from "moment";

interface PageProps {
    params: {
        id: string;
    };
}

const StudentsProfile = async ({ params }: PageProps) => {
    const { id } = params;
    const homework = await fetchHomeworkById(id)
    const isLate = true
    const file = 'https://gofile.io/d/od6SRY'
    console.log("Homework Single => ", homework)
    return (
        <StudentsLayout>
            <main className="w-full space-y-4 pb-20 flex justify-between">
                <div className="w-full space-y-4 rounded">
                    <div className="">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Assignment Details</h2>
                        <div className="flex flex-col justify-between bg-gray-100 rounded space-y-2">
                            <p className="text-gray-800 flex flex-col justify-between w-full">
                                <span className="">Assignment:</span>
                                <span className="font-bold">{homework.title}</span>
                            </p>
                            <p className="text-gray-800 flex flex-col justify-between w-full">
                                <span className="">Tutor:</span>
                                <span className="font-bold">{homework.tutor.name}</span>
                            </p>
                            <p className="text-gray-800 flex flex-col justify-between w-full">
                                <span className="">Due Date:</span>
                                <span className="font-bold">{moment(homework.dueDate).calendar()}</span>
                            </p>
                            <p className="flex  flex-col justify-between">
                                <span className="">Status</span>
                                <div className="flex space-x-3 items-center">
                                    <span className={`${isLate ? " bg-red-500 animate-pulse" : "bg-green-600"}  h-3 w-3 rounded-full`}></span>
                                    <span className="font-bold">{ }</span>
                                    {isLate && " (Late)"}
                                </div>
                            </p>

                            <p className="text-gray-800 flex flex-col justify-between w-full overflow-hidden">
                                <span className="">Description:</span>
                                <span className="overflow-hidden">
                                    <pre className="font-serif!  overflow-hidden">
                                        {homework.description}
                                    </pre>
                                </span>
                            </p>
                        </div>
                    </div>
                    {file && <HomeworkViewer fileUrl={file} />}

                    <div className="flex space-x-3 mt-20">
                        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                            Save
                        </button>
                        <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">
                            Submit
                        </button>
                    </div>
                </div>
            </main>
        </StudentsLayout>
    );
};

export default StudentsProfile;