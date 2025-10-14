"use client";

import {useAppStore} from '@/lib/useAppStore';

export default function HistoryPage() {
    const reports = useAppStore((state) => state.reports);
    
    return (
        <div>
            <ul>
                {reports.map((report, idx) => (
                    <li key={idx}>Title: {report.title}   Type: {report.type}   Amount: {report.amount}</li>
                ))}
            </ul>
        </div>
    );
}