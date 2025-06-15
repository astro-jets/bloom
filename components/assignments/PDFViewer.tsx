import React from "react";

interface PDFViewerProps {
    fileName: string;
    downloadUrl?: string; // Optional: Link to actual PDF
}

export const PDFViewer = ({ fileName, downloadUrl }: PDFViewerProps) => {
    return (
        <div className="w-full h-80 p-4  mt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Submission</h2>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <span className="font-medium  text-gray-700">{fileName}</span>
                {downloadUrl ? (
                    <a
                        href={downloadUrl}
                        download
                        className="text-white p-2 rounded bg-purple-600 hover:underline"
                    >
                        Download
                    </a>
                ) : (
                    <button className="text-white p-2 rounded bg-red-600/30 cursor-not-allowed" disabled>
                        Download
                    </button>
                )}
            </div>
            {/* Placeholder for PDF preview (integrate with libraries like react-pdf) */}
            <div className="mt-4 h-50 bg-gray-100 flex items-center justify-center rounded-lg shadow-sm border border-gray-200 text-gray-500">
                PDF Preview Area
            </div>
        </div>
    );
};