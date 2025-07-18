"use client"
import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface RawEvent {
    name: string;
    subject: string;
    timestamp: string; // ISO format
}

interface Props {
    events: RawEvent[];
}

const getStartOfWeek = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
};

const isToday = (date: Date) => {
    const now = new Date();
    return (
        now.getDate() === date.getDate() &&
        now.getMonth() === date.getMonth() &&
        now.getFullYear() === date.getFullYear()
    );
};

const formatDay = (date: Date) => ({
    label: date.toLocaleDateString("en-US", { weekday: "long" }),
    shortLabel: date.toLocaleDateString("en-US", { weekday: "short" }),
    day: date.getDate(),
    date,
});

const formatRangeLabel = (start: Date) => {
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    const format = (d: Date) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    return `${format(start)} - ${format(end)}`;
};

export const WeeklySchedule: React.FC<Props> = ({ events }) => {
    const [weekStart, setWeekStart] = useState(() => {
        const saved = localStorage.getItem("currentWeekStart");
        return saved ? new Date(saved) : getStartOfWeek(new Date());
    });

    useEffect(() => {
        localStorage.setItem("currentWeekStart", weekStart.toISOString());
    }, [weekStart]);

    const weekDays = Array.from({ length: 7 }, (_, i) => {
        const day = new Date(weekStart);
        day.setDate(weekStart.getDate() + i);
        return formatDay(day);
    });

    const filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.timestamp);
        return eventDate >= weekDays[0].date && eventDate <= weekDays[6].date;
    });

    const grouped: { [key: string]: { date: number; events: RawEvent[] } } = {};
    weekDays.forEach(({ label, day, date }) => {
        grouped[label] = {
            date: day,
            events: filteredEvents.filter(
                (e) => new Date(e.timestamp).toDateString() === date.toDateString()
            ),
        };
    });

    const handlePrevWeek = () => {
        const newStart = new Date(weekStart);
        newStart.setDate(weekStart.getDate() - 7);
        setWeekStart(newStart);
    };

    const handleNextWeek = () => {
        const newStart = new Date(weekStart);
        newStart.setDate(weekStart.getDate() + 7);
        setWeekStart(newStart);
    };

    return (
        <div className="rounded-sm overflow-x-auto bg-white shadow-default custom-scrollbar md:h-80">
            <div className="flex justify-between px-4 items-center">
                <h3 className="text-xl font-semibold my-2 text-[#2c2d39] px-2">
                    Schedule: <span className="text-primary">{formatRangeLabel(weekStart)}</span>
                </h3>
                <div className="flex space-x-3 items-center">
                    <span onClick={handlePrevWeek} className="cursor-pointer p-1 border border-gray-300 rounded shadow">
                        <BsChevronLeft className="fill-gray-700" size={20} />
                    </span>
                    <span onClick={handleNextWeek} className="cursor-pointer p-1 border border-gray-300 rounded shadow">
                        <BsChevronRight className="fill-gray-700" size={20} />
                    </span>
                </div>
            </div>

            <table className="border-0 w-full min-w-full table-auto">
                <thead>
                    <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-[#2c2d39]">
                        {weekDays.map((day) => (
                            <th
                                key={day.label}
                                className="flex flex-col h-10 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"
                            >
                                <span className="hidden lg:block">{day.label}</span>
                                <span className="block lg:hidden">{day.shortLabel}</span>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    <tr className="grid grid-cols-7 min-h-16 h-full">
                        {weekDays.map((day) => {
                            const isCurrent = isToday(day.date);
                            const items = grouped[day.label]?.events || [];

                            return (
                                <td key={day.label} className="flex flex-col space-y-1 relative cursor-pointer px-1">
                                    <span className={`font-medium text-center ${isCurrent ? "text-purple-700 font-bold" : "text-[#2c2d39]"}`}>
                                        {day.day}
                                    </span>

                                    {items.map((event, i) => {
                                        const time = new Date(event.timestamp).toLocaleTimeString("en-US", {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        });

                                        return (
                                            <div key={i} className="w-full h-16 overflow-hidden">
                                                <div
                                                    className={`rounded-lg bg-gray-100 z-99 mb-1 flex w-full flex-col px-2 py-1 text-left visible opacity-100 ${isToday(new Date(event.timestamp)) ? "border-l-2 border-purple-700 shadow-xl" : ""
                                                        }`}
                                                >
                                                    <span className="event-name text-sm font-semibold text-[#2c2d39]">{event.name}</span>
                                                    <span className="time text-sm font-medium text-[#2c2d39]">{event.subject}</span>
                                                    <span className="time text-xs text-gray-500">{time}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
