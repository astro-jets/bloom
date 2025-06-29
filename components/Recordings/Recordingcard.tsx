import { FaBook, FaCalendar, FaPlay, FaUserGraduate } from "react-icons/fa";

type Props = {
    title: string;
    duration: string;
    teacher: string;
    subject: string;
    timestamp: string;
    status: "Delivered" | "Missed" | "Canceled";
};

const badgeColors = {
    Delivered: "bg-green-100 text-green-600",
    Missed: "bg-yellow-100 text-yellow-700",
    Canceled: "bg-red-100 text-red-600",
};

export default function RecordingCard({ title, duration, teacher, subject, timestamp, status }: Props) {
    return (
        <div className="bg-white rounded shadow p-4 flex flex-col space-y-2">
            <div className="relative w-full h-40 bg-purple-100 rounded flex items-center justify-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow">
                    <FaPlay />
                </div>
                <span className="absolute bottom-2 right-2 text-sm bg-gray-800 text-white px-2 py-1 rounded">{duration}</span>
            </div>

            <h2 className="text-sm font-semibold line-clamp-2">{title}</h2>

            <div className="text-sm flex space-x-2">
                <FaUserGraduate size={15} className="fill-gray-400" />
                <p>{teacher}</p>
            </div>

            <div className="text-sm flex space-x-2">
                <FaBook size={15} className="fill-gray-400" />
                <p>{subject}</p>
            </div>
            <div className="text-sm flex justify-between">
                <div className="text-sm flex space-x-2">
                    <FaCalendar size={15} className="fill-gray-400" />
                    <p>{timestamp}</p>
                </div>
                <p className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${badgeColors[status]}`}>
                    {status}
                </p>
            </div>


        </div>
    );
}
