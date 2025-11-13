// src/components/Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
    const year = new Date().getFullYear();

    const socials = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/agust%C3%ADn-invaldi/",
            icon: "💼",
            color: "hover:text-blue-400"
        },
        {
            name: "GitHub",
            url: "https://github.com/AgustinInvaldi",
            icon: "🐙",
            color: "hover:text-purple-400"
        },
        {
            name: "Email",
            url: "mailto:a.invaldi.dsoftware@gmail.com",
            icon: "✉️",
            color: "hover:text-red-400"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/543463455764",
            icon: "💬",
            color: "hover:text-green-400"
        }
    ];

    return (
        <footer className="relative mt-32 pt-32 pb-20 overflow-hidden">

            {/* 🔥 GRADIENTE ANIMADO DE FONDO */}
            <div className="
        absolute inset-0 
        bg-gradient-to-b from-transparent via-blue-500/5 to-blue-600/10 
        dark:via-blue-500/10 dark:to-blue-900/20
        animate-gradient-motion
      " />

            {/* 🌌 PARTICULAS ANIMADAS */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-white/40 dark:bg-blue-300/30 rounded-full"
                        animate={{
                            y: [-20, 20],
                            x: [-10, 10],
                            opacity: [0.1, 1, 0.2]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            {/* CONTENIDO */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                {/* NOMBRE */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold dark:text-white"
                >
                    Agustín.dev
                </motion.h2>

                {/* SUBTÍTULO */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl mx-auto text-lg"
                >
                    Fullstack Developer — React • Node.js • JS Ecosystem
                </motion.p>

                {/* REDES */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-14 flex justify-center gap-10 text-4xl"
                >
                    {socials.map((s, i) => (
                        <motion.a
                            key={i}
                            href={s.url}
                            target="_blank"
                            whileHover={{ scale: 1.3, rotate: 8 }}
                            whileTap={{ scale: 0.9 }}
                            className={`text-gray-700 dark:text-gray-300 transition ${s.color}`}
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* BARRA DE INFORMACIÓN PRO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="
            mt-16 max-w-3xl mx-auto grid md:grid-cols-3 gap-6 
            bg-white/40 dark:bg-black/40 
            backdrop-blur-xl p-6 rounded-2xl
            border border-gray-300 dark:border-[#222]
            shadow-xl
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

                {/* COPYRIGHT */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-gray-600 dark:text-gray-400 text-sm"
                >
                    © {year} — Desarrollado por Agustín Invaldi 🚀
                </motion.p>

            </div>

            {/* 🔝 BOTÓN FLOAT PARA VOLVER ARRIBA */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.15 }}
                className="
          fixed bottom-6 right-6 p-4 text-xl
          bg-blue-600 rounded-full text-white shadow-lg
          hover:bg-blue-700 transition
        "
            >
                ⬆
            </motion.button>
        </footer>
    );
}
