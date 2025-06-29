import { BsGrid3X2GapFill, BsSearch } from "react-icons/bs";
import { FaList } from "react-icons/fa";

export default function RecordingFilters() {
    return (
        <div className="bg-white rounded shadow p-2 flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
                <div className="w-full md:w-1/3 flex flex-col">
                    <div className="flex relative">
                        <BsSearch className="absolute left-2 top-2.5 fill-gray-600" />
                        <input
                            type="text"
                            placeholder="Search recordings..."
                            className="outline-0 px-4 py-2 pl-8 text-black bg-white text-sm rounded shadow border border-gray-200 w-84"
                        />
                    </div>
                </div>

                <div className="hidden md:flex flex-wrap gap-3">
                    <select className="border border-gray-200 px-3 py-2 rounded shadow">
                        <option>All Students</option>
                    </select>
                    <select className="border border-gray-200 px-3 py-2 rounded shadow">
                        <option>All Subjects</option>
                    </select>
                    <input type="date" className="border border-gray-200 px-3 py-2 rounded shadow" />
                    <select className="border border-gray-200 px-3 py-2 rounded shadow">
                        <option>Most Recent</option>
                    </select>
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <p>view: </p>
                    <div className="p-1 rounded bg-purple-200">
                        <BsGrid3X2GapFill className="fill-purple-500" />
                    </div>
                    <FaList className="fill-purple-500" />
                </div>
                <div className="flex space-x-2 items-center">
                    <p>sort by: </p>
                    <select className="border border-gray-200 px-3 py-2 rounded shadow">
                        <option>Most recent</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
