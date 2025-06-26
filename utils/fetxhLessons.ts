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
