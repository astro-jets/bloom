"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import { FaVideo } from "react-icons/fa";

const dummyRecordings = [
    {
        title: "Algebra Basics",
        subject: "Mathematics",
        thumbnail: "https://img.youtube.com/vi/2vB8x1YkL0Y/0.jpg",
        videoUrl: "https://www.youtube.com/embed/2vB8x1YkL0Y",
    },
    {
        title: "Chemical Reactions",
        subject: "Science",
        thumbnail: "https://img.youtube.com/vi/FdM9v8Xfj3o/0.jpg",
        videoUrl: "https://www.youtube.com/embed/FdM9v8Xfj3o",
    },
    {
        title: "Shakespeare Overview",
        subject: "English",
        thumbnail: "https://img.youtube.com/vi/YtaHG1OtsCM/0.jpg",
        videoUrl: "https://www.youtube.com/embed/YtaHG1OtsCM",
    },
    {
        title: "Geometry - Angles",
        subject: "Mathematics",
        thumbnail: "https://img.youtube.com/vi/Zd8J5pXPDvY/0.jpg",
        videoUrl: "https://www.youtube.com/embed/Zd8J5pXPDvY",
    },
    {
        title: "Photosynthesis Explained",
        subject: "Science",
        thumbnail: "https://img.youtube.com/vi/UPBMG5EYydo/0.jpg",
        videoUrl: "https://www.youtube.com/embed/UPBMG5EYydo",
    },
    {
        title: "Romeo & Juliet - Act 1",
        subject: "English",
        thumbnail: "https://img.youtube.com/vi/6F-bJb_Grb0/0.jpg",
        videoUrl: "https://www.youtube.com/embed/6F-bJb_Grb0",
    },
    {
        title: "Trigonometry Basics",
        subject: "Mathematics",
        thumbnail: "https://img.youtube.com/vi/hwYrx3dZB0U/0.jpg",
        videoUrl: "https://www.youtube.com/embed/hwYrx3dZB0U",
    },
    {
        title: "Electricity & Circuits",
        subject: "Science",
        thumbnail: "https://img.youtube.com/vi/3HjIHXYvPYA/0.jpg",
        videoUrl: "https://www.youtube.com/embed/3HjIHXYvPYA",
    },
    {
        title: "Understanding Poetry",
        subject: "English",
        thumbnail: "https://img.youtube.com/vi/LNWH7Z1ryE4/0.jpg",
        videoUrl: "https://www.youtube.com/embed/LNWH7Z1ryE4",
    },
    {
        title: "World War I Summary",
        subject: "History",
        thumbnail: "https://img.youtube.com/vi/MtB1S4DdYvs/0.jpg",
        videoUrl: "https://www.youtube.com/embed/MtB1S4DdYvs",
    },
    {
        title: "Area & Perimeter",
        subject: "Mathematics",
        thumbnail: "https://img.youtube.com/vi/9jZi_QkJt48/0.jpg",
        videoUrl: "https://www.youtube.com/embed/9jZi_QkJt48",
    },
    {
        title: "Gravity & Motion",
        subject: "Science",
        thumbnail: "https://img.youtube.com/vi/URcP9IWN2vQ/0.jpg",
        videoUrl: "https://www.youtube.com/embed/URcP9IWN2vQ",
    },
    {
        title: "Analyzing Short Stories",
        subject: "English",
        thumbnail: "https://img.youtube.com/vi/3VTHo1eIXF8/0.jpg",
        videoUrl: "https://www.youtube.com/embed/3VTHo1eIXF8",
    },
    {
        title: "Fractions Made Easy",
        subject: "Mathematics",
        thumbnail: "https://img.youtube.com/vi/0JdIlKp5zyE/0.jpg",
        videoUrl: "https://www.youtube.com/embed/0JdIlKp5zyE",
    },
    {
        title: "The Water Cycle",
        subject: "Science",
        thumbnail: "https://img.youtube.com/vi/al-do-HGuIk/0.jpg",
        videoUrl: "https://www.youtube.com/embed/al-do-HGuIk",
    },
    {
        title: "Essay Writing 101",
        subject: "English",
        thumbnail: "https://img.youtube.com/vi/fGid0_3qn0Y/0.jpg",
        videoUrl: "https://www.youtube.com/embed/fGid0_3qn0Y",
    },
    {
        title: "Introduction to Algebra",
        subject: "Mathematics",
        thumbnail: "https://img.youtube.com/vi/XgSYFWLzU7I/0.jpg",
        videoUrl: "https://www.youtube.com/embed/XgSYFWLzU7I",
    },
    {
        title: "Human Digestive System",
        subject: "Science",
        thumbnail: "https://img.youtube.com/vi/nOJ1iDVG6-c/0.jpg",
        videoUrl: "https://www.youtube.com/embed/nOJ1iDVG6-c",
    },
    {
        title: "The Cold War Explained",
        subject: "History",
        thumbnail: "https://img.youtube.com/vi/fpL9eDFkHxI/0.jpg",
        videoUrl: "https://www.youtube.com/embed/fpL9eDFkHxI",
    },
    {
        title: "Comprehension Strategies",
        subject: "English",
        thumbnail: "https://img.youtube.com/vi/O0LAv3h-7T8/0.jpg",
        videoUrl: "https://www.youtube.com/embed/O0LAv3h-7T8",
    },
];


const uniqueSubjects = ["All", ...new Set(dummyRecordings.map((rec) => rec.subject))];

const Recordings = () => {
    const [filter, setFilter] = useState("All");

    const filteredRecordings =
        filter === "All"
            ? dummyRecordings
            : dummyRecordings.filter((rec) => rec.subject === filter);

    return (
        <DefaultLayout>
            <main className="h-full custom-scrollbar py-2 px-4 overflow-y-auto w-[83%] ml-[17.3%]">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <h2 className="text-2xl font-bold text-[#5855D8] flex items-center gap-2">
                            <FaVideo /> Recordings
                        </h2>
                        <p className="text-gray-500 text-sm">Browse and rewatch class recordings by subject.</p>
                    </div>

                    {/* Filter */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-gray-700">Filter by Subject:</label>
                        <select
                            className="text-sm rounded border-gray-300 focus:ring-[#5855D8] focus:border-[#5855D8]"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            {uniqueSubjects.map((subj, idx) => (
                                <option key={idx} value={subj}>
                                    {subj}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Grid of Videos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredRecordings.map((rec, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src={rec.videoUrl}
                                    title={rec.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    className="w-full h-full"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-3 bg-white border-t">
                                <h3 className="text-sm font-semibold text-gray-800">{rec.title}</h3>
                                <p className="text-xs text-gray-500">{rec.subject}</p>
                            </div>
                        </div>
                    ))}

                    {filteredRecordings.length === 0 && (
                        <p className="text-center text-gray-400 col-span-full">
                            No recordings found for {filter}
                        </p>
                    )}
                </div>
            </main>
        </DefaultLayout>
    );
};

export default Recordings;
