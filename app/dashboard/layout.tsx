import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({children, } : {children: React.ReactNode}){
    return (
        <div className={`
        flex h-screen bg-gray-300
        w-screen
        `}>
            <Sidebar />
            <div className={`
                flex flex-col
                w-[calc(100vw-256px)]
                `}>
                <main className={`
                    w-full
                    `}>
                    <Navbar />
                    {children}
                </main>
            </div>
        </div>
    );
}