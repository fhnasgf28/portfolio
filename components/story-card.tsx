"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface StoryCardProps {
  image: string
  title: string
  description: string
  index: number
}

export function StoryCard({ image, title, description, index }: StoryCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <Card className="overflow-hidden bg-card border-border hover:border-primary transition-colors duration-300">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
