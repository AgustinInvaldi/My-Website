// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="sobremí" className="py-32 bg-gray-100 dark:bg-[#121212]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* PHOTO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="relative w-64 h-64">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-b-purple-500"
                        ></motion.div>

                        <img
                            src="/profile.jpeg"
                            alt="Foto de Agustín Invaldi"
                            className="w-full h-full object-cover rounded-full border-4 border-white dark:border-[#1b1b1b]"
                        />
                    </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 text-gray-700 dark:text-gray-300 text-lg"
                >
                    <h2 className="text-4xl font-bold dark:text-white">Sobre mí</h2>
                    <p>
                        Soy <strong className="text-blue-500">Agustín Invaldi</strong>,
                        desarrollador Fullstack con +4 años creando soluciones de alto impacto
                        para salud, IA aplicada, e-commerce y sistemas administrativos.
                    </p>

                    <p>
                        Me apasiona crear software que realmente ayuda a las personas e
                        integrar tecnologías modernas como React, Node.js, SQL, Tailwind y
                        herramientas de IA.
                    </p>

                    <p>
                        Además, soy docente del Instituto Tecnológico de Río Cuarto, donde
                        formo a estudiantes en desarrollo web y tecnologías modernas.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
