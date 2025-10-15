"use client";

interface PopupButtonProps {
    title: string,
    isSelected: boolean,
}

export default function PopupButton({title, isSelected} : PopupButtonProps) {
    return (
        <div>
            <button className={`
            ${isSelected ? "text-[#9297A0]" : "text-[#686E78]"}
            hover:text-[#9297A0]
            transition duration-300
                `}>
                {title}
            </button>
            <div className={`
                bg-[#FF0035] h-[2px]
                drop-shadow-sm drop-shadow-[#FF0035]
                `}></div>
        </div>
        
    );
}