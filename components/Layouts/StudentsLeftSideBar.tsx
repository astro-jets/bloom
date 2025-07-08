"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiLineChart, BiMenu, BiX } from "react-icons/bi";
import { FaUserGraduate, FaBook, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { PiBooks } from "react-icons/pi";
import { useState } from "react";
import { BsCreditCard, BsQrCodeScan } from "react-icons/bs";

const navLinks = [
    { name: "Dashboard", icon: BiLineChart, href: "/dashboard" },
    { name: "Schedule", icon: FaCalendarAlt, href: "/schedule" },
    { name: "Homework", icon: FaBook, href: "/homework" },
    { name: "Messages", icon: FaEnvelope, href: "/messages", badge: 3 },
    { name: "Lessons", icon: FaUserGraduate, href: "/lessons" },
    { name: "Libraly", icon: PiBooks, href: "/libraly" },
    { name: "Payments", icon: BsCreditCard, href: "/Payments" },
];

const StudentsLeftSideBar = () => {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false)

    return (
        <aside className="fixed z-20  h-15 md:flex flex-col items-center top-0 left-0 bg-[#111] shadow md:p-4 md:h-screen md:w-[17%] w-full">
            <div className="w-full flex justify-between p-4 md:p-0 bg-[#111] md:bg-none h-14">
                <h1 className="text-2xl font-bold mb-6 text-white text-center w-3/4">Bloom</h1>
                {
                    showMenu ?
                        <BiX size={30} className="fill-[#111] md:hidden" onClick={() => { setShowMenu(!showMenu) }} />
                        : <BiMenu size={30} className="fill-[#111] md:hidden" onClick={() => { setShowMenu(!showMenu) }} />
                }
            </div>

            <nav className={`${showMenu ? 'flex' : 'hidden md:flex'}  font-semibold flex-col md:py-4 space-y-4 w-full text-gray-700`}>
                {navLinks.map(({ name, icon: Icon, href, badge }) => {
                    const isActive = pathname.includes(href);

                    return (
                        <Link
                            key={name}
                            href={`/students${href}`}
                            className={`cursor-pointer flex items-center gap-3 text-sm p-2 rounded text-white hover:text-[#5C56D3] ${isActive
                                ? "bg-[#1c1d1f]"
                                : " text-gray-700"
                                }`}
                        >
                            <Icon size={15} />

                            <span>{name}</span>
                            {badge && (
                                <span className="ml-auto text-xs bg-red-600 text-white rounded-full px-2 py-1 flex items-center justify-center">
                                    {badge}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className={`hidden md:block absolute bottom-12 w-11/12 pt-4`}>
                <div className="bg-[#1d1d1f] text-white p-3 flex flex-col items-center justify-center rounded-lg text-center">
                    <h3 className="font-semibold text-sm mb-2">Pay with QR Code</h3>
                    <BsQrCodeScan size={80} color="white" />
                </div>
            </div>
        </aside>
    );
};

export default StudentsLeftSideBar;
