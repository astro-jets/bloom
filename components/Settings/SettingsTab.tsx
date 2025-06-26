// components/Settings/SettingsTabs.tsx
"use client";
import { useState } from "react";

const tabs = ["Profile", "Account", "Notifications", "Security"];

export default function SettingsTabs({ children }: { children: React.ReactNode[] }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full">
            {/* Tab headers */}
            <div className="border-b border-gray-300 mb-6">
                <nav className="flex space-x-6">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            className={`cursor-pointer pb-2 border-b-2 text-sm font-medium ${activeTab === index
                                ? "border-purple-500 text-purple-600 border-b"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab content */}
            <div>{children[activeTab]}</div>
        </div>
    );
}
