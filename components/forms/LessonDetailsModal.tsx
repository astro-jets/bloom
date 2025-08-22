// components/LessonDetailsModal.tsx
'use client'
import React, { useRef, useState } from 'react';
import { useLessonModalStore } from '@/stores/useLessonModalSotre';
import { BiSolidVideoRecording, BiVideoRecording } from 'react-icons/bi';
import { BsX } from 'react-icons/bs';

export const LessonDetailsModal = ({ topics }: { topics: { topic_id: string; topic_name: string }[] }) => {
    const { isModalOpen, resetForm } = useLessonModalStore();
    const [filteredTopics, setFilteredTopics] = useState(topics); // initially all

    // local state for form fields
    const [lessonStatus, setLessonStatus] = useState('');
    const [topic, setTopic] = useState('');
    const [notes, setNotes] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [submitting, setSubmitting] = useState(false);

    // recording stuff
    const [isRecording, setIsRecording] = useState(false);
    const [lessonEnded, setLessonEnded] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const recordedChunksRef = useRef<Blob[]>([]);
    const [meetTab, setMeetTab] = useState<Window | null>(null);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

    console.log(meetTab)


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // topicID
        // subtopicID
        // tutor ID
        // topic notes
        // topic is completed
        // sub-topic is completed
        // lesson summary
        // Recording
        // time joined

        if (!lessonStatus || !topic || !notes) {
            alert("Please fill all required fields.");
            return;
        }

        try {
            setSubmitting(true);

            // use FormData because of file
            const formData = new FormData();
            formData.append("lessonStatus", lessonStatus);
            formData.append("topic", topic);
            formData.append("notes", notes);
            if (file) formData.append("recording", file);

            // POST to your API route (replace with your backend endpoint)
            const res = await fetch("/api/lessons/feedback", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error("Failed to submit feedback");
            }

            alert("Feedback submitted successfully ✅");
            resetForm(); // close modal + clear
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };


    const startRecording = async () => {
        const newTab = window.open('https://meet.google.com/hjf-eprb-ryv', '_blank', 'noopener,noreferrer');
        setMeetTab(newTab);

        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: true,
            });

            const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm;codecs=vp9,opus" });
            recordedChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) recordedChunksRef.current.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `Lesson_${new Date().toISOString()}.webm`;
                a.click();
            };

            mediaRecorder.start();
            mediaRecorderRef.current = mediaRecorder;
            setIsRecording(true);

        } catch (err) {
            console.error("Error starting screen recording:", err);
            alert("Failed to start screen recording. Please allow screen and mic access.");
        }
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
        setLessonEnded(true)
    };

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-[#ffffff69] backdrop-blur bg-opacity-50 flex items-center justify-center h-full">
            <div className=" z-60 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl w-full max-w-3xl p-2 relative overflow-y-auto h-[95%]">
                <div className=" custom-scrollbar w-full overflow-y-auto h-full p-6">
                    {/* Recording controls */}
                    {
                        !lessonEnded &&
                        <div className="flex justify-between mt-2">
                            {isRecording ? (
                                <button
                                    className="bg-red-600 space-x-4 flex items-center text-white px-4 py-1 rounded-sm shadow"
                                    onClick={stopRecording}
                                >
                                    <span>Stop Recording</span>
                                    <BiSolidVideoRecording size={20} className='fill-white' />
                                </button>
                            ) : (
                                <button
                                    className="bg-purple-600 cursor-pointer space-x-4 flex items-center text-white px-4 py-1 rounded-sm shadow"
                                    onClick={startRecording}
                                >
                                    <span>Start Lesson</span>
                                    <BiSolidVideoRecording size={20} className='fill-white' />
                                </button>
                            )}
                        </div>
                    }
                    {/* FORM */}
                    {
                        lessonEnded &&
                        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                            {/* Lesson Status Dropdown */}
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Lesson Status</label>
                                <select
                                    value={lessonStatus}
                                    onChange={(e) => setLessonStatus(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                    required
                                >
                                    <option value="">Select status...</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="rescheduled">Rescheduled</option>
                                    <option value="no-show">No-show</option>
                                </select>
                            </div>

                            {/* Topics Covered with Search */}
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Topics Covered</label>
                                <input
                                    type="text"
                                    placeholder="Search topics..."
                                    className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                    onChange={(e) => {
                                        const searchValue = e.target.value.toLowerCase();
                                        setFilteredTopics(
                                            topics.filter((t) => t.topic_name.toLowerCase().includes(searchValue))
                                        );
                                    }}
                                />

                                {/* Display filtered topics as checkboxes */}
                                <div className="flex flex-col space-y-2 max-h-40 overflow-y-auto border border-purple-500 rounded-xl p-3 custom-scrollbar">
                                    {filteredTopics.map((topic) => (
                                        <label key={topic.topic_id} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                value={topic.topic_name}
                                                checked={selectedTopics.includes(topic.topic_name)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSelectedTopics([...selectedTopics, topic.topic_name]);
                                                    } else {
                                                        setSelectedTopics(
                                                            selectedTopics.filter((t) => t !== topic.topic_name)
                                                        );
                                                    }
                                                }}
                                                className="h-4 w-4 text-purple-600 border-gray-300 rounded"
                                            />
                                            <span>{topic.topic_name}</span>
                                        </label>
                                    ))}
                                </div>

                                {/* Display selected topics as tags */}
                                {selectedTopics.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {selectedTopics.map((t) => (
                                            <span
                                                key={t}
                                                className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                                            >
                                                {t}
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedTopics(selectedTopics.filter((topic) => topic !== t))
                                                    }
                                                    className="text-purple-500 hover:text-purple-700"
                                                >
                                                    <BsX className='fill-purple-500' size={20} />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>


                            <div className="flex space-x-6">
                                {/* Notes Textarea */}
                                <div className="relative w-[65%]">
                                    <label className="block mb-1 font-semibold text-gray-700">Lesson Summary & Observations</label>
                                    <textarea
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        placeholder="Lesson Summary & Observations "
                                        className="w-full px-4 pt-6 pb-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none peer"
                                        rows={5}
                                        required
                                    />
                                </div>

                                {/* Upload Recording */}
                                <div className='w-[30%] flex flex-col items-center'>
                                    <label className="block mb-1 font-semibold text-gray-700">
                                        {!file ? <span>Upload Lesson Recording</span> : <span>Vide Uploaded</span>}
                                    </label>
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">

                                            {
                                                file ?
                                                    <>
                                                        <BiVideoRecording size={50} className='fill-gray-500' />
                                                        <p className="text-sm text-center mt-2 text-gray-600">{file.name}</p>
                                                    </> :
                                                    <>
                                                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                        <p className="text-xs text-gray-500">  MP4/WEBM (MAX. 50mb)</p>
                                                    </>
                                            }
                                        </div>
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            accept="video/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
                                            }}
                                        />
                                    </label>

                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-4">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700 transition disabled:opacity-60"
                                >
                                    {submitting ? "Submitting..." : "Submit Feedback"}
                                </button>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div >
    );
};
