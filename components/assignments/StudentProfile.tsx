import Image from "next/image";
import React from "react";

interface GradeItem {
    subject: string;
    score: string;
}

interface StudentProfileProps {
    name: string;
    grade: string;
    average: number;
    classAverage: number;
    recentGrades: GradeItem[];
}

export const StudentProfile = ({
    name,
    grade,
    average,
    classAverage,
    recentGrades,
}: StudentProfileProps) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Student Profile</h2>
            <div className="space-y-4">
                <div className="flex flex-col justify-center items-center w-full">
                    <Image src={'/images/user-02.png'} width={100} height={100} className="rounded-full object-cover" alt='' />
                    <p className="font-medium text-gray-700">{name}</p>
                    <p className="text-gray-600">Grade {grade}</p>
                </div>
                <div className="flex flex-col">

                    <div className="w-full bg-gray-200 rounded-full h-4 mb-1">
                        <div
                            className="bg-gray-900 h-4 rounded-full"
                            style={{ width: `82%` }}
                        />
                    </div>
                    <div className="text-sm flex justify-between text-gray-900 mb-2">
                        <p>Average: 82%</p>
                        <p className="">Class Average: 82%</p>
                    </div>
                </div>
                <div>
                    <h3 className="font-medium text-gray-800 mb-2">Recent Grades</h3>
                    <table className="w-full border-collapse">
                        <tbody>
                            {recentGrades.map((grade, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="py-2 text-gray-700">{grade.subject}</td>
                                    <td className="py-2 text-right font-medium">{grade.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Notes</label>
                    <textarea
                        placeholder="Add notes about this student..."
                        className="w-full p-2 border border-gray-300 rounded h-20"
                    />
                </div>
            </div>
        </div>
    );
};