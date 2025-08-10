interface RawEvent {
  name: string; // student OR tutor name
  subject: string; // Subject.subject_name
  timestamp: string; // ISO string
}

interface LessonBase {
  id: string;
  lessonDate: string;
  startTime: string;
  endTime: string;
  status: string;
  Subject: {
    subject_id: number;
    subject_name: string;
  };
}

interface StudentLesson extends LessonBase {
  tutor: {
    id: string;
    name: string;
    email: string;
  };
}

interface TutorLesson extends LessonBase {
  student: {
    id: string;
    name: string;
    email: string;
  };
}

type Lesson = StudentLesson | TutorLesson;

export const parseWeeklyEvents = (
  lessons: Lesson[],
  role: string
): RawEvent[] => {
  return lessons.map((lesson) => ({
    // 👇 dynamically pick the right name depending on role
    name:
      role === "student"
        ? (lesson as StudentLesson).tutor.name
        : (lesson as TutorLesson).student.name,
    subject: lesson.Subject.subject_name,
    timestamp: `${lesson.lessonDate}T${lesson.startTime}`, // ISO format
  }));
};
