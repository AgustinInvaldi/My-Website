// src/components/FXUltraLite.jsx
import { motion } from "framer-motion";

export default function FXUltraLite() {
    return (
        <>
            {/* Light Glow */}
            <motion.div
                className="fixed inset-0 z-[-1] pointer-events-none"
                animate={{
                    opacity: [0.6, 0.75, 0.6],
                    scale: [1, 1.05, 1],
                }}
                transition={{ duration: 12, repeat: Infinity }}
            >
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-15%] w-[55vw] h-[55vw] bg-purple-500/10 blur-[120px] rounded-full" />
            </motion.div>

            {/* Soft Parallax */}
            <motion.div
                className="fixed inset-0 z-[-1] pointer-events-none"
                animate={{
                    x: ["-1%", "1%", "-1%"],
                    y: ["1%", "-1%", "1%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="absolute top-1/3 left-1/3 w-[40vw] h-[40vw] bg-cyan-400/10 blur-[110px] rounded-full" />
            </motion.div>
        </>
    );
}
