'use client'

import { motion } from 'framer-motion'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const specs = [
  { name: "Processor", value: "Quantum Core i9" },
  { name: "RAM", value: "32GB DDR5" },
  { name: "Storage", value: "1TB NVMe SSD" },
  { name: "Display", value: "15.6\" 4K OLED" },
  { name: "Battery", value: "100Wh Li-ion" },
  { name: "Weight", value: "1.5 kg" }
]

export default function TechSpecs() {
  return (
    <section className="py-24 px-6 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-purple-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Specifications
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Specification</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specs.map((spec, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{spec.name}</TableCell>
                  <TableCell>{spec.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  )
}

