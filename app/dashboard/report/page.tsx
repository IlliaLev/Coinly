"use client";

import {useState} from "react";

import { useAppStore } from "@/lib/useAppStore";

export default function ReportPage() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");

    const addReport = useAppStore((state) => state.addReport);

    const handleAddReport = () => {
        if(title.trim() === "") {
            alert("Please enter title");
        } else if(type === "u") {
            alert("Please choose type");
        } else if(amount.trim() === "") {
            alert("Please enter amount");
        } else {
            addReport({title: title, type: type, amount: amount});
        } 
    }

    return (
        <div className={`
        flex flex-col 
        ml-10 mt-5
        `}>
            <section className={`
                flex flex-col
                `}>
                <h2>Title</h2>
                <label><input type="text" placeholder="Enter title of the report" value={title} onChange={(e) => setTitle(e.target.value)}/></label>
            </section>
            <section className={`
                flex flex-col
                `}>
                <h2>Type and Amount</h2>
                <select className={`
                    w-34
                    `} onChange={(e) => setType((e.target.value !== "" ? (e.target.value === "income" ? "i" : "e") : "u"))}>
                    <option value="">Choose the type</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <label><input type="number" placeholder="Enter amount of money..." value={amount} onChange={(e) => setAmount(e.target.value)}/></label>
            </section>
            <section className={`
                flex flex-col items-start
                `}>
                <button onClick={handleAddReport}>Add Report</button>
            </section>
        </div>
    );
}