"use client"

import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SdButtonProps {
    href: string,
    label: string,
    Icon: LucideIcon,
}

export default function SdButton({href, label, Icon} : SdButtonProps) {
    return (
        <Link 
            href={href}
            className={`
                flex flex-row gap-2 justify-center
                w-max
                text-[#686E78]
                pb-0.5 px-1
                rounded-b-lg
                border-2
                border-transparent
                hover:shadow-md hover:shadow-[#FF0035]
                hover:border-l-[#FF0035]
                hover:border-r-[#FF0035]
                hover:border-b-[#FF0035]
                transition duration-300
                `}>
                    <Icon size={20} className={`
                        text-[#FF0035]
                        drop-shadow-md drop-shadow-[#FF0035]
                        `}></Icon>
                    {label}
        </Link>
    );
}