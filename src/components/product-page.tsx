"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "./header";
import Footer from "./footer";
import ProductHero from "./product-hero";
import ProductDetails from "./product-details";
import ProductFeatures from "./product-features";
import Testimonials from "./testimonials";
import CallToAction from "./call-to-action";
import TechSpecs from "./tech-specs";
import Comparison from "./comparison";
import FAQ from "./faq";

export default function ProductPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-indigo-100"
    >
      <motion.div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      />
      <Header />
      <main>
        <ProductHero />
        <ProductDetails />
        <ProductFeatures />
        <TechSpecs />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
