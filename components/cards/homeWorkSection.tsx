'use client'

type Homework = {
    title: string;
    status: 'Graded: A' | 'Graded: B+' | 'Pending' | 'Late: A-';
    icon: JSX.Element;
    submitted?: string;
    due?: string;
};

import { JSX } from 'react';
import { FaFlask, FaCalculator, FaAtom, FaBook, FaClipboardList, FaFilter } from 'react-icons/fa';
import NavigationTabs from './navigationTabs';

const homeworks: Homework[] = [
    { title: 'Chemistry Lab Report', submitted: 'May 12, 2024', status: 'Graded: A', icon: <FaFlask /> },
    { title: 'Calculus Problem Set', submitted: 'May 10, 2024', status: 'Graded: B+', icon: <FaCalculator /> },
    { title: 'Physics Experiment Analysis', due: 'May 15, 2024', status: 'Pending', icon: <FaAtom /> },
    { title: 'Biology Research Paper', due: 'May 20, 2024', status: 'Late: A-', icon: <FaBook /> },
    { title: 'Chemistry Quiz Preparation', submitted: 'May 8, 2024', status: 'Graded: A', icon: <FaClipboardList /> },
];

export default function HomeworksSection() {
    return (
        <div className="bg-white flex flex-col p-4 rounded-xl shadow space-y-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Student's Homeworks</h3>
                <div className="w-40 flex justify-between">
                    <button className="text-sm bg-purple-500 text-white px-3 py-1 rounded-md">+ Assign</button>
                    <button className="text-sm bg-gray-100 text-black px-3 py-1 flex items-center space-x-2 rounded-md">
                        <FaFilter /><span>Filter</span>
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-between mb-4">
                <NavigationTabs />
                <div className="w-35 h-8 text-sm flex space-x-2 rounded bg-gray-100 p-1">
                    <button className="w-16 h-6 text-black bg-white shadow rounded">Week</button>
                    <button className="w-16 h-6 text-black bg-gary-100 rounded">Day</button>
                </div>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
                {homeworks.map((hw, idx) => (
                    <li key={idx} className="flex justify-between items-center space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-purple-100 text-purple-700 p-2 rounded">{hw.icon}</div>
                            <div>
                                <p className="font-medium">{hw.title}</p>
                                <p className="text-xs text-gray-500">
                                    {hw.submitted ? `Submitted: ${hw.submitted}` : `Due: ${hw.due}`}
                                </p>
                            </div>
                        </div>
                        <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded">{hw.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
