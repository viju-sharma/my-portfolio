"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center text-gray-600">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; VIJU. All rights reserved.
        </motion.p>
        <motion.div
          className="mt-4 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/vijender-sharma/"
            className="text-purple-600 hover:text-purple-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon />
          </motion.a>
          <motion.a
            href="https://github.com/viju-sharma"
            className="text-purple-600 hover:text-purple-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
