// src/hooks/useScrollReveal.js
import { useEffect } from "react";
import { animate, stagger } from "framer-motion";

export default function useScrollReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");

        elements.forEach((el, index) => {
            el.style.opacity = 0;
            el.style.transform = "translateY(30px)";
            el.style.filter = "blur(5px)";

            const handleScroll = () => {
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight - 100;

                if (isVisible) {
                    animate(
                        el,
                        { opacity: 1, y: 0, filter: "blur(0px)" },
                        { duration: 0.7, delay: index * 0.06, ease: "easeOut" }
                    );
                    window.removeEventListener("scroll", handleScroll);
                }
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll();
        });
    }, []);
}
