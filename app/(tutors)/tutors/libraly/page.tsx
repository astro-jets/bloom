"use client";

import React, { JSX, useEffect, useMemo, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { FaBook, FaDownload, FaEye, FaFilePowerpoint, FaFilter } from "react-icons/fa";
import { PiFilePdfFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { fetchLibraryResources } from "@/utils/routes";


// ────────────────────────────────────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────────────────────────────────────
type BackendItem = {
    id: string;
    name: string;
    description: string;
    type: string; // "Textbook" | "Worksheet" | "Lesson Plan" | "Exam" | ...
    fileType: string; // "pdf" | "docx" | ...
    size: string; // "0.30 MB"
    fileUrl: string;
    thumbnailUrl?: string | null;
    gradeLevel: string; // "Grade 10"
    status: string;
    tags?: string;
    createdAt?: string;
    updatedAt?: string;
    uploadedBy?: string;
    Subject?: { subject_id: number; subject_name: string; description?: string };
    uploader?: { id: string; name: string; role: string };
};

type Resource = {
    id: string;
    title: string;
    type: string;
    subject: string;
    grade: string;
    size: string;
    year?: string;
    description: string;
    icon: JSX.Element;
    color?: string;
    fileUrl: string;
    fileType: string;
    thumbnailUrl?: string | null;
};

// ────────────────────────────────────────────────────────────────────────────────
/** Helpers */
// ────────────────────────────────────────────────────────────────────────────────
const isPdf = (ext?: string) => (ext || "").toLowerCase() === "pdf";

function pickIcon(item: BackendItem): JSX.Element {
    if (isPdf(item.fileType)) return <PiFilePdfFill size={40} className="text-red-600" />;
    if (item.type?.toLowerCase().includes("presentation")) return <FaFilePowerpoint size={40} className="text-orange-600" />;
    return <FaBook className="text-gray-900" />;
}

function mapResource(item: BackendItem): Resource {
    return {
        id: item.id,
        title: item.name,
        type: item.type,
        subject: item.Subject?.subject_name || "Unknown",
        grade: item.gradeLevel,
        size: item.size,
        year: item.createdAt ? String(new Date(item.createdAt).getFullYear()) : undefined,
        description: item.description,
        icon: pickIcon(item),
        color: "bg-purple-600",
        fileUrl: item.fileUrl,
        fileType: item.fileType,
        thumbnailUrl: item.thumbnailUrl ?? null,
    };
}

function normalizeTypeForSection(t: string) {
    const s = t.toLowerCase();
    if (s.includes("textbook")) return "book";
    if (s.includes("presentation") || s.includes("lesson plan") || s.includes("slides")) return "presentation";
    if (s.includes("exam") || s.includes("worksheet") || s.includes("test") || s.includes("paper")) return "exam";
    return "other";
}

function unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
}

// ────────────────────────────────────────────────────────────────────────────────
/** Cards (kept close to your originals) */
// ────────────────────────────────────────────────────────────────────────────────
const BookCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white rounded-xl overflow-hidden h-60 flex flex-col space-y-4 shadow-md transition w-full">
        <div className="flex flex-col items-start justify-start p-4 bg-red-800">
            <div className="text-sm text-white bg-red-500/50 rounded p-1">{resource.grade}</div>
            <h3 className="font-semibold text-md text-white mb-1 line-clamp-1">{resource.title}</h3>
        </div>

        <div className="relative flex-col h-40 flex px-4 pb-2 w-full">
            <div className="flex items-center space-x-2 mb-2">
                {resource.icon}
                <span className="text-sm">{resource.type}</span>
            </div>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{resource.description}</p>
            <div className="flex absolute bottom-2 w-55 items-center justify-between text-xs text-gray-500">
                <div className="flex gap-3 justify-between w-full items-center">
                    <span className="whitespace-nowrap uppercase">
                        {resource.fileType.toUpperCase()} • {resource.size}
                    </span>
                    <div className="flex items-center gap-4">
                        {/* View */}
                        <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer" aria-label="View">
                            <FaEye className="cursor-pointer" />
                        </a>
                        {/* Download */}
                        <a href={resource.fileUrl} download aria-label="Download">
                            <FaDownload className="cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ExamCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white relative p-4 rounded-xl overflow-hidden h-60 flex flex-col space-y-4 shadow-md transition w-full">
        <div className="flex items-center space-x-2 mb-2">
            {resource.icon}
            <span className="font-medium line-clamp-1">{resource.title}</span>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-xs font-thin text-gray-500">
                {resource.grade}
                {resource.year ? ` • ${resource.year}` : ""}
            </p>
            <p className="rounded bg-slate-900 text-white text-xs p-1 shadow">{resource.subject}</p>
        </div>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{resource.description}</p>
        <div className="flex absolute bottom-2 w-55 items-center justify-between text-xs text-gray-500">
            <div className="flex gap-3 justify-between w-full items-center">
                <span className="uppercase">
                    {resource.fileType.toUpperCase()} • {resource.size}
                </span>
                <div className="space-x-4 flex items-center">
                    <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer" aria-label="View">
                        <FaEye className="cursor-pointer" />
                    </a>
                    <a href={resource.fileUrl} download aria-label="Download">
                        <FaDownload className="cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const PresentationsCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white relative p-4 rounded-xl overflow-hidden h-60 flex flex-col space-y-4 shadow-md transition w-full">
        <div className="flex items-center space-x-2 mb-2">
            {resource.icon}
            <span className="font-medium line-clamp-1">{resource.title}</span>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-xs font-thin text-gray-500">
                {resource.grade} • {resource.subject}
            </p>
            <p className="rounded bg-slate-900 text-white text-xs p-1 shadow">{resource.subject}</p>
        </div>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{resource.description}</p>
        <div className="flex absolute bottom-2 w-55 items-center justify-between text-xs text-gray-500">
            <div className="flex gap-3 justify-between w-full items-center">
                <span className="uppercase">
                    {resource.fileType.toUpperCase()} • {resource.size}
                </span>
                <div className="space-x-4 flex items-center">
                    <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer" aria-label="View">
                        <FaEye className="cursor-pointer" />
                    </a>
                    <a href={resource.fileUrl} download aria-label="Download">
                        <FaDownload className="cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

// ────────────────────────────────────────────────────────────────────────────────
/** Page */
// ────────────────────────────────────────────────────────────────────────────────
export default function EducationalResources() {
    const [raw, setRaw] = useState<BackendItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<string | null>(null);

    // Filters + search
    const [gradeFilter, setGradeFilter] = useState<string>("All");
    const [subjectFilter, setSubjectFilter] = useState<string>("All");
    const [typeFilter, setTypeFilter] = useState<string>("All");
    const [query, setQuery] = useState("");

    // Fetch client-side
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setErr(null);
                const data: BackendItem[] = await fetchLibraryResources()
                console.log("data  => ", data)
                setRaw(data);
            } catch (e) {
                console.log(e)
                setErr("Failed to load resources");
            } finally {
                setLoading(false);
            }
        })();;
    }, []);

    const normalized: Resource[] = useMemo(() => raw.map(mapResource), [raw]);

    // Build dynamic filter options from data
    const gradeOptions = useMemo(() => ["All", ...unique(normalized.map(r => r.grade).filter(Boolean))], [normalized]);
    const subjectOptions = useMemo(() => ["All", ...unique(normalized.map(r => r.subject).filter(Boolean))], [normalized]);
    const typeOptions = useMemo(() => ["All", ...unique(normalized.map(r => r.type).filter(Boolean))], [normalized]);

    // Apply search + filter
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return normalized.filter(r => {
            const matchesQuery =
                !q ||
                r.title.toLowerCase().includes(q) ||
                r.description.toLowerCase().includes(q) ||
                r.subject.toLowerCase().includes(q) ||
                r.grade.toLowerCase().includes(q) ||
                r.type.toLowerCase().includes(q);

            const matchesGrade = gradeFilter === "All" || r.grade === gradeFilter;
            const matchesSubject = subjectFilter === "All" || r.subject === subjectFilter;
            const matchesType = typeFilter === "All" || r.type === typeFilter;

            return matchesQuery && matchesGrade && matchesSubject && matchesType;
        });
    }, [normalized, query, gradeFilter, subjectFilter, typeFilter]);

    // Split into sections
    const books = filtered.filter(r => normalizeTypeForSection(r.type) === "book");
    const exams = filtered.filter(r => normalizeTypeForSection(r.type) === "exam");
    const presentations = filtered.filter(r => normalizeTypeForSection(r.type) === "presentation");

    return (
        <DefaultLayout>
            <main className="md:ml-[17.3%] w-full px-2 md:p-6 space-y-10 max-w-screen-xl mx-auto custom-scrollbar md:overflow-y-auto h-screen">
                {/* Top controls */}
                <div className="hidden md:flex justify-between items-center w-full">
                    <div className="flex gap-4">
                        <div>
                            <label className="block text-sm font-medium">Grade Level</label>
                            <select
                                value={gradeFilter}
                                onChange={(e) => setGradeFilter(e.target.value)}
                                className="border border-gray-300 shadow rounded p-2 text-sm w-40 bg-white"
                            >
                                {gradeOptions.map(opt => <option key={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Subject</label>
                            <select
                                value={subjectFilter}
                                onChange={(e) => setSubjectFilter(e.target.value)}
                                className="border border-gray-300 shadow rounded p-2 text-sm w-40 bg-white"
                            >
                                {subjectOptions.map(opt => <option key={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Resource Type</label>
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                className="border border-gray-300 shadow rounded p-2 text-sm w-40 bg-white"
                            >
                                {typeOptions.map(opt => <option key={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* This button is decorative since filters apply instantly; keep for UX parity */}
                    <button
                        type="button"
                        onClick={() => {
                            // could trigger analytics or future server-side filter fetch
                        }}
                        className="bg-purple-600 text-white px-4 py-2 shadow-lg border-purple-400 border cursor-pointer rounded text-sm flex items-center gap-2"
                    >
                        <FaFilter /> <span>Apply Filters</span>
                    </button>
                </div>

                {/* Search */}
                <div className="w-full flex flex-col mt-16 md:mt-0">
                    <label className="block text-sm font-medium">Search</label>
                    <div className="flex relative">
                        <BsSearch className="absolute left-2 top-2.5 fill-gray-600" />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="outline-0 px-4 py-2 pl-8 text-black bg-white text-sm rounded shadow border border-gray-200 w-84"
                        />
                    </div>
                </div>

                {/* Loading / Error / Empty */}
                {loading && (
                    <div className="text-sm text-gray-600">Loading resources…</div>
                )}
                {err && !loading && (
                    <div className="text-sm text-red-600">Error: {err}</div>
                )}
                {!loading && !err && filtered.length === 0 && (
                    <div className="text-sm text-gray-600">No resources match your filters.</div>
                )}

                {/* Books */}
                {!loading && !err && books.length > 0 && (
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Books</h2>
                            <a href="#" className="text-sm text-purple-600 flex items-center gap-1">
                                View All <IoIosArrowForward />
                            </a>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {books.map((res) => (
                                <BookCard key={res.id} resource={res} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Past Exam Papers */}
                {!loading && !err && exams.length > 0 && (
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Past Exam Papers</h2>
                            <a href="#" className="text-sm text-purple-600 flex items-center gap-1">
                                View All <IoIosArrowForward />
                            </a>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {exams.map((res) => (
                                <ExamCard key={res.id} resource={res} />
                            ))}
                        </div>
                    </section>
                )}

                {/* PowerPoint Presentations */}
                {!loading && !err && presentations.length > 0 && (
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">PowerPoint Presentations</h2>
                            <a href="#" className="text-sm text-purple-600 flex items-center gap-1">
                                View All <IoIosArrowForward />
                            </a>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {presentations.map((res) => (
                                <PresentationsCard key={res.id} resource={res} />
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </DefaultLayout>
    );
}
