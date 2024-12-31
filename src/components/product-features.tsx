"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, Smartphone, Globe, Cloud, Cpu } from "lucide-react";
import Image from "next/image";
import * as AIImage from "@/assets/ai.jpeg";
import * as CloudImage from "@/assets/cloud.jpeg";
import * as FastImage from "@/assets/fast.jpeg";
import * as GlobalImage from "@/assets/global.jpeg";
import * as ReadyImage from "@/assets/ready.jpeg";
import * as SecureImage from "@/assets/secure.jpeg";

export default function ProductFeatures() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience unparalleled speed and performance.",
      image: FastImage,
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Your data is protected with state-of-the-art encryption.",
      image: SecureImage,
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Access your work from anywhere, on any device.",
      image: ReadyImage,
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support available in multiple languages.",
      image: GlobalImage,
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamlessly sync and backup your data to the cloud.",
      image: CloudImage,
    },
    {
      icon: Cpu,
      title: "AI-Powered",
      description:
        "Harness the power of artificial intelligence for smarter workflows.",
      image: AIImage,
    },
  ];

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-100 to-indigo-100 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-purple-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cutting-Edge Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          style={{ scale }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="mb-6"
              >
                <feature.icon className="h-16 w-16 text-purple-600" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <Image
                  src={feature.image}
                  alt={`${feature.title} feature illustration`}
                  width={400}
                  height={300}
                  className="rounded-xl shadow-md"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="absolute top-0 right-0 -z-10"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 45]),
        }}
      >
        <Image
          src="/placeholder.svg?height=400&width=400&text=Features"
          alt="Decorative top right"
          width={400}
          height={400}
          className="opacity-10"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 -z-10"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -200]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -45]),
        }}
      >
        <Image
          src="/placeholder.svg?height=300&width=300&text=Tech"
          alt="Decorative bottom left"
          width={300}
          height={300}
          className="opacity-10"
        />
      </motion.div>
    </section>
  );
}
