"use client";

import {useAppStore} from '@/lib/useAppStore';

import FilterButton from '@/components/ui/FilterButton';

export default function HistoryPage() {
    const reports = useAppStore((state) => state.reports);
    
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
                    All Reports
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
            <ul>
                {reports.map((report, idx) => (
                    <li key={idx}>Title: {report.title}   Type: {report.type}   Amount: {report.amount}</li>
                ))}
            </ul>
        </div>
    );
}