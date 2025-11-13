// src/components/Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Chatbot IA Sanatorial",
            desc: "Análisis inteligente de audio, imagen y texto con IA.",
        },
        {
            title: "Plataforma Sanatorial Completa",
            desc: "Internaciones, turnos, recetas, diagnósticos y facturación.",
        },
        {
            title: "E-commerce Custom",
            desc: "Pedidos configurables, carrito smart y panel administrativo.",
        },
        {
            title: "Task Manager con Firebase",
            desc: "Autenticación, drag & drop y manejo de proyectos.",
        },
        {
            title: "Dashboard Analítico",
            desc: "Gráficos dinámicos, métricas y filtros avanzados.",
        },
        {
            title: "API REST Node.js + SQL",
            desc: "JWT, roles, autenticación y endpoints profesionales.",
        },
    ];

    return (
        <section id="proyectos" className="py-32 bg-gray-100 dark:bg-[#121212]">
            <h2 className="text-4xl font-bold text-center dark:text-white">
                Proyectos
            </h2>

            <div className="mt-16 max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: i * 0.1,
                            ease: "easeOut",
                        }}
                        whileHover={{
                            scale: 1.04,
                            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                        }}
                        className="
              p-6 rounded-xl shadow-lg
              bg-white dark:bg-[#1b1b1b]
              border border-gray-200 dark:border-[#333]
              transition-all duration-300 cursor-pointer
            "
                    >
                        <h3 className="text-xl font-semibold dark:text-white mb-2">
                            {p.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
