"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as ExpImage from "@/assets/experience.jpeg";

export default function CallToAction() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.7, 0.8], [0.8, 1]);
  const MotionButton = motion.create(Button);

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 overflow-hidden relative">
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row items-center relative z-10"
        style={{ opacity, scale }}
      >
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <motion.h2
            className="text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Digital Experience?
          </motion.h2>
          <motion.p
            className="text-xl text-purple-200 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of satisfied customers and elevate your digital life
            today. Experience the future of technology, tailored just for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MotionButton
              size="lg"
              className="bg-white text-purple-800 hover:bg-purple-100 text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </MotionButton>
          </motion.div>
        </div>
        <motion.div
          className="lg:w-1/2 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src={ExpImage}
            alt="Experience the Future Illustration"
            width={800}
            height={600}
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
