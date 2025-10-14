"use client";

import {useState} from "react";

import {ListFilter} from "lucide-react";

import {motion, Variants, AnimatePresence} from "framer-motion";

export default function FilterButton() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen((prev) => !prev);
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
            <motion.button variants={button} initial="hidden" exit="hidden" whileHover="show" whileTap="tap" whileFocus="tap" onClick={togglePopup}>
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
                        rounded-lg bg-[#131416]
                        z-50
                    `}>
                        <p className={`
                            text-lg text-[#FF0035] font-semibold
                            drop-shadow-sm drop-shadow-[#FF0035]
                            `}>Filter by:</p>
                        <ul className="space-y-1">
                            <li>
                                <button >Income</button>
                            </li>
                            <li>
                                <button>Expense</button>
                            </li>
                            <li>
                                <button>Date</button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        
    );
}