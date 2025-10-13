"use client"

import {useAppStore} from "@/lib/store";

export default function Dashboard() {
    const reports = useAppStore((state) => state.reports);

    const totalIncome = reports 
        .filter((r) => r.type === "i")
        .reduce((sum, r) => sum + Number.parseFloat(r.amount), 0);

    const totalExpense = reports
        .filter((r) => r.type === "e")
        .reduce((sum, r) => sum + Number.parseFloat(r.amount), 0);

    const profit = totalIncome - totalExpense;

    return (
        <div>

            <div>Income: {totalIncome}</div>
            <div>Expense: {totalExpense}</div>
            <div>Profit: {profit}</div>
            
        </div>        
    );
}