"use client"
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
const DarkModeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            type="button"
            className="cursor-pointer text-[#37352f] outline-0   z-9999 "
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {
                theme === "dark" ?
                    <div className="flex items-center space-x-2">
                        {/* <div className="rounded-full w-8 h-8 bg-[#5B57D0] p-1 flex items-center justify-center"> */}
                        <BsSun size={20} className="fill-black" />
                        {/* </div> */}

                        <p>Light mode</p>
                    </div>
                    :
                    <div className="flex items-center space-x-2">
                        {/* <div className="rounded-full w-8 h-8 bg-[#5B57D0] p-1 flex items-center justify-center"> */}
                        <BsMoon size={20} className="fill-black" />
                        {/* </div> */}
                        <p>Dark mode</p>
                    </div>
            }
        </button>
    );
};

export default DarkModeSwitcher;
