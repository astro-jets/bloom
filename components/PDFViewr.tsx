'use client'
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';

// ✅ Official PDF.js worker setup (modern way)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


interface PdfViewerProps {
    fileUrl: string;
}

export default function PDFViewer({ fileUrl }: PdfViewerProps) {
    const [numPages, setNumPages] = useState<number>();

    return (
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <Document
                file={fileUrl}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
                {Array.from(new Array(numPages), (_, index) => (
                    <Page key={index} pageNumber={index + 1} width={800} />
                ))}
            </Document>
        </div>
    );
}
