import React from "react";

interface AssignmentHeaderProps {
    studentName: string;
    dueDate: string;
    submittedDate: string;
    isLate?: boolean;
}

export const AssignmentHeader = ({
    studentName,
    dueDate,
    submittedDate,
    isLate = false,
}: AssignmentHeaderProps) => {
    return (
        <div className="">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Assignment Details</h2>
            <div className="flex flex-col justify-between bg-gray-100 p-2 rounded space-y-4">
                <p className="text-gray-800 flex justify-between w-full">
                    <span className="">Assignment:</span>
                    <span className="font-bold">Algebra Eqautions</span>
                </p>
                <p className="text-gray-800 flex justify-between w-full">
                    <span className="">Student:</span>
                    <span className="font-bold">{studentName}</span>
                </p>
                <p className="text-gray-800 flex justify-between w-full">
                    <span className="">Due Date:</span>
                    <span className="font-bold">{dueDate}</span>
                </p>
                <p className="flex items-center justify-between">
                    <span className="">Submitted:</span>
                    <div className="flex space-x-3 items-center">
                        <span className={`${isLate ? " bg-red-500 animate-pulse" : "bg-green-600"}  h-3 w-3 rounded-full`}></span>
                        <span className="font-bold">{submittedDate}</span>
                        {isLate && " (Late)"}
                    </div>
                </p>
            </div>
        </div>
    );
};