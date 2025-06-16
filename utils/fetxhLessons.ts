import axios from "axios";

export const fetchLessons = async () => {
  const res = await axios.get("https://bloom-ft06.onrender.com/api/schedule");
  return res.data;
};
