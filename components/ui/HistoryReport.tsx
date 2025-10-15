interface HistoryReportProps {
    title: string,
    type: string,
    amount: string,
}

export default function HistoryReport({title, type, amount} : HistoryReportProps){
    return (
        <div className={`
            w-full
            
        `}>
            <div className={`
                flex flex-row justify-between
                `}>
                <div className={`
                        flex items-center
                        text-2xl font-semibold text-[#686E78]
                        ml-2
                    `}>
                    {title}
                </div>
                <div className={`
                    flex items-center
                    mr-2
                    text-xl
                    ${type === "i" ? `
                            text-[#3BB273]
                            drop-shadow-sm drop-shadow-[#3BB273]
                        ` 
                        : `
                            text-[#FF3535]
                            drop-shadow-sm drop-shadow-[#FF3535]
                        `
                    }
                    `}>
                    {amount}
                </div>
                </div>
            <div className={`
                w-full h-[2px]
                bg-[#FF0035]
                drop-shadow-sm drop-shadow-[#FF0035]
                `}></div>
        </div>
    );
}