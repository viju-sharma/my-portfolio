'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes our product unique?",
    answer: "Our product features cutting-edge quantum processing technology and AI-enhanced performance, setting it apart from conventional alternatives."
  },
  {
    question: "How long is the warranty?",
    answer: "We offer an industry-leading 5-year warranty, demonstrating our confidence in the product's durability and performance."
  },
  {
    question: "Is customer support available 24/7?",
    answer: "Yes, our dedicated support team is available round the clock to assist you with any queries or issues."
  },
  {
    question: "What about data security?",
    answer: "We implement state-of-the-art encryption and security measures to ensure your data remains protected at all times."
  }
]

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-purple-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

