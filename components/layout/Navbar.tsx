import Toggle from "@/components/ui/Toggle";

export default function Navbar() {
    return (
        <div className={`
            flex flex-row justify-end items-center
            w-full h-14
            bg-white
        `}>
            <div className={`
                mr-5
                `}>
                <Toggle />
            </div>
        </div>
    );
}