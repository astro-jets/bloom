import { FaStar } from "react-icons/fa";

export default function PerformanceScoreCard({ score = 90, label = "Excellent", subtext = "Based on student feedback" }) {
    const circleRadius = 36;
    const circumference = 2 * Math.PI * circleRadius;
    const progress = (score / 100) * circumference;

    return (
        <div className="bg-white h-40 p-4 rounded-xl shadow relative">
            <div className="flex justify-between items-center w-full">
                <h3 className="text-sm font-medium text-gray-600">Performance Score</h3>
                <span className="rounded-xl bg-[#f4F6F3] p-2">
                    <FaStar size={20} color="#5B57D0" /></span>
            </div>


            <div className="flex space-x-2 mt-3">
                {/* Circular progress bar */}
                <svg width="100" height="100" className="transform ">
                    <circle
                        cx="40"
                        cy="40"
                        r={circleRadius}
                        stroke="#e5e7eb"
                        strokeWidth="4"
                        fill="none"

                    />
                    <circle
                        cx="40"
                        cy="40"
                        r={circleRadius}
                        stroke="#7c3aed"
                        strokeWidth="3"
                        fill="none"
                        className="rounded-4xl"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progress}
                        strokeLinecap="round"
                    />
                    <text
                        x="50%"
                        y="40%"
                        textAnchor="middle"
                        dy=".3em"
                        className="text-lg font-bold fill-gray-800"
                    >
                        {score}%
                    </text>
                </svg>

                {/* Text details */}
                <div className="flex flex-col justify-center h-full">
                    <p className="text-xl font-stretch-50% font-bold text-gray-900">{label}</p>
                    <p className="text-sm text-gray-500">{subtext}</p>
                </div>
            </div>
        </div>
    );
}
