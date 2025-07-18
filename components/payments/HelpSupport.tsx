import { BiPhoneCall } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs"
import { FaFileAlt } from "react-icons/fa";

export default function HelpSupport() {
    return (
        <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-gray-300">Help & Support</h2>
            <div className="text-sm mb-4">
                <strong>Billing Questions?</strong>
                <p className="text-sm text-gray-500">Our support team is here to help with any payment-related questions.</p>
            </div>
            <p className="text-sm">
                <strong>Contact Billing Support</strong>
                <span className="flex items-center space-x-2 mt-2">
                    <BsEnvelope className="fill-blue-500" />
                    <a className="text-blue-600" href="mailto:billing@bloom.com">
                        billing@bloom.com
                    </a>
                </span>
                <span className="flex items-center space-x-2">
                    <BiPhoneCall className="fill-blue-500" />
                    <span className="text-gray-500">+265 555-1234</span>
                </span>
            </p>
            <a className="text-blue-600 text-sm mt-6 flex space-x-2" href="#">
                <FaFileAlt size={15} className="fill-blue-500" />
                <span>View Payment Policy</span>
            </a>
        </div>
    );
}
