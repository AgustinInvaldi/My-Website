// src/components/ThemeToggle.jsx
import { useState, useEffect } from "react";
import { applyTheme } from "../theme";

export default function ThemeToggle() {
    const [dark, setDark] = useState(() =>
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        applyTheme(dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-[#1a1a1a] 
      border border-gray-300 dark:border-[#333]
      transition-all duration-300 hover:scale-110"
        >
            <span
                className={`text-xl transition-all duration-500 ${dark ? "rotate-180" : "rotate-0"
                    }`}
            >
                {dark ? "🌙" : "☀️"}
            </span>
        </button>
    );
}
