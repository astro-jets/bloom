'use client'

const tabs = [
    { label: 'Lessons', color: 'bg-purple-100 text-purple-700' },
    { label: 'Schedule', color: 'bg-purple-100 text-purple-700' },
    { label: 'Assignments', color: 'bg-purple-100 text-purple-700' },
];

export default function NavigationTabs() {
    return (
        <div className="flex gap-3 flex-wrap py-2">
            {tabs.map((tab) => (
                <button key={tab.label} className={`px-3 py-1 rounded-full text-sm font-medium ${tab.color}`}>
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
