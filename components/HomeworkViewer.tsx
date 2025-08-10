
'use client'
interface PdfViewerProps {
    fileUrl: string;
}


const HomeworkViewer = ({ fileUrl }: PdfViewerProps) => (
    <iframe
        src={fileUrl}
        width="100%"
        height="750px"
        style={{ border: 'none', }}
    />
)

export default HomeworkViewer
