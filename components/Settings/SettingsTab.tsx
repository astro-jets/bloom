// components/Settings/SettingsNav.tsx
"use client";
import { useEffect, useState } from "react";

const navItems = [
    { id: "profile", label: "Profile" },
    { id: "certificates", label: "Certificates" },
    { id: "availability", label: "Availability" },
    { id: "notifications", label: "Notifications" },
];

export default function SettingsNav() {
    const [activeId, setActiveId] = useState<string>("profile");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) {
                    setActiveId(visible.target.id);
                }
            },
            {
                rootMargin: "-100px 0px -60% 0px",
                threshold: 0.1,
            }
        );

        navItems.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex gap-6 border-b border-gray-200 backdrop-blur-2xl px-4 py-2 sticky top-0  z-10">
            {navItems.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-sm transition-all ${activeId === item.id
                        ? "text-purple-600 border-b border-purple-500 font-semibold"
                        : "text-gray-600 hover:text-purple-500"
                        }`}
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
}
