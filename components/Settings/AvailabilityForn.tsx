// components/Settings/AvailabilityForm.tsx
"use client";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";

type UnavailableRange = { label: string; range: string };

export default function AvailabilityForm() {
    const [unavailable, setUnavailable] = useState<UnavailableRange[]>([
        { label: "Summer Break", range: "July 15, 2023 - August 10, 2023" },
        { label: "Winter Holiday", range: "December 20, 2023 - January 5, 2024" },
    ]);

    const addRange = () => {
        setUnavailable([...unavailable, { label: "New Break", range: "Start - End" }]);
    };

    const removeRange = (index: number) => {
        setUnavailable(unavailable.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-4  p-4 pb-6 shadow rounded bg-white">
            <h2 className="font-semibold text-lg">Availability Settings</h2>
            {unavailable.map((entry, i) => (
                <div
                    key={i}
                    className="flex justify-between items-center border border-gray-300 shadow-sm p-3 rounded bg-white"
                >
                    <div>
                        <div className="font-medium">{entry.label}</div>
                        <div className="text-sm text-gray-600">{entry.range}</div>
                    </div>
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeRange(i)}
                    >
                        <BsTrash size={20} className="fill-red cursor-pointer" />
                    </button>
                </div>
            ))}
            <button
                className="text-purple-600 hover:underline text-sm"
                onClick={addRange}
            >
                + Add Unavailable Date Range
            </button>
        </div>
    );
}
