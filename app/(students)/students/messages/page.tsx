import StudentsLayout from "@/components/Layouts/StudentsLayout";
// import MessageBox from "@/components/MessageBox/MessageBox"
// import MessageList from "@/components/MessageBox/MessageList";

const MessagesPage = () => {
    return (
        <StudentsLayout>
            <main className="flex justify-between  h-full w-full bg-slate-50">
                {/* <div className="flex flex-col h-screen w-[18%]">

                    <div className="flex flex-col items-center  h-60 w-full">
                        <div className="flex flex-col relative w-25 h-25 items-center justify-center">
                            <div className="rounded-full h-20 w-20 overflow-hidden shadow">
                                <img src={'/images/user-04.png'} className="w-full object-cover" />
                            </div>
                            <div className="w-4 h-4 rounded-full bg-green-500 absolute right-4 bottom-3"></div>
                        </div>
                        <h1 className="text-gray-900 font-semibold text-2xl">Sarah Johnson</h1>
                        <span className="rounded-4xl py-1 px-4 bg-gray-900 text-white">Tutor</span>
                    </div>
                </div> */}
                <div className="w-full md:w-[75%] h-full mt-15 md:mt-0 p-0 hide-scrollbar">
                    {/* <MessageBox /> */}
                </div>
                <div className="h-full w-[25%] hidden md:block">
                    {/* <MessageList /> */}
                </div>
            </main>
        </StudentsLayout>
    );
}

export default MessagesPage;