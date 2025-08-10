'use client'
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@/components/PDFViewr'), {
    ssr: false,
});

export default function FileViewer({ fileUrl }: { fileUrl: string }) {
    return <PDFViewer fileUrl={fileUrl} />;
}
