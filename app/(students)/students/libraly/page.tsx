"use client"

import { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';
import StudentsLayout from '@/components/Layouts/StudentsLayout';

const resources = [
    {
        id: 1,
        title: "Chemical Reactions Explained",
        subject: "Chemistry",
        tutor: "Dr. Emily Parker",
        type: "Video",
        dateAdded: "2025-06-02",
        description: "Detailed explanation of chemical reactions with examples from the lab session on May 15th.",
    },
    {
        id: 2,
        title: "Calculus Practice Problems",
        subject: "Mathematics",
        tutor: "Prof. James Wilson",
        type: "PDF",
        dateAdded: "2025-05-28",
        description: "Additional practice problems for derivatives and integrals with step-by-step solutions.",
    },
    {
        id: 3,
        title: "Shakespeare's Hamlet Analysis",
        subject: "Literature",
        tutor: "Ms. Sarah Johnson",
        type: "Notes",
        dateAdded: "2025-06-05",
        description: "Comprehensive character analysis and themes from our class discussions.",
    },
    {
        id: 4,
        title: "World War II Timeline",
        subject: "History",
        tutor: "Dr. Robert Brown",
        type: "Worksheet",
        dateAdded: "2025-05-20",
        description: "Interactive timeline worksheet with key events and figures from 1939–1945.",
    },
    {
        id: 5,
        title: "Python Programming Basics",
        subject: "Computer Science",
        tutor: "Mr. David Lee",
        type: "Link",
        dateAdded: "2025-06-10",
        description: "Interactive tutorial on Python basics with code examples and exercises.",
    },
    {
        id: 6,
        title: "Cell Structure & Function",
        subject: "Biology",
        tutor: "Prof. Lisa Chen",
        type: "Video",
        dateAdded: "2025-05-15",
        description: "Detailed video lesson on cell organelles and their functions with 3D animations.",
    },
];

const favoritesMock = [
    { title: 'Algebra Formulas Cheat Sheet', subject: 'Mathematics' },
    { title: 'Periodic Table Interactive', subject: 'Chemistry' },
    { title: 'Literary Devices Reference', subject: 'Literature' },
    { title: 'Spanish Verb Conjugations', subject: 'Languages' },
    { title: 'Cell Division Video Lesson', subject: 'Biology' },
];

const ResourceCard = ({ resource }: { resource: typeof resources[0] }) => {
    const [liked, setLiked] = useState(false);
    return (
        <div className="bg-white rounded-md p-4 w-full max-w-xs">
            <div className="text-sm font-semibold text-gray-800 mb-1">{resource.title}</div>
            <div className="text-xs text-gray-500 mb-2">{resource.subject} - {resource.tutor}</div>
            <div className="text-xs text-gray-600 mb-4">{resource.description}</div>
            <div className="text-xs text-gray-400 mb-2">Added: {new Date(resource.dateAdded).toLocaleDateString()}</div>
            <div className="flex justify-between items-center">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">{resource.type}</span>
                <button onClick={() => setLiked(!liked)}>
                    {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
                </button>
            </div>
        </div>
    );
};

export default function ResourceLibrary() {
    return (
        <StudentsLayout>
            <div className="w-full  min-h-screen">
                {/* Search & Filters */}
                <div className="flex flex-col space-y-4">
                    <div className="flex relative">
                        <input
                            type="text"
                            className="w-full border pl-8 border-gray-300 rounded  py-2 text-sm"
                            placeholder="Search for notes, videos, worksheets..."
                        />
                        <BsSearch className="absolute left-3 top-3 text-gray-400" />
                        <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm">Search</button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 items-center">
                        <select className="border px-3 py-2 rounded text-sm">
                            <option>All Subjects</option>
                        </select>
                        <select className="border px-3 py-2 rounded text-sm">
                            <option>Resource Type</option>
                        </select>
                        <select className="border px-3 py-2 rounded text-sm">
                            <option>Date Added</option>
                        </select>
                    </div>
                </div>

                <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {resources.map((res) => (
                        <ResourceCard key={res.id} resource={res} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-6 space-x-2">
                    <button className="px-3 py-1 border rounded">1</button>
                    <button className="px-3 py-1 border rounded">2</button>
                    <button className="px-3 py-1 border rounded">3</button>
                </div>

                {/* Favorites */}
                <div className="fixed top-40 right-6 w-64 bg-gray-50 p-4 rounded shadow">
                    <h3 className="font-semibold text-lg mb-2">My Favorites</h3>
                    <ul className="space-y-2">
                        {favoritesMock.map((fav, i) => (
                            <li key={i} className="flex justify-between items-start text-sm">
                                <div>
                                    <div className="font-medium">{fav.title}</div>
                                    <div className="text-xs text-gray-500">{fav.subject}</div>
                                </div>
                                <FiX className="cursor-pointer text-gray-400" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </StudentsLayout>
    );
}
