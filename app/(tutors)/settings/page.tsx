"use client";
import SettingsTabs from "@/components/Settings/SettingsTab";
import ProfileForm from "@/components/Settings/ProfileForm";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const SettingsPage = () => {
    return (
        <DefaultLayout>
            <main className="ml-[17.3%] flex flex-col w-full p-4 space-y-6 overflow-y-auto custom-scrollbar scroll-smooth">
                <h1 className="text-xl font-bold">Settings</h1>
                <SettingsTabs />
                <ProfileForm />
            </main>
        </DefaultLayout>
    );
}

export default SettingsPage;