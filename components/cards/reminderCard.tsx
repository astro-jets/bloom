import { useState } from "react";

export const ReminderCard = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="w-full max-w-sm rounded-xl shadow-md border-gray-200 bg-white p-5 py-4">
            <h3 className="text-lg font-semibold text-gray-900">Reminders</h3>
            <hr className="my-1 border-t border-gray-200" />
            <label className="flex items-center space-x-3 text-sm font-medium text-gray-700 cursor-pointer">
                <input
                    type="checkbox"
                    className="peer hidden"
                    checked={enabled}
                    onChange={() => setEnabled(!enabled)}
                />
                <div className="w-15 h-6 bg-gray-300 peer-checked:bg-[#5C56D3] rounded-full relative transition-colors">
                    <div
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform ${enabled ? "translate-x-5" : ""
                            }`}
                    />
                </div>
                <span>Email reminders 15 minutes before class</span>
            </label>
        </div>
    );
};
