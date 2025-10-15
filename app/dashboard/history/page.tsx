"use client";

import {motion, Variants} from "framer-motion";

import {useAppStore} from '@/lib/useAppStore';
import { useFilterStore } from '@/lib/useFilterStore';

import FilterButton from '@/components/ui/FilterButton';
import HistoryReport from '@/components/ui/HistoryReport';

const historyReportList: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            ease: "easeOut",
        },
    },
}

const historyReport: Variants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 15,
        },
    },
}

export default function HistoryPage() {
    const reports = useAppStore((state) => state.reports);
    const {filter} = useFilterStore();
    
    return (
        <div>
            <div className={`
                w-full h-11
                flex flex-row justify-center items-center
                text-center
                pb-1.5
                `}>
                <div className={`
                    text-3xl text-[#FF0035] font-semibold 
                    drop-shadow-sm drop-shadow-[#FF0035]
                    ml-auto mr-auto
                    `}>
                    {filter === "income" ? 
                        "Income Reports" 
                        :
                        filter === "expense" ? 
                            "Expense Reports" 
                            : 
                            "All Reports"
                    }
                </div>
                <div className={`
                    flex flex-row items-center
                    mr-20 mt-2
                    `}>
                    <FilterButton></FilterButton>
                </div>
                
            </div>
            <div className={`
                w-full h-[2px]
                bg-[#FF0035] 
                drop-shadow-sm drop-shadow-[#FF0035]
                `}></div>
            <motion.ul variants={historyReportList} initial="hidden" animate="show" className={`
                ml-7 mr-7 mt-7
                space-y-3
                `}>
                {reports.map((report, idx) => (
                    <motion.li variants={historyReport}  key={idx}>
                        <HistoryReport title={report.title} type={report.type} amount={report.amount}></HistoryReport>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}