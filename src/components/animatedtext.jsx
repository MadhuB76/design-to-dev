import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // <- add motion here

export default function AnimatedText() {
  const words = ["Structured.", "Chaos!"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change word every 2 seconds

    return () => clearInterval(interval);
  },);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#FD2E35]"
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}
