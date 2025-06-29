// app/resources/page.tsx or pages/resources.tsx
import { FaBook, FaDownload, FaEye, FaFilePowerpoint, FaFilter } from "react-icons/fa";
import { PiFilePdfFill } from "react-icons/pi";
import { JSX } from "react";
import { IoIosArrowForward } from "react-icons/io";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { BsSearch } from "react-icons/bs";

type Resource = {
    title: string;
    type: "Textbook" | "Exam" | "Presentation";
    subject: string;
    grade: string;
    size: string;
    year?: string;
    icon: JSX.Element;
    description: string;
    color?: string;
};

const books: Resource[] = [
    {
        title: "Advanced Mathematics",
        type: "Textbook",
        subject: "Math",
        grade: "Grade 10",
        size: "15MB",
        icon: <FaBook className="text-gray-900" />,
        description: "Comprehensive guide to Grade 10 mathematics with practice problems and solutions.",
        color: 'bg-orange-600',
    },
    {
        title: "Biology Fundamentals",
        type: "Textbook",
        subject: "Biology",
        grade: "Grade 11",
        size: "22MB",
        icon: <FaBook className="text-gray-900" />,
        color: 'bg-green-600',
        description: "Essential biology concepts with illustrations and practical examples.",
    },
    {
        title: "English Literature",
        type: "Textbook",
        subject: "English",
        grade: "Grade 9",
        size: "18MB",
        icon: <FaBook className="text-gray-900" />,
        description: "Analysis of classic and contemporary literature with study questions.",
        color: 'bg-purple-600'
    },
    {
        title: "Physics Principles",
        type: "Textbook",
        subject: "Physics",
        grade: "Grade 12",
        size: "25MB",
        icon: <FaBook className="text-gray-900" />,
        color: 'bg-purple-600',
        description: "Advanced physics concepts with problem-solving techniques for final year students.",
    },
];

const pastPapers: Resource[] = [
    {
        title: "Mathematics Final Exam",
        type: "Exam",
        subject: "Math",
        grade: "Grade 12",
        year: "2022",
        size: "3.2MB",
        icon: <PiFilePdfFill size={40} className="text-red-600" />,
        description: "Complete exam paper with marking scheme and solutions.",
    },
    {
        title: "Biology Mid-Term Test",
        type: "Exam",
        subject: "Biology",
        grade: "Grade 11",
        year: "2023",
        size: "2.8MB",
        icon: <PiFilePdfFill size={40} className="text-red-600" />,
        description: "Mid-term assessment with answer key and grading rubric.",
    },
    {
        title: "English Literature Exam",
        type: "Exam",
        subject: "English",
        grade: "Grade 10",
        year: "2023",
        size: "1.5MB",
        icon: <PiFilePdfFill size={40} className="text-red-600" />,
        description: "Comprehensive literature assessment with essay questions.",
    },
    {
        title: "Chemistry Practice Test",
        type: "Exam",
        subject: "Chemistry",
        grade: "Grade 9",
        year: "2022",
        size: "2.1MB",
        icon: <PiFilePdfFill size={40} className="text-red-600" />,
        description: "Practice assessment with detailed solutions and explanations.",
    },
];

const presentations: Resource[] = [
    {
        title: "Cell Division",
        type: "Presentation",
        subject: "Biology",
        grade: "Grade 10",
        size: "4.2MB",
        icon: <FaFilePowerpoint size={40} className="text-orange-600" />,
        description: "Detailed slides on mitosis and meiosis with annotated diagrams.",
    },
    {
        title: "Algebraic Equations",
        type: "Presentation",
        subject: "Math",
        grade: "Grade 9",
        size: "3.1MB",
        icon: <FaFilePowerpoint size={40} className="text-orange-500" />,
        description: "Step-by-step guide to solving complex algebraic equations.",
    },
    {
        title: "Shakespeares Works",
        type: "Presentation",
        subject: "English",
        grade: "Grade 11",
        size: "5.4MB",
        icon: <FaFilePowerpoint size={40} className="text-orange-600" />,
        description: "Summary of major themes in Shakespeare’s most famous plays.",
    },
    {
        title: "Periodic Table",
        type: "Presentation",
        subject: "Chemistry",
        grade: "Grade 8",
        size: "3.8MB",
        icon: <FaFilePowerpoint size={40} className="text-orange-500" />,
        description: "Interactive guide to the elements with properties and applications.",
    },
];

const BookCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white rounded-xl overflow-hidden h-60 flex flex-col space-y-4 shadow-md transition w-full ">
        <div className='flex flex-col items-start justify-start p-4 bg-red-800'>
            <div className={`text-sm text-white bg-red-500/50 rounded p-1`}>{resource.grade}</div>
            <h3 className="font-semibold text-md text-white mb-1">{resource.title}</h3>
        </div>

        <div className="relative flex-col h-40 flex px-4 pb-2 w-full">
            <div className="flex items-center m-0 pb-0 space-x-2 mb-2">
                {resource.icon}
                <span>{resource.type}</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">{resource.description}</p>
            <div className="flex absolute bottom-2 w-55 items-center justify-between text-xs text-gray-500">

                <div className="flex gap-3 justify-between w-full">
                    <span>PDF • {resource.size}</span>
                    {resource.type === "Exam" && <FaEye color="black" className="cursor-pointer" />}
                    <FaDownload />
                </div>
            </div>
        </div>
    </div>
);

const ExamCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white  relative p-4 rounded-xl overflow-hidden h-60 flex flex-col space-y-4 shadow-md transition w-full ">

        <div className="flex items-center m-0 pb-0 space-x-2 mb-2">
            {resource.icon}
            <span>{resource.title}</span>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-xs font-thin text-gray-500">{resource.grade + ' - ' + resource.year}</p>
            <p className="rounded bg-slate-900 text-white text-xs p-1 shadow">{resource.subject}</p>
        </div>
        <p className="text-sm text-gray-500 mb-3">{resource.description}</p>
        <div className="flex absolute bottom-2 w-55 items-center justify-between text-xs text-gray-500">

            <div className="flex gap-3 justify-between w-full">
                <span>PDF • {resource.size}</span>
                <div className="space-x-4 flex items-center">
                    <FaEye color="black" className="cursor-pointer" />
                    <FaDownload color="black" />
                </div>
            </div>
        </div>
    </div>
);

const PresentationsCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white  relative p-4 rounded-xl overflow-hidden h-60 flex flex-col space-y-4 shadow-md transition w-full ">

        <div className="flex items-center m-0 pb-0 space-x-2 mb-2">
            {resource.icon}
            <span>{resource.title}</span>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-xs font-thin text-gray-500">{resource.grade + ' - ' + resource.subject}</p>
            <p className="rounded bg-slate-900 text-white text-xs p-1 shadow">{resource.subject}</p>
        </div>
        <p className="text-sm text-gray-500 mb-3">{resource.description}</p>
        <div className="flex absolute bottom-2 w-55 items-center justify-between text-xs text-gray-500">

            <div className="flex gap-3 justify-between w-full">
                <span>PDF • {resource.size}</span>
                <div className="space-x-4 flex items-center">
                    <FaEye color="black" className="cursor-pointer" />
                    <FaDownload color="black" />
                </div>
            </div>
        </div>
    </div>
);

export default function EducationalResources() {
    return (
        <DefaultLayout>
            <main className="md:ml-[17.3%] w-full px-2 md:p-6 space-y-10 max-w-screen-xl mx-auto md:custom-scrollbar md:overflow-y-auto h-screen">
                {/* Filters */}
                <div className="hidden md:flex justify-between items-center w-full">
                    <div className="flex gap-4">
                        <div>
                            <label className="block text-sm font-medium">Grade Level</label>
                            <select className="border border-gray-300 shadow rounded p-2 text-sm w-40 bg-white">
                                <option>All Grades</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Subject</label>
                            <select className="border border-gray-300 shadow rounded p-2 text-sm w-40 bg-white">
                                <option>All Subjects</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Resource Type</label>
                            <select className="border border-gray-300 shadow rounded p-2 text-sm w-40 bg-white">
                                <option>All Types</option>
                            </select>
                        </div>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 shadow-lg border-purple-400 border cursor-pointer rounded text-sm flex items-center gap-2">
                        <FaFilter /> <span>Apply Filters</span>
                    </button>
                </div>
                <div className="w-full flex flex-col mt-16">
                    <label className="block text-sm font-medium">Search</label>
                    <div className="flex relative">
                        <BsSearch className="absolute left-2 top-2.5 fill-gray-600" />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            className="outline-0 px-4 py-2 pl-8 text-black bg-white text-sm rounded shadow border border-gray-200 w-84"
                        />
                    </div>
                </div>
                {/* Books */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Books</h2>
                        <a href="#" className="text-sm text-purple-600 flex items-center gap-1">
                            View All <IoIosArrowForward />
                        </a>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {books.map((res, i) => (
                            <BookCard key={i} resource={res} />
                        ))}
                    </div>
                </section>

                {/* Past Exam Papers */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Past Exam Papers</h2>
                        <a href="#" className="text-sm text-purple-600 flex items-center gap-1">
                            View All <IoIosArrowForward />
                        </a>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {pastPapers.map((res, i) => (
                            <ExamCard key={i} resource={res} />
                        ))}
                    </div>
                </section>

                {/* PowerPoint Presentations */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">PowerPoint Presentations</h2>
                        <a href="#" className="text-sm text-purple-600 flex items-center gap-1">
                            View All <IoIosArrowForward />
                        </a>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {presentations.map((res, i) => (
                            <PresentationsCard key={i} resource={res} />
                        ))}
                    </div>
                </section>
            </main>
        </DefaultLayout>
    );
}
