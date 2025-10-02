"use client"

import { StoryCard } from "@/components/story-card"
import { storyData } from "@/lib/story-data"

export function StoryTimeline() {
  return (
    <section id="story" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">My Story</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A journey through experiences that shaped who I am today
          </p>
        </div>

        <div className="space-y-12">
          {storyData.map((story, index) => (
            <StoryCard
              key={story.id}
              image={story.image}
              title={story.title}
              description={story.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
