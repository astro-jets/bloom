'use client'

type SubjectScore = {
    name: string;
    score: number;
    color: string;
};

const subjects: SubjectScore[] = [
    { name: 'Chemistry', score: 9.5, color: 'bg-green-500' },
    { name: 'Physics', score: 8.7, color: 'bg-yellow-500' },
    { name: 'Mathematics', score: 9.3, color: 'bg-blue-500' },
    { name: 'Biology', score: 9.0, color: 'bg-purple-500' },
];

const circleRadius = 80;
const circumference = 2 * Math.PI * circleRadius;
const score = 9.2
const progress = (score / 10) * circumference;

export default function PerformanceOverview() {
    return (
        <div className="w-full h-full bg-white p-4 rounded-xl shadow space-y-3">
            <h3 className="text-xl text-gray-900 font-semibold">Perfomance Overview</h3>
            <div className="flex flex-col items-center justify-center w-full">
                {/* Circular progress bar */}
                <svg width="200" height="200" className="transform ">
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
                        className="rounded-4xl"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progress}
                        strokeLinecap="round"
                    />
                    <text
                        x="45%"
                        y="60%"
                        textAnchor="middle"
                        dy=".3em"
                        className="text-xs text-gray-400">Weekly Avg</text>

                    <text
                        x="45%"
                        y="40%"
                        textAnchor="middle"
                        dy=".3em"
                        className="text-3xl font-bold text-purple-600"
                    >
                        {score}%
                    </text>
                </svg>

                <p className="text-sm text-gray-500">Excellent progress this week</p>
            </div>
            <div className="space-y-2 text-sm">
                {subjects.map((subject) => (
                    <div key={subject.name} className="w-full flex flex-col space-y-1 justify-between items-center">
                        <div className="flex justify-between items-center    w-full">
                            <span>{subject.name}</span>
                            <span className="text-xs font-semibold">{subject.score}/10</span>
                        </div>
                        <div className={`w-full h-2 rounded ${subject.color}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
