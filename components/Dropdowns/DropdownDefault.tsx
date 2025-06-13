"use client"
import { useEffect, useRef, useState } from "react";
import DarkModeSwitcher from "../themeMode/ThemeMode";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { BsDoorOpen, BsGear, BsPerson } from "react-icons/bs";

const DropdownDefault = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<HTMLButtonElement | null>(null);
  const dropdown = useRef<HTMLDivElement | null>(null);



  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (!trigger.current) return;
      // Type assertion to fix TS error
      if (
        !dropdownOpen ||
        dropdown.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative flex">
      <button
        className="text-[#101111] flex space-x-3 outline-0 items-center cursor-pointer hover:text-body"
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <p>Sarah Johnson</p>
        {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-9 z-40 w-60 p-1.5 py-2 space-y-6 rounded-sm outline-0 dark:bg-[#333A48] bg-white  shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? "block" : "hidden"
          }`}
      >
        <div className="flex space-x-3">
          <BsPerson size={20} />
          <p>Account</p>
        </div>
        <div className="flex space-x-3">
          <BsGear size={20} />
          <p>Settings</p>
        </div>

        <DarkModeSwitcher />

        <div className="flex space-x-3">
          <BsDoorOpen size={20} />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownDefault;
