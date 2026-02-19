"use client";
import { motion } from "framer-motion";

export default function ScrollAnimation({ children, delay = 0.2 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }} >
            {children}
        </motion.div>
    );
}