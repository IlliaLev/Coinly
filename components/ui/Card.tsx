

interface CardProps {
    title: string,
    amount: number,
}

export default function Card({title, amount} : CardProps) {
    return (
        <div 
            className={`
                w-46 h-50
              bg-[#131416]/60
                rounded-lg
                flex flex-col justify-between
            `}>
                <div className={`
                    flex flex-row items-center justify-center
                    `}>
                    <h2 className={`
                        text-3xl font-semibold
                        text-[#FF0035]
                        drop-shadow-sm drop-shadow-[#FF0035]
                        `}>{title}
                    </h2>
                </div>
                <div className={`
                    w-full
                    flex flex-col justify-center items-center
                    mb-2 text-2xl
                    text-[#686E78]
                    `}>
                    {amount}
                    <div className={`
                        w-full h-[2px]
                        mt-2
                        bg-[#FF0035]
                        drop-shadow-sm drop-shadow-[#FF0035]
                        `}></div>
                </div>
        </div>
    );
}