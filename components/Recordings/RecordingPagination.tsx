export default function RecordingPagination() {
    return (
        <div className="flex justify-center mt-6 space-x-2 pb-10">
            <button className="px-3 py-1 rounded bg-gray-200">1</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
            <span className="px-3 py-1">...</span>
            <button className="px-3 py-1 rounded hover:bg-gray-100">8</button>
        </div>
    );
}
