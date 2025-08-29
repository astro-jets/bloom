'use client';

import { JSX, useState } from 'react';
import {
    FaFlask,
    FaCalculator,
    FaAtom,
    FaBook,
    FaClipboardList,
    FaFilter,
} from 'react-icons/fa';
import NavigationTabs from './navigationTabs';
import { Student } from '@/types/types';
import AssignHomeworkModal from '../modals/AssignHomework';
import HomeworkGrader from '../forms/HomeworkGrader';
import { useSession } from 'next-auth/react';

// Extend this based on your actual subject list
const subjectIcons: Record<string, JSX.Element> = {
    Chemistry: <FaFlask />,
    Calculus: <FaCalculator />,
    Physics: <FaAtom />,
    Biology: <FaBook />,
    Default: <FaClipboardList />,
};

export default function HomeworksSection({ student }: { student: Student }) {
    const { data: session } = useSession();
    const user = session?.user
    if (!user) return
    const homeworks = student?.lessons?.flatMap((lesson) =>
        (lesson.homeworks ?? []).map(hw => ({
            ...hw,
            subject: lesson.Subject?.subject_name ?? "N/A",
            lessonDate: lesson.lessonDate,
            lessonId: lesson.id,
        }))
    ) ?? [];

    console.log(homeworks)
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-white h-auto flex flex-col p-4 rounded-xl shadow space-y-4">
            {/* Header Row */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">{student.name}&apos;s Homeworks</h3>
                <div className="hidden w-40 md:flex justify-between">
                    <button
                        className="text-sm cursor-pointer contain-paint bg-purple-500 text-white px-3 py-1 rounded-md"
                        onClick={() => setModalOpen(true)}
                    >
                        + Assign
                    </button>
                    <button className="text-sm bg-gray-100 text-black px-3 py-1 flex items-center space-x-2 rounded-md">
                        <FaFilter />
                        <span>Filter</span>
                    </button>
                </div>
                <AssignHomeworkModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    studentId={student.id}
                    lessons={student.lessons} // change logic if needed
                />
            </div>

            {/* Tabs & View Toggle */}
            <div className="w-full hidden md:flex justify-between mb-4">
                <NavigationTabs />
                <div className="w-35 h-8 text-sm flex space-x-2 rounded bg-gray-100 p-1">
                    <button className="w-16 h-6 text-black bg-white shadow rounded">Week</button>
                    <button className="w-16 h-6 text-black bg-gray-100 rounded">Day</button>
                </div>
            </div>

            {/* Homework List */}
            {homeworks.length === 0 ? (
                <div className="text-sm text-gray-500 italic">No homeworks assigned yet.</div>
            ) : (
                <ul className="space-y-3 text-sm text-gray-700">
                    {homeworks.map((hw, idx) => (
                        <li
                            key={idx}
                            className="flex justify-between items-center border-b border-gray-200  pb-2"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-purple-100 text-purple-700 h-12 w-12 flex items-center justify-center text-xl p-2 rounded">
                                    {subjectIcons[hw.subject] || subjectIcons['Default']}
                                </div>
                                <div>
                                    <p className="font-medium">{hw.title}</p>
                                    <p className={`text-xs text-gray-500`}>
                                        {hw.subject} ·{' '}
                                        {hw.submissions?.length
                                            ? `Submitted`
                                            : `Not Submitted`
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <span className={`px-2 py-1 rounded h-8
                            ${hw.submissions?.length ?
                                        ` bg-green-700 text-white`
                                        : `bg-red-700 text-white`
                                    }`}>
                                    {hw.submissions?.length
                                        ? `Submitted`
                                        : `Not Submitted`
                                    }
                                </span>
                                {hw.submissions?.length &&
                                    <HomeworkGrader homeworkId={hw.submissions[0].id} tutorId={user.id} />
                                }
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
