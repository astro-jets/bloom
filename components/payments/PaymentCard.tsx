export default function PaymentCard() {
    return (
        <div className="bg-white  border border-gray-100 p-4 shadow-xl rounded-2xl">
            <h2 className="text-lg font-medium mb-4">Current Package</h2>
            <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                    <p className="text-gray-500 text-sm">Package</p>
                    <p className="font-semibold">Advanced Math Tutoring</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Monthly Fee</p>
                    <p className="font-semibold">MWK149000</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Next Payment</p>
                    <p className="font-semibold">June 15, 2025</p>
                </div>
                <div className="w-40">
                    <p className="text-gray-500 text-sm">Status</p>
                    <button className="bg-red-600 text-white py-1 rounded-2xl flex items-center justify-center text-sm w-25 space-x-2">
                        <p className="w-4 h-4 p-1 rounded-full animate-pulse bg-white"></p>
                        <p>Overdue</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
