// utils/transformLessons.ts
import { Session } from "next-auth";

export interface NewLesson {
  id: string;
  lessonDate: string;
  startTime: string;
  endTime: string;
  Subject: {
    subject_id: number;
    subject_name: string;
  };
  tutor?: {
    id: string;
    name: string;
    email: string;
    status?: string;
    tutorProfile?: { link?: string };
  };
  student?: {
    id: string;
    name: string;
    email: string;
    status?: string;
  };
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  tutor: {
    id: string;
    name: string;
    status: string;
    tutorProfile: { link: string | null };
  };
  student: {
    id: string;
    name: string;
    status: string;
  };
}

/**
 * Converts lessons into calendar events, filling missing tutor/student info with session details.
 * @param lessons Array of lessons from API
 * @param session NextAuth session object (contains logged in user info)
 * @param role Role of logged in user ('student' | 'tutor')
 */
export const lessonsToEvents = (
  lessons: NewLesson[],
  session: Session,
  role: "student" | "tutor"
): CalendarEvent[] => {
  return lessons.map((lesson) => {
    const start = `${lesson.lessonDate}T${lesson.startTime}`;
    const end = `${lesson.lessonDate}T${lesson.endTime}`;

    // ✅ Fill tutor info: from lesson if available, otherwise from session if tutor logged in
    const tutorData =
      lesson.tutor ||
      (role === "tutor"
        ? {
            id: session.user.id,
            name: session.user.name || "Unknown Tutor",
            status: "active",
            tutorProfile: { link: null },
          }
        : null);

    // ✅ Fill student info: from lesson if available, otherwise from session if student logged in
    const studentData =
      lesson.student ||
      (role === "student"
        ? {
            id: session.user.id,
            name: session.user.name || "Unknown Student",
            status: "active",
          }
        : null);

    return {
      id: lesson.id,
      title: lesson.Subject.subject_name.trim(),
      start,
      end,
      tutor: {
        id: tutorData?.id || "",
        name: tutorData?.name || "",
        status: tutorData?.status || "active",
        tutorProfile: {
          link: tutorData?.tutorProfile?.link || null,
        },
      },
      student: {
        id: studentData?.id || "",
        name: studentData?.name || "",
        status: studentData?.status || "active",
      },
    };
  });
};
