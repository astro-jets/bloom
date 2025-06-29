import DefaultLayout from "@/components/Layouts/DefaultLayout";
import RecordingCard from "@/components/Recordings/Recordingcard";
import RecordingFilters from "@/components/Recordings/RecordingFilters";
import RecordingPagination from "@/components/Recordings/RecordingPagination";
type Props = {
    title: string;
    duration: string;
    teacher: string;
    subject: string;
    timestamp: string;
    status: "Delivered" | "Missed" | "Canceled";
};

const dummyData: Props[] = [
    {
        title: "Advanced Calculus: Derivatives",
        duration: "45:12",
        teacher: "Emma Johnson",
        subject: "Mathematics",
        timestamp: "May 15, 2023 • 4:00 PM",
        status: "Delivered",
    },
    {
        title: "Shakespeare Macbeth",
        duration: "1:12:35",
        teacher: "Michael Chen",
        subject: "English Literature",
        timestamp: "May 12, 2023 • 5:30 PM",
        status: "Delivered",
    },
    {
        title: "Chemical Bonding: Ionic & Covalent",
        duration: "58:43",
        teacher: "Sophia Williams",
        subject: "Chemistry",
        timestamp: "May 10, 2023 • 3:15 PM",
        status: "Canceled",
    },
    {
        title: "World War II: Pacific Theater",
        duration: "1:05:22",
        teacher: "Lucas Garcia",
        subject: "History",
        timestamp: "May 8, 2023 • 4:45 PM",
        status: "Delivered",
    },
    {
        title: "Mechanics: Forces and Motion",
        duration: "52:18",
        teacher: "Emma Johnson",
        subject: "Physics",
        timestamp: "May 5, 2023 • 2:00 PM",
        status: "Missed",
    },
    {
        title: "Cell Biology: Structure and Function",
        duration: "1:22:07",
        teacher: "Michael Chen",
        subject: "Biology",
        timestamp: "May 3, 2023 • 5:00 PM",
        status: "Delivered",
    },
];

export default function RecordingsPage() {
    return (
        <DefaultLayout>
            <main className="md:ml-[17.3%] h-full p-2 md:p-4 w-full md:overflow-y-auto md:custom-scrollbar ">
                <h1 className="text-2xl font-semibold mb-1 mt-12 md:mt-0">Recordings</h1>
                <p className="text-gray-500 mb-4 text-sm">View and manage all your past lesson recordings</p>

                <RecordingFilters />

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6 ">
                    {dummyData.map((data, idx) => (
                        <RecordingCard key={idx} {...data} />
                    ))}
                </div>

                <RecordingPagination />
            </main>
        </DefaultLayout>
    );
}
