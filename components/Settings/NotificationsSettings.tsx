// components/Settings/NotificationSettings.tsx
"use client";
import { useState } from "react";

const defaultSettings = {
    lessonReminders: true,
    bookingNotifications: true,
    paymentReceipts: true,
    platformUpdates: false,
    marketingEmails: false,
};

export default function NotificationSettings() {
    const [settings, setSettings] = useState(defaultSettings);

    const toggle = (key: keyof typeof settings) => {
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const toggleClasses = (active: boolean) =>
        `relative flex items-center w-10 h-6 transition duration-200 ease-linear ${active ? "bg-purple-700" : "bg-gray-300"
        } rounded-full`;

    return (
        <div className="space-y-4  p-4 pb-6 shadow rounded bg-white">
            <h2 className="font-semibold text-lg">Notification Preferences</h2>

            {Object.entries(settings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                    <div className="capitalize">
                        {key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
                    </div>
                    <button
                        onClick={() => toggle(key as keyof typeof settings)}
                        className={toggleClasses(value)}
                    >
                        <span
                            className={`${value ? "translate-x-5" : "translate-x-1"
                                } inline-block w-4 h-4 transform bg-white rounded-full transition`}
                        />
                    </button>
                </div>
            ))}
        </div>
    );
}
