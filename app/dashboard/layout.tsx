import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({children, } : {children: React.ReactNode}){
    return (
        <div className={`
        flex h-screen bg-gray-300
        `}>
            <Sidebar />
            <div className={`
                flex flex-col
                `}>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}