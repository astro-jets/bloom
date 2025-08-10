// components/LessonDetailsModal.tsx
'use client'
import React, { useRef, useState } from 'react';
import { useLessonModalStore } from '@/stores/useLessonModalSotre';
import { BiSolidVideoRecording } from 'react-icons/bi';


export const LessonDetailsModal: React.FC = () => {
    const {
        isModalOpen,
        notes,
        setNotes,
        resetForm,
    } = useLessonModalStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (true) {
            // Do any submission logic here (e.g., send to API)
            resetForm(); // closes modal + clears form + updates localStorage
        }
    };



    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const recordedChunksRef = useRef<Blob[]>([]);

    const [meetTab, setMeetTab] = useState<Window | null>(null);

    const startRecording = async () => {

        try {
            // Delay a bit so the tab loads (optional, adjust as needed)
            await new Promise(resolve => setTimeout(resolve, 1000));

            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: true,
            });

            const options = {
                mimeType: "video/webm;codecs=vp9,opus"
            };

            const mediaRecorder = new MediaRecorder(stream, options);
            recordedChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    recordedChunksRef.current.push(event.data);
                }
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
            // Open Google Meet tab but don't focus it
            const newTab = window.open('https://meet.google.com/hjf-eprb-ryv', '_blank', 'noopener,noreferrer');
            setMeetTab(newTab);
        } catch (err) {
            console.error("Error starting screen recording:", err);
            alert("Failed to start screen recording. Please allow screen and mic access.");
        }

    };


    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
    };

    // startRecording()
    if (!isModalOpen) return null;
    return (
        <div className="fixed inset-0 z-50 bg-[#ffffff69] backdrop-blur bg-opacity-50 flex items-center justify-center h-full">
            <div className=" z-60 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl w-full max-w-3xl p-2 relative overflow-y-auto h-[95%]">
                <div className=" custom-scrollbar w-full overflow-y-auto h-full p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">📋 Lesson Feedback</h2>
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
                                className="bg-red-600 space-x-4 flex items-center text-white px-4 py-1 rounded-sm shadow"
                                onClick={startRecording}
                            >
                                <span>Start Recording</span>
                                <BiSolidVideoRecording size={20} className='fill-white' />
                            </button>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Lesson Status Dropdown */}
                        <div>
                            <label className="block mb-1 font-semibold text-gray-700">Lesson Status</label>
                            <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                required
                            >
                                <option value="">Select status...</option>
                                <option value="delivered">Delivered</option>
                                <option value="rescheduled">Rescheduled</option>
                                <option value="no-show">No-show</option>
                            </select>
                        </div>

                        {/* Topics Covered Dropdown */}
                        {/* <div>
                            <label className="block mb-1 font-semibold text-gray-700">Topics Covered</label>
                            <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                required
                            >
                                <option value="">Choose topic...</option>
                                <option value="derivatives">Derivatives</option>
                                <option value="integrals">Integrals</option>
                                <option value="algebra">Algebraic Equations</option>
                                <option value="probability">Probability</option>
                            </select>
                        </div> */}

                        {/* Notes Textarea */}
                        {/* <div className="relative">
                            <label className="block mb-1 font-semibold text-gray-700">Lesson Summary & Observations</label>

                            <textarea
                                placeholder="Lesson Summary & Observations "
                                className="w-full px-4 pt-6 pb-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none peer"
                                rows={5}
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                required
                            />
                        </div> */}

                        {/* Homework Button */}
                        {/* <div className="flex flex-col md:flex-row items-start gap-4">
                        <label className="font-semibold text-gray-700">Assign Homework</label>
                        <button
                            type="button"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            onClick={() => alert('Open Homework Modal or Inline Form')}
                        >
                            ➕ Add Homework
                        </button>
                    </div> */}

                        {/* Upload Recording */}
                        {/* <div>
                            <label className="block mb-1 font-semibold text-gray-700">
                                Upload Google Meet Recording
                            </label>
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">  MP4 (MAX. 50mb)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={(e) => { console.log(e) }} />
                            </label>
                        </div> */}

                        {/* Additional Notes */}
                        {/* <div>
                            <label className="block font-semibold mb-1 text-gray-700">Additional Notes</label>
                            <textarea
                                placeholder="Optional comments, questions, or instructions..."
                                rows={4}
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            />
                        </div> */}

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700 transition"
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div >
    );
};
