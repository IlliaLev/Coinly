"use client";

import { Sun, Moon } from "lucide-react";

import { useThemeStore } from "@/lib/useThemeStore";

export default function Toggle() {
    const {theme, toggleTheme} = useThemeStore();

    const toggle = () => {
        toggleTheme();
    }

    return (
        <div onClick={toggle} className={`
        w-14 h-8 
        flex items-center
        rounded-full
        dark:bg-[#0F2443] 
        bg-[#A6C841]
        cursor-pointer
        transition-colors duration-300
        `}>
            <div className={`
                w-8 h-8 
                flex items-center justify-center
                rounded-full
                text-white
                dark:bg-[#2659A6]/40 
                bg-[#829E2E]/40
                ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
                transition-all duration-500
                `}>
                {theme === "dark" ? 
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