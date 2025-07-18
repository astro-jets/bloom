import { BiLock } from "react-icons/bi";
import { BsBank, BsThreeDotsVertical } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa"

export default function PaymentMethods() {
    return (
        <div className="bg-white p-2 shadow rounded">
            <h2 className="text-lg font-medium mb-4">Available Payment Methods</h2>
            <div className="space-y-6 text-sm text-gray-700">
                <div className="flex justify-between items-center border-t border-gray-300 pt-4">
                    <FaCcVisa size={20} className="filll-gray-500" />
                    <div>
                        <p>Visa **** 4242</p>
                        <p className="text-xs text-gray-500">Expires 05/2025</p>
                    </div>
                    <span className="bg-blue-600 text-white p-1 text-xs rounded">DEFAULT</span>
                    <BsThreeDotsVertical size={20} className="filll-gray-500" />
                </div>
                <div className="flex justify-between items-center  border-t border-gray-300 pt-4">
                    <BsBank size={20} className="filll-gray-500" />
                    <p>Bank Account **** 5678</p>
                    <BsThreeDotsVertical size={20} className="filll-gray-500" />
                </div>
                <p className="text-xs text-gray-500 mt-8 flex space-x-2 items-center">
                    <BiLock size={22} className="fill-blue-500" />
                    <span>Your payment information is stored securely</span>
                </p>
            </div>
        </div>
    );
}
