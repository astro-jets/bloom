import Image from "next/image";

const homeWorkData: any[] = [
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
        <div className="text-black rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="px-4 py-6 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black ">
                    Recent Homework
                </h4>
            </div>

            <div className="grid grid-cols-5 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-3 flex items-center">
                    <p className="font-medium">Student Name</p>
                </div>
                <div className="col-span-1 hidden items-center sm:flex">
                    <p className="font-medium">Subject</p>
                </div>
                <div className="col-span-2 flex items-center">
                    <p className="font-medium">Tutor</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Perfomance</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Status</p>
                </div>
            </div>

            {homeWorkData.map((product, key) => (
                <div
                    className="grid grid-cols-5 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                    key={key}
                >
                    <div className="col-span-3 flex items-center">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <div className="h-12.5 w-15 rounded-md">
                                <Image
                                    src={product.image}
                                    width={60}
                                    height={50}
                                    alt="Product"
                                />
                            </div>
                            <p className="text-sm text-black ">
                                {product.name}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 hidden items-center sm:flex">
                        <p className="text-sm text-black ">
                            {product.subject}
                        </p>
                    </div>
                    <div className="col-span-2 flex items-center">
                        <p className="text-sm text-black ">
                            {product.tutor}
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-black text-center ">{product.score}</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="text-sm text-meta-3">{product.status}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TableOne;
