"use client";

import { BarChart3, History, PlusCircle } from "lucide-react";
import SdButton from "@/components/ui/SdButton";

const links = [
    {href: "/dashboard", label: "Overview", icon: BarChart3}, 
    {href: "/dashboard/history", label: "History", icon: History}, 
    {href: "/dashboard/report", label: "Report", icon: PlusCircle}];

export default function Sidebar() {
    
    return (
        <aside className={`
        w-64 bg-[#131416]
        flex flex-col
        
        `}>
            <div className={`
                flex flex-col items-center
                mt-5
                `}>
                <h1 className={`
                    text-4xl font-semibold
                    text-center
                    text-[#FF0035]
                    drop-shadow-[#FF0035] drop-shadow-sm
                    `}>Coinly</h1>
                <nav className={`
                    space-y-4
                    mt-8
                    w-max
                    `}>
                    {links.map(({href, label, icon: Icon}) => (
                        <SdButton key={href} href={href} label={label} Icon={Icon}>

                        </SdButton>
                    ))}
                </nav>
            </div>
        </aside>
    );
}