"use client"
import { FormEvent, useState } from 'react';
import { Lesson } from '@/types/types';
import { assignHomework } from '@/utils/routes';
import SuccessModal from "./SuccessModal"; // adjust path if needed
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

type props = {
    isOpen: boolean;
    onClose: () => void;
    lessons: Lesson[];
    studentId: string;
}
export default function AssignHomeworkModal({ isOpen, onClose, lessons, studentId }: props) {
    const [selectedLessonId, setSelectedLessonId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const router = useRouter()
    const { data: session } = useSession();
    const user = session?.user


    if (!isOpen) return null;

    // Filter only lessons taught by the logged-in tutor and with no homework assigned
    const tutorLessons = lessons
        .filter(lesson => user?.id === user?.id && !lesson.isHomeworkAssigned)
        .map(lesson => ({
            lessonId: lesson.id,
            subjectName: lesson.Subject?.subject_name,
        }));

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!selectedLessonId || !title || !description || !dueDate || !file) {
            alert("All fields are required.");
            return;
        }
        const homeWorkSubmissionVariable = {
            studentId,
            lessonId: selectedLessonId,
            title,
            description,
            dueDate: dueDate,
            file,
        }

        console.log("Homework Submision => ", homeWorkSubmissionVariable)

        try {
            await assignHomework(homeWorkSubmissionVariable, user?.id as string);
            // Show success modal
            setShowSuccessModal(true);
        } catch (error) {
            console.error("Homework assignment failed:", error);
            alert("Failed to assign homework. Please try again.");
        }
    };


    return (
        <>
            {showSuccessModal && (
                <SuccessModal
                    message="Homework assigned successfully!"
                    onConfirm={() => {
                        setShowSuccessModal(false);
                        setSelectedLessonId('');
                        setTitle('');
                        setDescription('');
                        setDueDate('');
                        setFile(null);
                        onClose();
                        router.refresh()
                    }}
                />
            )}
            <div className="fixed inset-0 bg-[#13131379] backdrop-blur bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Assign Homework</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div>
                            <label className="block font-medium mb-1">Select Lesson/Subject</label>
                            <select
                                className="w-full border rounded px-3 py-2"
                                value={selectedLessonId}
                                onChange={(e) => setSelectedLessonId(e.target.value)}
                                required
                            >
                                <option value="">-- Choose --</option>
                                {tutorLessons.map((lesson) => (
                                    <option key={lesson.lessonId} value={lesson.lessonId}>
                                        {lesson.subjectName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Homework Title</label>
                            <input
                                type="text"
                                className="w-full border rounded px-3 py-2"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Description</label>
                            <textarea
                                className="w-full border rounded px-3 py-2"
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Due Date</label>
                            <input
                                type="date"
                                className="w-full border rounded px-3 py-2"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Attach File</label>
                            <input
                                type="file"
                                className="w-full"
                                required
                                onChange={(e) => {
                                    if (e.target.files) { setFile(e.target.files[0]) }
                                }
                                }
                            />
                        </div>

                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                className="px-4 py-2 cursor-pointer bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 cursor-pointer bg-purple-600 text-white rounded hover:bg-purple-700"
                            >
                                Assign
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
