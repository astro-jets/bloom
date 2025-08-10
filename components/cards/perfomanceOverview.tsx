'use client';

import { Student } from "@/types/types";
import { ProgressBar } from "../assignments/ProgresBar";

const circleRadius = 80;
const circumference = 2 * Math.PI * circleRadius;

export default function PerformanceOverview({ student }: { student: Student }) {
    const lessons = student?.lessons || [];

    // Group lessons by subject and count them
    const subjectCounts: Record<string, number> = {};
    lessons.forEach((lesson) => {
        const subjectName = lesson.Subject.subject_name;
        subjectCounts[subjectName] = (subjectCounts[subjectName] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(subjectCounts), 1); // prevent division by 0

    // Convert to SubjectScore array
    const subjects = Object.entries(subjectCounts).map(([name, count], index) => {
        const score = parseFloat(((count / maxCount) * 10).toFixed(1));
        const colors = ['bg-purple-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
        return {
            name,
            score,
            color: colors[index % colors.length],
        };
    });

    // Average score across all subjects
    const totalScore = subjects.reduce((sum, s) => sum + s.score, 0);
    const averageScore = parseFloat((totalScore / subjects.length || 0).toFixed(1));
    const progress = (averageScore / 10) * circumference;

    return (
        <div className="w-full bg-white p-4 rounded-xl shadow space-y-2 h-120">
            <h3 className="text-xl text-gray-900 font-semibold">Performance Overview</h3>
            <div className="flex flex-col items-center justify-center w-full">
                {/* Circular progress bar */}
                <svg width="200" height="200" className="transform">
                    <circle
                        cx="90"
                        cy="90"
                        r={circleRadius}
                        stroke="#e5e7eb"
                        strokeWidth="11"
                        fill="none"
                    />
                    <circle
                        cx="90"
                        cy="90"
                        r={circleRadius}
                        stroke="#7c3aed"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progress}
                        strokeLinecap="round"
                    />
                    <text
                        x="45%"
                        y="60%"
                        textAnchor="middle"
                        dy=".3em"
                        className="text-xs text-gray-400"
                    >
                        Weekly Avg
                    </text>
                    <text
                        x="45%"
                        y="40%"
                        textAnchor="middle"
                        dy=".3em"
                        className="text-3xl font-bold text-purple-600"
                    >
                        {averageScore}%
                    </text>
                </svg>
                <p className="text-sm text-gray-500">
                    {averageScore >= 7 ? 'Excellent progress this week' : 'Keep working hard'}
                </p>
            </div>
            <div className="space-y-2 text-sm">
                {subjects.map((subject, index) => (
                    <ProgressBar key={index} subject={subject.name} grade={subject.score.toString()} />
                ))}
            </div>
        </div>
    );
}
