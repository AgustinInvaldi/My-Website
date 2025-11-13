// src/components/Navbar.jsx
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Inicio", href: "#inicio" },
        { label: "Sobre mí", href: "#sobremí" },
        { label: "Experiencia", href: "#experiencia" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Skills", href: "#skills" },
        { label: "Docencia", href: "#docencia" },
    ];

    return (
        <>
            {/* NAV DESKTOP */}
            <nav
                className="fixed top-0 w-full backdrop-blur-xl z-50
        bg-white/60 dark:bg-black/60 border-b border-gray-200 dark:border-[#222]"
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

                    <h1 className="text-2xl font-bold dark:text-white">
                        Agustín.dev
                    </h1>

                    {/* DESKTOP LINKS */}
                    <ul className="hidden md:flex gap-8 text-gray-800 dark:text-gray-200">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="hover:text-blue-500 transition"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        {/* HAMBURGER */}
                        <button
                            className="md:hidden text-3xl dark:text-white"
                            onClick={() => setOpen(true)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="
              fixed inset-0 bg-white/80 dark:bg-black/80 
              backdrop-blur-2xl z-50 flex flex-col p-10
            "
                    >
                        {/* CLOSE BUTTON */}
                        <div className="flex justify-end">
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                onClick={() => setOpen(false)}
                                className="text-4xl dark:text-white"
                            >
                                ✕
                            </motion.button>
                        </div>

                        {/* MOBILE LINKS LIST */}
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 },
                                },
                            }}
                            className="mt-10 flex flex-col gap-6 text-3xl text-gray-800 dark:text-gray-200"
                        >
                            {links.map((link) => (
                                <motion.li
                                    key={link.label}
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="hover:text-blue-500 transition"
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* FOOTER MOBILE */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto text-center text-gray-600 dark:text-gray-400"
                        >
                            © {new Date().getFullYear()} — Agustín.dev
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
