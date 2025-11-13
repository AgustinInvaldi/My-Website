// src/components/Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
    const year = new Date().getFullYear();

    const socials = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/agust%C3%ADn-invaldi/", icon: "💼" },
        { name: "GitHub", url: "https://github.com/AgustinInvaldi", icon: "🐙" },
        { name: "Email", url: "mailto:a.invaldi.dsoftware@gmail.com", icon: "✉️" },
        { name: "WhatsApp", url: "https://wa.me/543463455764", icon: "💬" }
    ];

    return (
        <footer className="mt-32 pt-32 pb-20 bg-white dark:bg-[#0c0c0c] relative">

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                {/* Name */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold dark:text-white"
                >
                    Agustín.dev
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl mx-auto text-lg"
                >
                    Fullstack Developer — React • Node.js • SQL • IA aplicada
                </motion.p>

                {/* Socials */}
                <div className="mt-14 flex justify-center gap-10 text-4xl">
                    {socials.map((s, i) => (
                        <motion.a
                            key={i}
                            href={s.url}
                            target="_blank"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
                            whileHover={{ scale: 1.2 }}
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Contact Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="
                        mt-16 max-w-3xl mx-auto grid md:grid-cols-3 gap-6
                        bg-white/40 dark:bg-black/40 backdrop-blur-xl p-6 rounded-2xl
                        border border-gray-300 dark:border-[#222] shadow-xl
                    "
                >
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                        <p className="dark:text-white font-semibold">a.invaldi.dsoftware@gmail.com</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Teléfono</p>
                        <p className="dark:text-white font-semibold">3463455764</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ubicación</p>
                        <p className="dark:text-white font-semibold">Río Cuarto, Córdoba</p>
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-gray-600 dark:text-gray-400 text-sm"
                >
                    © {year} — Desarrollado por Agustín Invaldi 🚀
                </motion.p>

            </div>
        </footer>
    );
}
