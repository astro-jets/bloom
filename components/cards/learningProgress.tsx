'use client'
interface ProgressBarProps {
    grade: string;
    subject: string;
}
const ProgressBar = ({
    grade,
    subject,
}: ProgressBarProps) => {
    // const parsedGrade = (parseInt(grade) * 10).toString();
    return (
        <div className="flex flex-col-reverse">

            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div
                    className="bg-gray-900 h-2 rounded-full"
                    style={{ width: `${grade}%` }}
                />
            </div>
            <div className="text-sm flex justify-between text-gray-900 mb-2">
                <p>{subject}</p>
                <p className="">{grade}</p>
            </div>
        </div>
    );
};

type SubjectScore = {
    name: string;
    score: number;
    color: string;
};

const subjects: SubjectScore[] = [
    { name: 'Lessons Completed', score: 12, color: 'bg-green-500' },
    { name: 'Lessons Remaining', score: 18, color: 'bg-yellow-500' },
    { name: 'Hours Studied June', score: 24.5, color: 'bg-purple-500' },
];


export default function LearningProgress() {
    return (
        <div className="w-full bg-white p-4 rounded-xl shadow space-y-2">
            <h3 className="text-lg text-gray-900 font-semibold">Learning Progress</h3>
            <div className="space-y-2 text-sm">
                {subjects.map((subject, index) => (
                    <ProgressBar key={index} grade={subject.score.toString()} subject={subject.name} />
                ))}
            </div>
            <hr className="w-full my-2 border-b border-gray-100" />

            <div className="flex flex-col">
                <h3 className="text-lg text-gray-900 font-semibold">Upcoming this week</h3>
                <div className="space-y-2 mt-2 flex flex-col">
                    <div className="flex items-center space-x-2">
                        <div className="rounded-full p-1 bg-gray-500 shadow-sm"></div>
                        <div className="flex flex-col">
                            <p>Physics</p>
                            <div className="text-sm text-gray-500">
                                Tomorrow, 9:00
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="rounded-full p-1 bg-gray-500 shadow-sm"></div>
                        <div className="flex flex-col">
                            <p>Literature</p>
                            <div className="text-sm text-gray-500">
                                Friday, 11:00
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="rounded-full p-1 bg-gray-500 shadow-sm"></div>
                        <div className="flex flex-col">
                            <p>Mathematics</p>
                            <div className="text-sm text-gray-500">
                                Friday, 10:00
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
