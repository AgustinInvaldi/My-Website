import { motion } from "framer-motion";

export default function SkillsChart() {
    const skills = [
        { name: "React", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "SQL", level: 80 },
        { name: "Tailwind", level: 60 },
        { name: "Git", level: 90 },
        { name: "Next.js", level: 50 },
    ];

    return (
        <div className="grid md:grid-cols-3 gap-10 mt-16">
            {skills.map((s, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center"
                >
                    <div className="relative w-32 h-32">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="64"
                                cy="64"
                                r="55"
                                stroke="#333"
                                strokeWidth="10"
                                fill="none"
                            />
                            <motion.circle
                                cx="64"
                                cy="64"
                                r="55"
                                stroke="#3b82f6"
                                strokeWidth="10"
                                fill="none"
                                strokeDasharray={2 * Math.PI * 55}
                                strokeDashoffset={2 * Math.PI * 55}
                                animate={{
                                    strokeDashoffset:
                                        2 * Math.PI * 55 - (2 * Math.PI * 55 * s.level) / 100,
                                }}
                                transition={{ duration: 1.5 }}
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-lg dark:text-white">
                            {s.level}%
                        </span>
                    </div>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">{s.name}</p>
                </motion.div>
            ))}
        </div>
    );
}
