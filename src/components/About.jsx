// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="sobremi" className="py-32 bg-gray-100 dark:bg-[#121212]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* PHOTO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="relative w-64 h-64 flex justify-center items-center">
                        {/* Blob decorativo */}
                        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl" />

                        <img
                            src="/profile.jpeg"
                            alt="Agustín Invaldi"
                            className="w-full h-full object-cover rounded-full border-4 border-white dark:border-[#1b1b1b] relative"
                        />
                    </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-gray-700 dark:text-gray-300 text-lg"
                >
                    <h2 className="text-4xl font-bold dark:text-white">Sobre mí</h2>

                    <p>
                        Soy <strong className="text-blue-500">Agustín Invaldi</strong>, desarrollador Fullstack con más de 4 años creando herramientas de alto impacto para salud, IA, e-commerce y sistemas administrativos complejos.
                    </p>

                    <p>
                        Disfruto crear software útil, moderno, escalable y cuidar cada detalle de UI/UX. Trabajo con React, Node.js, SQL, Tailwind y tecnologías modernas del ecosistema JS.
                    </p>

                    <p>
                        También soy docente en el ITEC Río Cuarto, formando a futuros desarrolladores en JavaScript, React, Node.js y más.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
