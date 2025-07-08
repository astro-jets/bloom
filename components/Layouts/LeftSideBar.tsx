"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiLineChart, BiMenu, BiX } from "react-icons/bi";
import { FaUserGraduate, FaBook, FaVideo, FaEnvelope, FaCog } from "react-icons/fa";
import { HiPresentationChartBar } from "react-icons/hi";
import { PiBooks } from "react-icons/pi";
import { useState } from "react";

const navLinks = [
    { name: "Dashboard", icon: BiLineChart, href: "/dashboard" },
    { name: "Student Management", icon: FaUserGraduate, href: "/students" },
    { name: "Homework", icon: FaBook, href: "/homework" },
    { name: "Recordings", icon: FaVideo, href: "/recordings" },
    { name: "Lessons", icon: HiPresentationChartBar, href: "/lessons" },
    { name: "Libraly", icon: PiBooks, href: "/libraly" },
    { name: "Messages", icon: FaEnvelope, href: "/messages", badge: 3 },
    { name: "Settings", icon: FaCog, href: "/settings" },
];

const LeftSidebar = () => {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false)

    return (
        <aside className="fixed z-20  h-15 md:flex flex-col items-center top-0 left-0 bg-white md:rounded-xl shadow md:p-4 md:h-screen md:w-[17%] w-full">
            <div className="w-full flex justify-between p-4 md:p-0 bg-white md:bg-none h-14">
                <h1 className="text-2xl font-bold mb-6 text-[#5855D8]">Bloom</h1>
                {
                    showMenu ?
                        <BiX size={30} className="fill-gray-900 md:hidden" onClick={() => { setShowMenu(!showMenu) }} />
                        : <BiMenu size={30} className="fill-gray-900 md:hidden" onClick={() => { setShowMenu(!showMenu) }} />
                }
            </div>

            <nav className={`${showMenu ? 'flex' : 'hidden md:flex'} bg-white font-semibold flex-col md:py-4 space-y-2 w-full text-gray-700 border-t border-gray-300`}>
                {navLinks.map(({ name, icon: Icon, href, badge }) => {
                    const isActive = pathname.includes(href);

                    return (
                        <Link
                            key={name}
                            href={`/tutors${href}`}
                            className={`cursor-pointer flex items-center gap-3 text-sm p-2 rounded ${isActive
                                ? "bg-[#f0f3f6] text-[#706DA2]"
                                : "hover:text-[#5C56D3] text-gray-700"
                                }`}
                        >
                            <Icon size={15} />

                            <span>{name}</span>
                            {badge && (
                                <span className="ml-auto text-xs bg-gray-500 text-white rounded-full px-2">
                                    {badge}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className={`hidden md:block absolute bottom-4 w-11/12 pt-4`}>
                <div className="bg-[#202938] text-white p-3 rounded-lg text-center">
                    <h3 className="font-semibold text-sm mb-2">Upgrade to Pro</h3>
                    <p className="text-sm mb-2 text-left">
                        Get access to advanced analytics and personalized lesson plans.
                    </p>
                    <a className="bg-[#5855D8] text-white text-sm px-3 py-1 rounded cursor-pointer">
                        Learn More
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default LeftSidebar;
