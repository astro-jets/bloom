"use client"
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Pagination() {
    const totalPages = 3;
    const currentPage = 2;
    const onPageChange = (page: number) => { console.log(page) };

    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="flex justify-center items-center gap-2 mt-4 bg-none pb-10">
            <button
                onClick={handlePrev}
                className="px-3 py-1 rounded border border-gray-300 text-sm hover:bg-gray-100 disabled:opacity-40"
                disabled={false}
            >
                <FaAngleLeft size={20} className="fill-black" />
            </button>

            {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 rounded text-sm border ${currentPage === page
                            ? "bg-gray-900 text-white"
                            : "border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                onClick={handleNext}
                className="px-3 py-1 rounded border border-gray-300 text-sm hover:bg-gray-100 disabled:opacity-40"
                disabled={false}
            >
                <FaAngleRight size={20} className="fill-black" />
            </button>
        </div>
    );
}
