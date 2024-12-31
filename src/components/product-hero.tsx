"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as ProductImage from "@/assets/product.jpeg";

export default function ProductHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const MotionButton = motion.create(Button);
  return (
    <section className="py-24 px-6 overflow-hidden relative min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 mb-10 lg:mb-0 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-purple-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Revolutionize Your Digital Experience
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Experience the future of technology with our cutting-edge product.
            Seamless integration, unparalleled performance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <MotionButton
              size="lg"
              className="bg-purple-600 text-white hover:bg-purple-700 text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </MotionButton>
          </motion.div>
        </motion.div>
        <motion.div className="lg:w-1/2 relative" style={{ y, opacity, scale }}>
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <Image
              src={ProductImage}
              alt="Revolutionary Product Showcase"
              className="rounded-3xl shadow-2xl"
            />
            <motion.div
              className="absolute -top-6 -left-6 bg-yellow-400 text-purple-800 font-bold py-3 px-6 rounded-full text-lg shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              New Release!
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-0 right-0 -z-10"
        style={{ y: useTransform(scrollY, [0, 500], [0, 150]) }}
      >
        <Image
          src={ProductImage}
          alt="Decorative top right"
          className="opacity-20"
        />
      </motion.div>
    </section>
  );
}
