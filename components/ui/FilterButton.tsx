"use client";

import {useState} from "react";

import {ListFilter} from "lucide-react";

import {motion, Variants, AnimatePresence} from "framer-motion";

import PopupButton from "./PopupButton";

import { useFilterStore } from "@/lib/useFilterStore";

export default function FilterButton() {
    const {filter, setFilter} = useFilterStore();
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = (filter: string) => {
        setIsOpen((prev) => !prev);
        setFilter(filter);
    }

    const button: Variants = {
        hidden: {
            scale: isOpen ? 0.9 : 1,
        },
        show: {
            scale: isOpen ? 0.9 : 1.2,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 15,
                duration: 300,
            },
        },
        tap: {
            scale: 0.9,
            transition: {
                type: "spring",
                stiffness: 50, 
                damping: 15,
                duration: 300,
            },
        },
    };

    const popup: Variants = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 300,
            },
        },
    };

    return (
        <div className={`
            relative inline-block content-center
        `}>
            <motion.button variants={button} initial="hidden" exit="hidden" animate="animate" whileHover="show" whileTap="tap" whileFocus="tap" onClick={() => togglePopup(filter)}>
            <ListFilter size={30} className={`
                text-[#FF0035]
                drop-shadow-sm drop-shadow-[#FF0035]
                `}/>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div variants={popup} initial="hidden" exit="hidden" animate="show" className={`
                        absolute right-0
                        mt-4 w-22
                        pb-1
                        rounded-lg bg-[#131416]
                        z-50
                    `}>
                        <p className={`
                            text-lg text-[#FF0035] font-semibold
                            drop-shadow-sm drop-shadow-[#FF0035]
                            `}>Filter by:</p>
                        <ul className={`
                            space-y-1 
                            mt-3 mb-1
                            `}>
                            <li onClick={() => togglePopup("income")}>
                                <PopupButton title="Income" isSelected={filter === "income" ? true : false}></PopupButton>
                            </li>
                            <li onClick={() => togglePopup("expense")}>
                                <PopupButton title="Expense" isSelected={filter === "expense" ? true : false}></PopupButton>
                            </li>
                            <li onClick={() => togglePopup("date")}>
                                <PopupButton title="Date" isSelected={filter === "date" ? true : false}></PopupButton>
                            </li>
                            <li onClick={() => togglePopup("none")}>
                                <PopupButton title="No Filters" isSelected={filter === "none" ? true : false}></PopupButton>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        
    );
}