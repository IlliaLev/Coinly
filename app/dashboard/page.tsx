"use client"

import {useAppStore} from "@/lib/useAppStore";

import Card from "@/components/ui/Card";

import {motion, Variants} from "framer-motion";

const cardList: Variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            ease: "easeOut",
        },
    },
}

const card: Variants = {
    hidden: {opacity: 0, x: 300},
    show: {
        opacity: 1, 
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 15,
        }
    },
}

export default function Dashboard() {
    const reports = useAppStore((state) => state.reports);

    const totalIncome = reports 
        .filter((r) => r.type === "i")
        .reduce((sum, r) => sum + Number.parseFloat(r.amount), 0);

    const totalExpense = reports
        .filter((r) => r.type === "e")
        .reduce((sum, r) => sum + Number.parseFloat(r.amount), 0);

    const profit = totalIncome - totalExpense;

    const cards = [
        {id: 1, title: "Income", amount: totalIncome},
        {id: 2, title: "Expense", amount: totalExpense},
        {id: 3, title: "Profit", amount: profit},
    ];

    return (
        <div className={`
            flex flex-row items-center justify-center
            mt-5
            `}>
            <motion.ul variants={cardList} initial="hidden" animate="show" className={`
                flex flex-row gap-30 items-center overflow-hidden
                py-6 px-6
                `}>
                {cards.map(({id, title, amount}) => (
                    <motion.li key={id} variants={card} whileHover={{scale: 1.2}}>
                        <Card title={title} amount={amount}></Card>
                    </motion.li>
                ))}
            </motion.ul>
                
        </div>      
    );
}