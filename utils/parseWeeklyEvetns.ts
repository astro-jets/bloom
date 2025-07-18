import { CalendarEvent } from "./lessonsToEvent";
interface RawEvent {
  name: string; // student.name
  subject: string; // Subject.subject_name
  timestamp: string; // ISO string from lessonDate + startTime
}

interface Lesson {
  id: string;
  student: { id: string; name: string; email: string; status: string };
  tutor: {
    id: string;
    name: string;
    email: string;
    status: string;
    tutorProfile: { link: string };
  };
  Subject: { subject_id: number; subject_name: string };
  lessonDate: string; // e.g. "2025-07-11"
  startTime: string; // e.g. "09:00:00"
  // other fields...
}

export const parseWeeklyEvents = (lessons: Lesson[]): RawEvent[] => {
  return lessons.map((lesson) => ({
    name: lesson.student.name,
    subject: lesson.Subject.subject_name,
    timestamp: `${lesson.lessonDate}T${lesson.startTime}`, // ISO format
  }));
};
