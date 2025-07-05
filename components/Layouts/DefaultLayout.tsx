"use client"
import { LessonDetailsModal } from "../LessonDetailsModal";
import LeftSidebar from "./LeftSideBar";

const DefaultLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className="h-full bg-[#F3F4F6] dark:bg-[#24303F]  md:px-2 font-sans">
            <div className="relative h-screen flex flex-col md:flex-row">
                <LeftSidebar />
                {children}
                <LessonDetailsModal />
            </div>
        </div>
    );
}

export default DefaultLayout;