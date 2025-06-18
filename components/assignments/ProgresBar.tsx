import React from "react";


interface ProgressBarProps {
    grade: string;
    subject: string;
}

export const ProgressBar = ({
    grade,
    subject,
}: ProgressBarProps) => {
    const parsedGrade = (parseInt(grade) * 10).toString();
    return (
        <div className="flex flex-col-reverse">

            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div
                    className="bg-gray-900 h-2 rounded-full"
                    style={{ width: `${parsedGrade}%` }}
                />
            </div>
            <div className="text-sm flex justify-between text-gray-900 mb-2">
                <p>{subject}</p>
                <p className="">{grade}</p>
            </div>
        </div>
    );
};