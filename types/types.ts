export interface Topic {
  topic_id: string;
  topic_name: string;
  subtopic_id: string;
  subtopic_name: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "tutor" | "student"; // or just string if roles vary
  status: "active" | "inactive" | string;
  token?: string; // optional because NextAuth attaches it to JWT
};

export interface Homework {
  id: string;
  title: string;
  dueDate: string;
  subject: string;
  lessonDate: string;
  lessonId: string;
  submissions?: []; // Optional: define or adjust `Submission` type
}

export interface Lesson {
  isHomeworkAssigned: boolean;
  Subject: {
    subject_id: number;
    subject_name: string;
    description: string;
  };
  tutor: {
    id: string;
    name: string;
    email: string;
  };
  homeworks: Homework[];
  id: string;
  lessonDate: string; // format: YYYY-MM-DD
  startTime: string; // format: HH:mm:ss
  endTime: string; // format: HH:mm:ss
  status: "Scheduled" | "Completed" | string;
}

export interface StudentPackage {
  id: string;
  status: "active" | "inactive" | string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  status: "active" | "inactive" | string;
  studentPackage: StudentPackage;
  lessons: Lesson[];
  homeworks?: Homework[];
}
