import StudentProfileCard from '@/components/cards/studentProfileCard';
import StudentStatsCard from '@/components/cards/studentStatsCard';
import NavigationTabs from '@/components/cards/navigationTabs';
import HomeworksSection from '@/components/cards/homeWorkSection';
import PerformanceOverview from '@/components/cards/perfomanceOverview';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function StudentDashboard() {
    return (
        <DefaultLayout>
            <main className="md:ml-[17.3%] px-2 md:p-4 w-full min-h-screen space-y-4 md:overflow-y-auto custom-scrollbar">
                <div className="w-full flex flex-col space-y-4 md:flex-row md:justify-between mt-16 md:mt-0">
                    <div className="w-full md:w-[68%]">
                        <StudentProfileCard />
                    </div>

                    <div className="w-full md:w-[30%]">
                        <StudentStatsCard />
                    </div>

                </div>
                <NavigationTabs />
                <div className="w-full flex flex-col space-y-4 md:flex-row md:justify-between">
                    <div className="w-full md:w-[68%]">
                        <HomeworksSection />
                    </div>
                    <div className="w-full md:w-[30%] pb-10">
                        <PerformanceOverview />
                    </div>
                </div>
            </main>
        </DefaultLayout>
    );
}
