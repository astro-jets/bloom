'use client'
import React, { useState } from 'react';

const AuthCard: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
            <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl transition-all duration-500 ease-in-out">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    {isSignUp ? 'Create an Account' : 'Welcome Back'}
                </h2>

                <form className="space-y-4">
                    {isSignUp && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {isSignUp && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    )}

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-300"
                    >
                        {isSignUp ? 'Sign Up' : 'Log In'}
                    </button>
                </form>

                <div className="text-center mt-4 text-sm text-gray-600">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                    <button
                        className="ml-1 text-indigo-600 font-medium hover:underline"
                        onClick={() => setIsSignUp((prev) => !prev)}
                    >
                        {isSignUp ? 'Log In' : 'Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthCard;
