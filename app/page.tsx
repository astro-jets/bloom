"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const result = await signIn("credentials", {
            redirect: false, // keep control in frontend
            email,
            password,
        });

        if (result?.ok) {
            console.log("LOg iin success ")
            // ✅ fetch session to get the user info
            const sessionRes = await fetch("/api/auth/session");
            const session = await sessionRes.json();

            // ✅ redirect based on user role
            if (session?.user?.role === "tutor") {
                router.push("/tutors/dashboard");
            } else {
                router.push("/students/dashboard");
            }
        } else {
            console.log("❌ Login failed");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
            <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl transition-all duration-500 ease-in-out">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Welcome Back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="email"
                        placeholder="Email"
                        value={email} onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password} onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-300"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}
