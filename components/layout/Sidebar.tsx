"use client";

import Link from "next/link";
import { BarChart3, History, PlusCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
    {href: "/dashboard", label: "Overview", icon: BarChart3}, 
    {href: "/dashboard/history", label: "History", icon: History}, 
    {href: "/dashboard/report", label: "Report", icon: PlusCircle}];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className={`
        w-64 bg-white 
        flex flex-col
        
        `}>
            <div className={`
                mt-5
                `}>
                <h1 className={`
                    text-2xl font-semibold
                    text-center
                    `}>Coinly</h1>
                <nav className={`
                    space-y-2
                    ml-12
                    mt-8
                    `}>
                    {links.map(({href, label, icon: Icon}) => (
                        <Link 
                        key={href}
                        href={href}
                        className={`
                            flex flex-row 

                            `}>
                            <Icon size={20}></Icon>
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}