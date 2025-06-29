import Image from "next/image";

const homeWorkData = [
    {
        image: "/images/user-02.png",
        name: "Jane Stones",
        subject: "Chemistry",
        tutor: 'Mason K',
        score: '42%',
        status: 'Pass',
    },
    {
        image: "/images/user-07.png",
        name: "Alexia Arnold",
        subject: "English",
        tutor: 'Sophia R',
        score: '78%',
        status: 'Strong Merit',
    },
    {
        image: "/images/user-08.png",
        name: "Declan Rice",
        subject: "Physics",
        tutor: 'Olivia P',
        score: '64%',
        status: 'Merit',
    },
    {
        image: "/images/user-10.png",
        name: "Judith Bellingham",
        subject: "Science",
        tutor: 'Alex T',
        score: '69%',
        status: 'Merit',
    },
];

const TableOne = () => {
    return (
        <div className="text-[#2c2d39] hidden md:block space-y-4 rounded-sm mb-6  bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="px-4">
                <h4 className="text-lg font-semibold text-[#2c2d39] ">
                    Recent Homework Submissions
                </h4>
            </div>

            <div className="grid grid-cols-5 p-4 border-t border-gray-300">
                <div className="flex items-center">
                    <p className="font-medium">Student Name</p>
                </div>
                <div className="hidden items-center sm:flex">
                    <p className="font-medium">Subject</p>
                </div>
                <div className="flex items-center">
                    <p className="font-medium">Tutor</p>
                </div>
                <div className="flex items-center">
                    <p className="font-medium">Perfomance</p>
                </div>
                <div className="flex items-center">
                    <p className="font-medium">Status</p>
                </div>
            </div>

            {homeWorkData.map((product, key) => (
                <div
                    className="grid grid-cols-5 border-t border-gray-300 p-2"
                    key={key}
                >

                    <div className="flex flex-col  items-center mr-2 w-30">
                        <div className="h-12.5 w-15 rounded-md">
                            <img
                                src={product.image}
                                // width={60}
                                // height={50}
                                alt="Product"
                            />
                        </div>
                        <p className="text-sm font-bold text-[#2c2d39] mt-4">
                            {product.name}
                        </p>
                    </div>

                    <div className="hidden items-center sm:flex">
                        <p className="text-sm text-center text-[#2c2d39] ">
                            {product.subject}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm text-[#2c2d39] ">
                            {product.tutor}
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-20">
                        <p className="text-sm text-[#2c2d39] text-center ">{product.score}</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm text-meta-3">{product.status}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TableOne;
