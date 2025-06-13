"use client"
import LeftSidebar from "./LeftSideBar";

const DefaultLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className="h-full bg-[#F3F4F6] dark:bg-[#24303F]  px-2 font-sans">
            <div className="relative h-screen flex">
                <LeftSidebar />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;