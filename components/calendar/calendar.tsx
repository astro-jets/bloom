// MyCalendar.jsx
"use client"
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for clickable dates

export default function MyCalendar() {
    const handleDateClick = (arg: { dateStr: string; }) => {
        alert(`Date clicked: ${arg.dateStr}`);
    };

    return (
        <div className="p-4 bg-white text-black shadow rounded-xl">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                events={[
                    { title: 'Math - Sophia Richards', date: '2025-06-09T14:00:00' },
                    { title: 'Physics - Astro Jets', date: '2025-06-09T18:00:00' },
                    { title: 'Chemistry - John Doe', date: '2025-06-10T10:30:00' },
                ]}
                dateClick={handleDateClick}
                height="auto"
            />
        </div>
    );
}
