// components/SuccessModal.tsx
import React from "react";

interface SuccessModalProps {
    message: string;
    onConfirm: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, onConfirm }) => {
    return (
        <div className="fixed inset-0 z-100 backdrop-blur flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center">
                <h2 className="text-xl font-semibold text-green-600 mb-2">Success!</h2>
                <p className="text-gray-700 mb-4">{message}</p>
                <button
                    onClick={onConfirm}
                    className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;
