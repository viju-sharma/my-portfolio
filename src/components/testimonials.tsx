"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "This product has revolutionized our workflow. The AI-powered features have significantly boosted our productivity. Highly recommended!",
    avatar: "https://github.com/shadcn.png",
  },
  {
    name: "Jane Smith",
    role: "Designer, CreativeCo",
    content:
      "The user interface is intuitive and the features are top-notch. It's made our design process so much smoother and more efficient.",
    avatar: "https://github.com/shadcn.png",
  },
  {
    name: "Mike Johnson",
    role: "Developer, CodeInc",
    content:
      "The performance boost we've seen is incredible. Our development team can now focus on innovation rather than infrastructure. A game-changer!",
    avatar: "https://github.com/shadcn.png",
  },
];

export default function Testimonials() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-800 to-indigo-900 text-white relative overflow-hidden">
      <motion.div className="container mx-auto relative z-10" style={{ y }}>
        <motion.h2
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4 border-2 border-purple-400"
                />
                <div>
                  <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                  <p className="text-purple-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-100 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
        }}
      >
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Testimonials+Background"
          alt="Testimonials background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </motion.div>
    </section>
  );
}
