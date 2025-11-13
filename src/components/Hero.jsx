// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6
      bg-white dark:bg-[#0f0f0f] relative overflow-hidden"
        >

            {/* Floating particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
                        animate={{
                            x: [0, Math.random() * 600 - 300],
                            y: [0, Math.random() * 600 - 300],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                        }}
                    />
                ))}
            </div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold dark:text-white z-10"
            >
                Hola, soy <span className="text-blue-500">Agustín</span> 👋
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl z-10"
            >
                Fullstack Developer especializado en React, Node.js, IA aplicada y soluciones modernas de software.
            </motion.p>

            {/* Button */}
            <motion.a
                href="#proyectos"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold
        shadow-lg hover:bg-blue-700 transition z-10"
            >
                Ver mis proyectos
            </motion.a>
        </section>
    );
}
