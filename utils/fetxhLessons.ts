import axios from "axios";

export const fetchLessons = async () => {
  try {
    const res = await axios.get("https://bloom-ft06.onrender.com/api/schedule");
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
      "https://bloom-ft06.onrender.com/api/homework/getTutorHomework/f972df49-c125-4ae7-bc30-b3d6b399e126"
    );
    if (!res) {
      return [];
    }
    return res.data;
  } catch (error) {
    return error;
  }
};
