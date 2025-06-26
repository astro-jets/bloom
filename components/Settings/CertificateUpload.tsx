// components/Settings/CertificateUpload.tsx
"use client";
import { useState } from "react";
import { BsFilePdf, BsTrash } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";

type Certificate = {
    name: string;
    size: string;
    date: string;
    icon: "pdf" | "jpg";
};

export default function CertificateUpload() {
    const [files, setFiles] = useState<Certificate[]>([
        {
            name: "Masters Degree - Mathematics",
            size: "2.4 MB",
            date: "15 Mar 2023",
            icon: "pdf",
        },
        {
            name: "Teaching Certificate",
            size: "1.8 MB",
            date: "10 Jan 2023",
            icon: "jpg",
        },
    ]);

    const remove = (i: number) => {
        setFiles(files.filter((_, index) => index !== i));
    };

    return (
        <div className="space-y-4  p-4 pb-6 shadow rounded bg-white">
            <h2 className="font-semibold text-lg">Qualifications & Certificates</h2>
            {files.map((file, i) => (
                <div
                    key={i}
                    className="flex justify-between items-center border border-gray-300 shadow-sm p-3 rounded bg-white"
                >
                    <div className="flex items-center space-x-3">
                        <div className="text-2xl">
                            {file.icon === "pdf" ? <BsFilePdf size={30} className={"fill-red-500"} /> : <PiCertificate className="fill-[gold]" size={30} />}
                        </div>
                        <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="text-sm text-gray-600">
                                {file.size} • Uploaded on {file.date}
                            </div>
                        </div>
                    </div>
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => remove(i)}
                    >
                        <BsTrash size={20} className="fill-red-500 cursor-pointer" />
                    </button>
                </div>
            ))}
            <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded">
                <p className="mb-2">Upload a new document</p>
                <button className="px-4 py-2 bg-purple-500 text-white rounded">Browse Files</button>
                <p className="text-xs mt-1 text-gray-500">
                    Supported formats: PDF, JPG, PNG (Max 5MB)
                </p>
            </div>
        </div>
    );
}
