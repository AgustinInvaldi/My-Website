// src/components/Experience.jsx
import { motion } from "framer-motion";

export default function Experience() {
    const jobs = [
        {
            title: "Fullstack Developer - Emprinet 4.0",
            date: "2022 - Actualidad",
            desc: "Plataforma sanatorial, chatbot IA, internaciones, turnos, diagnósticos automáticos, facturación y kinesiología.",
        },
        {
            title: "Fullstack Developer - ImaJine Studio",
            date: "2021 - 2022",
            desc: "App comercial, e-commerce, paneles administrativos, campañas políticas, Vue y Laravel.",
        },
        {
            title: "Integraciones Freelance",
            date: "2020 - 2021",
            desc: "Mercado Pago, AFIP y módulos administrativos.",
        },
    ];

    return (
        <section id="experiencia" className="py-32 bg-white dark:bg-[#0f0f0f]">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center dark:text-white">Experiencia</h2>

                <div className="mt-12 space-y-12">
                    {jobs.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="border-l-4 border-blue-500 pl-6"
                        >
                            <h3 className="text-2xl font-semibold dark:text-white">{job.title}</h3>
                            <span className="text-blue-500 font-medium">{job.date}</span>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{job.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
