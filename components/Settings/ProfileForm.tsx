// components/Settings/ProfileForm.tsxx
"use client";
import { useState } from "react";
import NotificationSettings from "./NotificationsSettings";
import CertificateUpload from "./CertificateUpload";
import AvailabilityForm from "./AvailabilityForn";
import Image from "next/image";

export default function ProfileForm() {
    const [subjects, setSubjects] = useState(["Mathematics", "Physics", "Computer Science"]);
    const [newSubject, setNewSubject] = useState("");
    // Input form class
    const input = "border border-gray-300 rounded px-3.1 py-2 w-full focus:outline-none focus:ring-1 focus:ring-purple-400";

    const handleAdd = () => {
        if (newSubject.trim()) {
            setSubjects([...subjects, newSubject.trim()]);
            setNewSubject("");
        }
    };

    const handleRemove = (subject: string) => {
        setSubjects(subjects.filter((s) => s !== subject));
    };

    return (
        <div className="flex flex-col space-y-4">
            <div id="profile" className="scroll-mt-24 space-y-6 p-4 pb-6 shadow rounded bg-white">
                <div className="flex flex-col space-y-1 w-full border-b border-gray-300 pb-3">
                    <h1 className="text-gray-900">Personal Information</h1>
                    <p className="text-gray-500 text-sm">Update your personal details and public info</p>
                </div>
                {/* Profile Picture */}
                <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image className="w-full h-full object-cover" alt="" width={500} height={500} src={'/images/user-02.png'} />
                    </div>

                    <div className="flex flex-col">
                        <div className="text-gray-900">Profile photo</div>
                        <div className="text-gray-500 text-sm">This will be displayed on your profile</div>
                        <div className="mt-2">
                            <button className="px-3 py-1 shadow bg-purple-500 text-white rounded mr-2">Upload Photo</button>
                            <button className="px-3 py-1 shadow border border-gray-300 rounded text-sm">Remove</button>
                        </div>
                    </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="pl-1">
                        <label className="block text-sm mb-1">First Name</label>
                        <input className={input} placeholder="First Name" defaultValue="John" />
                    </div>

                    <div className="pl-1">
                        <label className="block text-sm mb-1">Last Name</label>
                        <input className={input} placeholder="Last Name" defaultValue="Doe" />
                    </div>

                    <div className="pl-1">
                        <label className="block text-sm mb-1">Email</label>
                        <input className={input} placeholder="Email Address" defaultValue="john.doe@example.com" />
                    </div>

                    <div className="pl-1">
                        <label className="block text-sm mb-1">Phone Number</label>
                        <input className={input} placeholder="Phone Number" defaultValue="+1 (555) 123-4567" />
                    </div>

                </div>

                {/* Subjects */}
                <div>
                    <label className="block text-sm mb-2 pl-1 font-semibold">Subjects You Teach</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {subjects.map((subject) => (
                            <span
                                key={subject}
                                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full flex items-center space-x-2"
                            >
                                <span>{subject}</span>
                                <button onClick={() => handleRemove(subject)} className="text-sm">×</button>
                            </span>
                        ))}
                    </div>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            className={`${input} w-full`}
                            placeholder="Add a subject"
                            value={newSubject}
                            onChange={(e) => setNewSubject(e.target.value)}
                        />
                        <button className="px-4 bg-purple-500 text-white rounded" onClick={handleAdd}>Add</button>
                    </div>
                </div>

                {/* Bio */}
                <div>
                    <label className="block pl-1 font-semibold  mb-1">Professional Bio</label>
                    <textarea
                        className="w-full border border-gray-300 p-2 rounded min-h-[100px]"
                        placeholder="Enter your bio..."
                        defaultValue="Experienced tutor with over 10 years of teaching experience in Mathematics, Physics, and Computer Science..."
                    />
                </div>
            </div>
            <div id="certificates" className="scroll-mt-24">
                <CertificateUpload />
            </div>

            <div id="availability" className="scroll-mt-24">
                <AvailabilityForm />
            </div>

            <div id="notifications" className="scroll-mt-24">
                <NotificationSettings />
            </div>
            <button className="px-4 bg-purple-500 text-white rounded w-35 ml-auto h-10 shadow-lg cursor-pointer">Save Changes</button>
        </div>
    );
}
