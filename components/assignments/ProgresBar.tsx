type Props = {
    subject: string;
    grade: string;
    barColor?: string;
};

export const ProgressBar = ({ subject, grade, barColor = "bg-blue-500" }: Props) => {
    const percent = parseFloat(grade) * 10;

    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">{subject}</span>
                <span className="text-gray-500">{grade}/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className={`${barColor} h-2.5 rounded-full`}
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
};
