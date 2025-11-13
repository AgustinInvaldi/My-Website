// src/components/Teaching.jsx
import { motion } from "framer-motion";

export default function Teaching() {
    const items = [
        {
            title: "Profesor — Instituto Tecnológico de Río Cuarto (ITEC)",
            date: "Marzo 2024 - Actualidad",
            desc: `Docente en segundo y tercer año de la carrera de Desarrollo de Software. 
      Responsable de dictar contenidos modernos del ecosistema JavaScript.`,
            skills: [
                "JavaScript moderno",
                "React",
                "React Native",
                "Node.js",
                "Next.js",
                "Diseño Web",
                "APIs REST",
            ],
        },
    ];

    return (
        <section id="docencia" className="py-32 bg-white dark:bg-[#0f0f0f]">
            <div className="max-w-5xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center dark:text-white"
                >
                    Docencia
                </motion.h2>

                <div className="mt-12 space-y-10">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-gray-100 dark:bg-[#1b1b1b] rounded-xl shadow border dark:border-[#333]"
                        >
                            <h3 className="text-2xl font-semibold dark:text-white">
                                {item.title}
                            </h3>

                            <p className="text-blue-500 font-medium mt-1">{item.date}</p>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">{item.desc}</p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {item.skills.map((s, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-white dark:bg-[#2a2a2a] border dark:border-[#444] 
                    rounded-lg text-sm text-gray-800 dark:text-gray-300 shadow-sm"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
