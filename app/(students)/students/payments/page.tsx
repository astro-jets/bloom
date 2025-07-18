import PaymentCard from "@/components/payments/PaymentCard"
import PaymentHistory from "@/components/payments/PaymentHistory";
import HelpSupport from "@/components/payments/HelpSupport";
import PaymentMethods from "@/components/payments/PaymentMethods";
import StudentsLayout from "@/components/Layouts/StudentsLayout";
import { BsExclamationTriangle } from "react-icons/bs";

export default function PaymentsPage() {
    return (
        <StudentsLayout>
            <h1 className="font-semibold text-gray-800">Payments</h1>
            <p className="text-gray-500 text-sm">Manage your tuition payments and view payment history</p>



            {/* Main Grid */}
            <div className="w-full flex flex-col md:flex-row mt-4 space-y-6 space-x-6 pb-6">
                <div className="w-full md:w-4/5 space-y-6">
                    {/* Alert */}
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center justify-between shadow">
                        <div className="flex space-x-2 items-center">
                            <BsExclamationTriangle className="fill-red-500" size={40} />
                            <div>
                                <p className="font-semibold">Payment Overdue</p>
                                <p className="text-sm">Your payment for April 2025 is overdue. Please clear your balance to avoid any interruption in services.</p>
                            </div>
                        </div>
                        <button className="text-sm bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Pay Now</button>
                    </div>
                    <PaymentCard />
                    <PaymentHistory />
                </div>

                <div className="space-y-6 w-full md:w-1/4">
                    <HelpSupport />
                    <PaymentMethods />
                </div>
            </div>
        </StudentsLayout>
    );
}
