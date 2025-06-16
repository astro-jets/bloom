"use client"

import Image from 'next/image';

export default function StudentProfileCard() {
    return (
        <div className="bg-white h-60 overflow-hidden p-4 rounded-xl shadow space-y-2">
            <div className="flex items-center gap-4">
                <div className="w-full flex justify-between">
                    <div className="flex items-center space-x-2">
                        <Image src={'/images/user-02.png'} width={120} height={120} className='w-30 h-30 rounded-full object-cover' alt='' />

                        <div>
                            <h2 className="font-semibold text-lg">Emma Johnson</h2>
                            <p className="text-sm text-gray-500">emma.johnson@example.com</p>
                        </div>
                    </div>
                    <span className="bg-green-100 h-6 p-1 text-green-700 px-2 py-1 rounded-2xl text-xs inline-block w-fit">Active Student</span>
                </div>
            </div>
            <div className="flex  justify-center w-full space-x-3 text-sm text-gray-600 mt-2">
                <div className='flex flex-col px-2'><strong>Start Date</strong> Sep 12, 2023</div>
                <div className='flex flex-col px-2 border-l border-r border-gray-300'><strong>Contract</strong> 6-month plan</div>
                <div className='flex flex-col px-2'><strong>Subject</strong> Science & Math</div>
            </div>

        </div>
    );
}
