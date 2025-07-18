import { BsBank, BsFilter } from "react-icons/bs";
import { FaCcVisa, FaFilter } from "react-icons/fa";
import { PiDownload } from "react-icons/pi";

const history = [
    { date: "Apr 15, 2025", desc: "Monthly Tuition - April", amount: "MWK149000", method: "Visa **** 4242", status: "Overdue" },
    { date: "Mar 15, 2025", desc: "Monthly Tuition - March", amount: "MWK149000", method: "Visa **** 4242", status: "Paid" },
    { date: "Feb 15, 2025", desc: "Monthly Tuition - February", amount: "MWK149000", method: "Bank Transfer", status: "Paid" },
    { date: "Jan 15, 2025", desc: "Monthly Tuition - January", amount: "MWK149000", method: "Visa **** 4242", status: "Paid" },
];

export default function PaymentHistory() {
    return (
        <div className="bg-white p-4 shadow-lg rounded-xl">
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                <h2 className="text-lg font-medium">Payment History</h2>
            </div>

            <div className="space-x-2 ml-auto flex w-40 my-4">
                <button className="border border-gray-200 px-2 py-1 rounded text-sm shadow flex items-center space-x-2">
                    <FaFilter size={15} className="fill-black" />
                    <span>Filter</span>
                </button>

                <button className="border border-gray-200 px-2 py-1 rounded text-sm shadow flex items-center space-x-2">
                    <PiDownload size={20} className="fill-black" />
                    <span>Export</span>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-50 text-sm text-gray-600 ">
                            <th className="py-2">DATE</th>
                            <th>DESCRIPTION</th>
                            <th><div className="">AMOUNT</div></th>
                            <th><div className="flex justify-center">PAYMENT METHOD</div></th>
                            <th><div className="flex justify-center">STATUS</div></th>
                            <th><div className="flex justify-center">RECEIPT</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((h, i) => (
                            <tr key={i} className="border-b border-gray-200 text-gray-500">
                                <td className="py-6">{h.date}</td>
                                <td>{h.desc}</td>
                                <td >{h.amount}</td>
                                <td>
                                    <div className="flex items-center justify-center space-x-2">
                                        {h.method.includes('Visa') ? <FaCcVisa size={18} className="fill-gray-500" /> : <BsBank size={18} className="" />}
                                        <div className="flex justify-center">{h.method}</div>
                                    </div>
                                </td>
                                <td className="flex  py-6">
                                    <span
                                        className={` w-full text-center py-1 px-2 rounded-2xl text-white text-xs ${h.status === "Paid" ? "bg-green-500" : "bg-red-500"
                                            }`}
                                    >
                                        {h.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="flex space-x-1 items-center justify-center">
                                        <PiDownload size={15} className="fill-gray-500" />
                                        <a href="#" className="text-blue-600">
                                            Download
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <tr className="">
                            <td className="text-gray-500"><p className="text-xs">Showing 1 of 12 payments</p></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="flex space-x-1 items-center py-4" >
                                {/* Pagination */}
                                <div className="flex justify-end items-center space-x-2">
                                    <button className="px-3 py-1 rounded shadow border border-[#ccc] text-gray-900 flex items-center">
                                        Previous
                                    </button>
                                    <button className="px-3 py-1 rounded shadow text-gray-50 bg-gray-900 flex items-center">
                                        Next
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* <div className="text-sm text-gray-500 mt-2">Showing 4 of 12 payments</div> */}
            </div>
        </div>
    );
}
