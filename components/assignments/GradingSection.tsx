"use client"
import React, { useState } from "react";

export const GradingSection = () => {
    const [score, setScore] = useState<number>(0);
    const [feedback, setFeedback] = useState<string>("");

    return (
        <div className="mt-6 p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Grading</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Score
                    </label>
                    <input
                        type="number"
                        min="0"
                        max="100"
                        value={score}
                        onChange={(e) => setScore(Number(e.target.value))}
                        className="w-20 p-2 border border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-600">/ 100</span>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Feedback
                    </label>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Provide feedback to the student..."
                        className="w-full p-2 border border-gray-300 rounded h-24"
                    />
                </div>
            </div>
        </div>
    );
};