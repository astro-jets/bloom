// utils/transformLessons.ts

export interface Lesson {
  id: number;
  subject: string;
  lessonDate: string; // ISO string
  startTime: string; // "09:00:00"
  endTime: string; // "09:45:00"

  tutor: {
    id: string;
    name: string;
    status: string;
    tutorProfile: { id: string; link: string };
  };
  student: { id: string; name: string; status: string };
}

export interface CalendarEvent {
  id: string;
  tutor: {
    id: string;
    name: string;
    status: string;
    tutorProfile: { id: string; link: string };
  };
  student: { id: string; name: string; status: string };
  title: string;
  start: string; // ISO datetime string
  end: string; // ISO datetime string
}
export const lessonsToEvents = (lessons: Lesson[]): CalendarEvent[] => {
  return lessons.map((lesson) => {
    const date = lesson.lessonDate.split("T")[0]; // Just the date
    const start = `${date}T${lesson.startTime}`;
    const end = `${date}T${lesson.endTime}`;

    return {
      id: lesson.id.toString(),
      title: lesson.subject.trim(),
      tutor: lesson.tutor,
      student: lesson.student,
      start,
      end,
    };
  });
};
