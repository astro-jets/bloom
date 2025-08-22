import axios from "axios";

export const fetchLessons = async () => {
  try {
    const res = await axios.get(`${process.env.BE_LINK}/schedule`);
    if (!res) {
      return [];
    }
    return res.data;
  } catch (error) {
    return error;
  }
};

export const fetchTutorsHomeworks = async () => {
  try {
    const res = await axios.get(
      `${process.env.BE_LINK}/homework/getTutorHomework/f972df49-c125-4ae7-bc30-b3d6b399e126`
    );
    if (!res) {
      return [];
    }
    return res.data;
  } catch (error) {
    return error;
  }
};

export const fetchStudentsByTutor = async (tutorId: string) => {
  try {
    const res = await axios.get(
      `${process.env.BE_LINK}/tutor/students/${tutorId}`
    );
    return res?.data || [];
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

export const fetchHomeworkByStudent = async (studentId: string) => {
  try {
    const res = await axios.get(
      `${process.env.BE_LINK}/homework/getStudentHomework/${studentId}`
    );
    return res?.data || [];
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

export const fetchHomeworkById = async (id: string) => {
  try {
    const res = await axios.get(`${process.env.BE_LINK}/homework/${id}`);
    return res?.data || [];
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

export const fetchHomeworkFile = async (id: string) => {
  try {
    const res = await axios.get(
      `${process.env.BE_LINK}/homework/downloadHomework/${id}`
    );
    return res?.data || [];
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

export const fetchStudent = async (id: string) => {
  try {
    const res = await axios.get(`${process.env.BE_LINK}/students/${id}`);
    return res?.data || [];
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

export const assignHomework = async (
  payload: {
    studentId: string;
    lessonId: string;
    title: string;
    description: string;
    dueDate: string; // ISO string
    file: File;
  },
  tutorId: string
) => {
  const formData = new FormData();
  formData.append("studentId", payload.studentId);
  formData.append("lessonId", payload.lessonId);
  formData.append("title", payload.title);
  formData.append("description", payload.description);
  formData.append("dueDate", payload.dueDate);
  formData.append("file", payload.file);

  return await axios.post(
    `https://bloom-ft06.onrender.com/api/homework/assigneHomework/${tutorId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const signIn = async (formData: {}): Promise<any> => {
  const response = await fetch(`${process.env.BE_LINK}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw Error("Invalid credentials");
  }
  const res = await response.json();
  return await res.user;
};

export const fetchStudentSchedule = async (id: string) => {
  try {
    const res = await axios.get(
      `${process.env.BE_LINK}/schedule/student/${id}`
    );
    if (!res) {
      return [];
    }
    return res.data;
  } catch (error) {
    return error;
  }
};

export const fetchTutorSchedule = async (id: string) => {
  try {
    const res = await axios.get(`${process.env.BE_LINK}/schedule/tutor/${id}`);
    if (!res) {
      return [];
    }
    return res.data;
  } catch (error) {
    return error;
  }
};

export const fetchThreads = async (id: string) => {
  try {
    const res = await axios.get(
      `${process.env.BE_LINK}/messages/conversation-partners/${id}`
    );
    if (!res) {
      return [];
    }
    return res.data;
  } catch (error) {
    return error;
  }
};

export const fetchMessages = async (userId: string, threadId: string) => {
  try {
    const res = await axios.get(
      `https://bloom-ft06.onrender.com/api/messages/direct/${userId}/${threadId}`
    );
    if (!res) {
      return [];
    }
    return res.data;
  } catch (error) {
    return error;
  }
};

export const sendMessage = async (payload: {
  senderId: string;
  receiverId: string;
  content: string;
}) => {
  const response = await axios.post(
    "https://bloom-ft06.onrender.com/api/messages/send",
    payload
  );
  return response.data;
};

export const submitHomework = async (
  formData: FormData,
  homeworkID: string
) => {
  try {
    const response = await axios.post(
      `https://bloom-ft06.onrender.com/api/homework/submitHomework/${homeworkID}`,
      formData,
      {
        headers: {
          // Let Axios set the multipart boundary automatically
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Homework submission failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchTopicsBySubject = async (subjectId: string) => {
  try {
    const res = await axios.get(
      `https://bloom-ft06.onrender.com/api/subjects/subjectTopics/${subjectId}`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const logLessonFeedback = async (
  lessonId: string,
  formData: FormData
) => {
  return await axios.post(
    `https://bloom-ft06.onrender.com/api/schedule/lesson-log/197bc4e5-d824-4eb2-9ba4-4fb01f21abeb/${lessonId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
