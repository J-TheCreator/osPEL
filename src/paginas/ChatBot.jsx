import Navbar from "../componentes/Navbar";
import Sidebar from "../componentes/Sidebar";

export default function ChatBot() {
    return (
        <>

            <div className="flex h-screen">
                {/* Sidebar à esquerda */}
                <Sidebar />

                <div className="flex flex-col flex-1 h-screen">
                    {/* Navbar no topo */}
                    <Navbar />

                    {/* Div para centralizar */}
                    <div className="flex flex-1 bg-gray-500 justify-center items-center">
                        {/* ChatBot */}
                        <div className="h-[650px] w-[450px] bg-[#F5F3F3] rounded-md">
                            <div className="flex justify-center items-center h-full">
                                <h1 className="relative font-inter italic font-bold text-[42px] bottom-1 text-[#3F4FFF]">Chat</h1>
                                <h1 className="font-inter italic font-bold text-[36px] text-[#F3E8ED]" shadow-custom-inner>Bot</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};