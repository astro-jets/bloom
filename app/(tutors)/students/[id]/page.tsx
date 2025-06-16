import StudentProfileCard from '@/components/cards/studentProfileCard';
import StudentStatsCard from '@/components/cards/studentStatsCard';
import NavigationTabs from '@/components/cards/navigationTabs';
import HomeworksSection from '@/components/cards/homeWorkSection';
import PerformanceOverview from '@/components/cards/perfomanceOverview';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function StudentDashboard() {
    return (
        <DefaultLayout>
            <main className="ml-[17.3%] p-4 w-full min-h-screen space-y-6 overflow-y-auto custom-scrollbar">
                <div className="w-full flex justify-between">
                    <div className="w-[68%]">
                        <StudentProfileCard />
                    </div>

                    <div className="w-[30%]">
                        <StudentStatsCard />
                    </div>

                </div>
                <NavigationTabs />
                <div className="w-full flex justify-between">
                    <div className="w-[68%]">
                        <HomeworksSection />
                    </div>
                    <div className="w-[30%]">
                        <PerformanceOverview />
                    </div>
                </div>
            </main>
        </DefaultLayout>
    );
}
