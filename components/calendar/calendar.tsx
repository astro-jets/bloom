// MyCalendar.jsx
"use client"
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for clickable dates
import { FaPlay } from 'react-icons/fa';
import { BsX } from 'react-icons/bs';
import { fetchLessons } from '@/utils/fetxhLessons';
import { lessonsToEvents } from '@/utils/lessonsToEvent';
import moment from 'moment'
import { EventClickArg, EventContentArg } from '@fullcalendar/core/index.js';

type LessonEvent = {
    id: string;
    title: string;
    start: string; // ISO datetime string
    end: string; // ISO datetime string
    recorded?: string | null;
}

export default function MyCalendar() {
    const [events, setEvents] = useState<LessonEvent[] | null>([]);
    const [selectedEvent, setSelectedEvent] = useState<LessonEvent | null>(null);

    useEffect(() => {
        const loadLessons = async () => {
            try {
                const rawLessons = await fetchLessons();
                const formattedEvents = lessonsToEvents(rawLessons);
                setEvents(formattedEvents);
            } catch (err) {
                console.error("Failed to load lessons", err);
            }
        };

        loadLessons();
    }, []);

    // const handleDateClick = (arg: { dateStr: string; }) => {
    //     alert(`Date clicked: ${arg.dateStr}`);
    // };
    const handleEventClick = (info: EventClickArg) => {
        const eventId = info.event.id.toString();
        const eventData = events?.find((e: { id: string; }) => e.id === eventId);
        if (!eventData) { return }
        setSelectedEvent(eventData);
        console.log("info => ", eventData)
    };

    const renderEventContent = (eventInfo: EventContentArg) => {
        // const isRecorded = eventInfo.event.extendedProps.recorded;
        const time = new Date(eventInfo.event.start as unknown as string).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });

        return (
            <div className="w-full text-xs leading-snug cursor-pointer">
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800 truncate">
                        {eventInfo.event.title}
                    </span>
                    {/* {isRecorded && */}
                    <FaPlay size={12} className="text-gray-600 ml-2 shrink-0" />
                    {/* //  } */}
                </div>
                <div className="text-gray-500">{time}</div>
            </div>
        );
    };

    const closeModal = () => setSelectedEvent(null);
    console.log("Events => ", events)

    return (
        <div className="bg-white text-black shadow rounded-xl overflow-y-auto custom-scrollbar w-full">
            {events &&
                <FullCalendar
                    eventTimeFormat={{
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    }}

                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,title,next',
                        center: '',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay, today',
                    }}
                    events={events}
                    eventContent={renderEventContent}
                    eventClick={handleEventClick}
                    height="auto"
                />}

            {selectedEvent && (
                <div className="fixed inset-0 bg-[#000000c5] flex items-center justify-center z-50">
                    <div className="left-[8%] relative bg-white rounded-2xl p-6 w-4/5 h-5/6 shadow-2xl border border-gray-100 overflow-y-auto">

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition"
                        >
                            <BsX className="w-6 h-6 fill-black" />
                        </button>

                        {/* Main Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">

                            {/* Left Side: Avatars + Info */}
                            <div className="space-y-6 col-span-1 flex flex-col justify-between">
                                {/* Header */}
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-semibold text-gray-800">{selectedEvent.title}</h2>
                                    <p className="text-sm text-gray-500"><strong>Date:</strong> {moment(selectedEvent.end).calendar()}</p>
                                </div>

                                {/* Tutor Info */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={'/images/user-04.png'}
                                        alt="Tutor"
                                        className="w-12 h-12 rounded-full object-cover shadow-md hover:scale-105 transition-transform"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-500">Tutor</p>
                                        <p className="font-medium text-gray-800">Tutor Name</p>
                                    </div>
                                </div>

                                {/* Student Info */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={'/images/user-02.png'}
                                        alt="Student"
                                        className="w-12 h-12 rounded-full object-cover shadow-md hover:scale-105 transition-transform"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-500">Student</p>
                                        <p className="font-medium text-gray-800">Student Name</p>
                                    </div>
                                </div>

                                {/* Lesson Description */}
                                <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700">
                                    <p>{'This lesson covered key concepts and included both guided and interactive sessions.'}</p>
                                </div>

                                {/* Recording Info */}
                                {/* {selectedEvent.recorded && ( */}
                                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-md w-fit">
                                    <FaPlay className="w-4 h-4" />
                                    <span className="text-sm font-medium">Recording Available</span>
                                </div>
                                {/* )} */}
                            </div>

                            {/* Right Side: Video or Placeholder */}
                            <div className="col-span-2 flex items-center justify-center bg-black/5 rounded-xl border border-gray-200 p-4">
                                {/* {selectedEvent.videoUrl ? ( */}
                                {/* <video
                                        controls
                                        className="w-full h-full rounded-xl shadow-md"
                                        src={}
                                    /> */}
                                <iframe
                                    className="w-full h-full rounded-xl"
                                    src={`https://www.youtube.com/embed/FdM9v8Xfj3o`}
                                    title="Lesson Video"
                                    allowFullScreen
                                />

                                {/* ) : (
                                    <div className="text-center text-gray-500 text-sm">
                                        <p>No video available for this lesson.</p>
                                    </div>
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>

            )}


        </div>
    );
}
