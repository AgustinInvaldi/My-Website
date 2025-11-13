// src/components/Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        { title: "Chatbot IA Sanatorial", desc: "Análisis inteligente de audio, imagen y texto." },
        { title: "Plataforma Sanatorial Completa", desc: "Internaciones, turnos, diagnósticos y más." },
        { title: "E-commerce Custom", desc: "Pedidos configurables y panel administrativo." },
        { title: "Task Manager Firebase", desc: "Auth, drag & drop y manejo de proyectos." },
        { title: "Dashboard Analítico", desc: "Gráficos, métricas y filtros avanzados." },
        { title: "API REST Node.js + SQL", desc: "Roles, JWT y endpoints profesionales." },
    ];

    return (
        <section id="proyectos" className="py-32 bg-gray-100 dark:bg-[#121212]">
            <h2 className="text-4xl font-bold text-center dark:text-white">Proyectos</h2>

            <div className="mt-16 max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.1 }}
                        className="
                            p-6 rounded-xl shadow-lg
                            bg-white dark:bg-[#1b1b1b]
                            border border-gray-200 dark:border-[#333]
                            hover:shadow-2xl transition-all duration-200
                        "
                    >
                        <h3 className="text-xl font-semibold dark:text-white mb-2">{p.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
