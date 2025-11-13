// src/components/Skills.jsx
import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Next.js",
        "Node.js",
        "Express",
        "SQL",
        "MySQL",
        "Sequelize",
        "MongoDB",
        "TailwindCSS",
        "Bootstrap",
        "PrimeReact",
        "Git",
        "Vite",
        "Axios",
        "Redux",
        "Context API",
        "REST APIs",
        "JWT Auth",
        "HTML5",
        "CSS3",
        "SASS",
        "Figma",
    ];

    return (
        <section id="skills" className="py-32 bg-white dark:bg-[#0f0f0f]">
            <h2 className="text-4xl font-bold text-center dark:text-white">
                Skills
            </h2>

            <div className="mt-16 max-w-6xl mx-auto flex flex-wrap justify-center gap-4 px-6">
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.35,
                            delay: i * 0.03, // stagger liviano
                            ease: "easeOut",
                        }}
                        className="
              px-6 py-3 rounded-lg text-gray-800 dark:text-gray-200
              bg-gray-200 dark:bg-[#1b1b1b]
              border border-gray-300 dark:border-[#333]
              shadow-md select-none text-sm font-medium
              transition-all duration-200 hover:scale-105 hover:shadow-xl
            "
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
