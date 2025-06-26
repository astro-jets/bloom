"use client";
import SettingsTabs from "@/components/Settings/SettingsTab";
import ProfileForm from "@/components/Settings/ProfileForm";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const SettingsPage = () => {
    return (
        <DefaultLayout>
            <main className="ml-[17.3%] flex flex-col w-full p-4 space-y-6 overflow-y-auto custom-scrollbar">
                <h1 className="text-xl font-bold">Settings</h1>
                <SettingsTabs>
                    <ProfileForm />
                    <div className="">Tab 2</div>
                    <div className="">Tab 3</div>
                    <div className="">Tab 4</div>
                </SettingsTabs>
            </main>
        </DefaultLayout>
    );
}

export default SettingsPage;