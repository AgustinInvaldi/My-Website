// src/components/Navbar.jsx
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Inicio", href: "#inicio" },
        { label: "Sobre mí", href: "#sobremi" },
        { label: "Experiencia", href: "#experiencia" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Skills", href: "#skills" },
        { label: "Docencia", href: "#docencia" },
    ];

    return (
        <>
            <nav className="fixed top-0 w-full backdrop-blur-lg z-50
                bg-white/60 dark:bg-black/60 border-b border-gray-200 dark:border-[#222]">
                <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

                    <h1 className="text-2xl font-bold dark:text-white">
                        Agustín.dev
                    </h1>

                    {/* DESKTOP */}
                    <ul className="hidden md:flex gap-8 text-gray-800 dark:text-gray-200">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} className="hover:text-blue-500 transition">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right side */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            className="md:hidden text-3xl dark:text-white"
                            onClick={() => setOpen(true)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.35 }}
                        className="fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-xl z-50 flex flex-col p-10"
                    >
                        <div className="flex justify-end">
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                onClick={() => setOpen(false)}
                                className="text-4xl dark:text-white"
                            >
                                ✕
                            </motion.button>
                        </div>

                        <ul className="mt-10 flex flex-col gap-7 text-3xl text-gray-800 dark:text-gray-200">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="hover:text-blue-500 transition"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-auto text-center text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} — Agustín.dev
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
