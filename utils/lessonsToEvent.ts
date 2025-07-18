// utils/transformLessons.ts

export interface NewLesson {
  id: string;
  lessonDate: string; // "2025-07-15"
  startTime: string; // "14:00:00"
  endTime: string; // "15:00:00"
  Subject: {
    subject_id: number;
    subject_name: string;
  };
  tutor: {
    id: string;
    name: string;
    email: string;
    status: string;
    tutorProfile: {
      link: string;
    };
  };
  student: {
    id: string;
    name: string;
    email: string;
    status: string;
  };
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: string; // ISO datetime
  end: string;
  tutor: {
    id: string;
    name: string;
    status: string;
    tutorProfile: { link: string };
  };
  student: {
    id: string;
    name: string;
    status: string;
  };
}

export const lessonsToEvents = (lessons: NewLesson[]): CalendarEvent[] => {
  return lessons.map((lesson) => {
    const start = `${lesson.lessonDate}T${lesson.startTime}`;
    const end = `${lesson.lessonDate}T${lesson.endTime}`;

    return {
      id: lesson.id,
      title: lesson.Subject.subject_name.trim(),
      start,
      end,
      tutor: {
        id: lesson.tutor.id,
        name: lesson.tutor.name,
        status: lesson.tutor.status,
        tutorProfile: {
          link: lesson.tutor.tutorProfile.link,
        },
      },
      student: {
        id: lesson.student.id,
        name: lesson.student.name,
        status: lesson.student.status,
      },
    };
  });
};
