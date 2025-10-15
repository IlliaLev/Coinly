"use client";

interface PopupButtonProps {
    title: string,
}

export default function PopupButton({title} : PopupButtonProps) {
    return (
        <div>
            <button className={`
            text-[#686E78]
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