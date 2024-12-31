"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
import * as ComparisonImage from "@/assets/compare.jpeg";
const comparisonData = [
  { feature: "Quantum Processing", us: true, competitor: false },
  { feature: "AI-Enhanced Performance", us: true, competitor: false },
  { feature: "24/7 Customer Support", us: true, competitor: true },
  { feature: "Unlimited Cloud Storage", us: true, competitor: false },
  { feature: "5-Year Warranty", us: true, competitor: false },
];

export default function Comparison() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-purple-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How We Compare
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Feature</th>
                    <th className="px-4 py-2 text-center">Our Product</th>
                    <th className="px-4 py-2 text-center">Competitor</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <td className="border px-4 py-2">{item.feature}</td>
                      <td className="border px-4 py-2 text-center">
                        {item.us ? (
                          <CheckCircle className="inline-block text-green-500" />
                        ) : (
                          <XCircle className="inline-block text-red-500" />
                        )}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {item.competitor ? (
                          <CheckCircle className="inline-block text-green-500" />
                        ) : (
                          <XCircle className="inline-block text-red-500" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={ComparisonImage}
              alt="Product Comparison Illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
