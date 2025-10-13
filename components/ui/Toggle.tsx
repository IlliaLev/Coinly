"use client";

import { useState } from "react";

import { Sun, Moon } from "lucide-react";

export default function Toggle() {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    }

    return (
        <div onClick={toggle} className={`
        w-14 h-8 
        flex items-center
        rounded-full
        ${isOn ? "bg-[#0F2443]" : "bg-[#A6C841]"}
        cursor-pointer
        transition-colors duration-300
        `}>
            <div className={`
                w-8 h-8 
                flex items-center justify-center
                rounded-full
                text-white
                ${isOn ? "bg-[#2659A6]/40" : "bg-[#829E2E]/40"}
                ${isOn ? "translate-x-6" : "translate-x-0"}
                transition-all duration-500
                `}>
                {isOn ? 
                    <Moon className={`
                        w-7 h-7
                        `} strokeWidth={2.5}></Moon>
                    :
                    <Sun className={`
                        w-7 h-7
                        
                        `} strokeWidth={2.5}></Sun>
                }
            </div>
            
        </div>
    );
}