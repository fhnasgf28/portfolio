export interface Story {
  id: string
  image: string
  title: string
  description: string
}

export const storyData: Story[] = [
  {
    id: "1",
    image: "/coding-setup.png",
    title: "The Beginning",
    description:
      "My journey into tech started with a simple curiosity about how websites work. I spent countless nights learning HTML, CSS, and JavaScript, building small projects that gradually grew in complexity. This self-taught foundation taught me the importance of persistence and continuous learning.",
  },
  {
    id: "2",
    image: "/modern-office-collaboration.png",
    title: "First Professional Role",
    description:
      "Landing my first job as a junior developer was a pivotal moment. Working alongside experienced engineers, I learned not just about code, but about collaboration, code reviews, and building products that real users depend on. This experience shaped my approach to software development.",
  },
  {
    id: "3",
    image: "/tech-conference-presentation.png",
    title: "Sharing Knowledge",
    description:
      "As I grew in my career, I discovered a passion for teaching and mentoring. I started writing technical articles, speaking at local meetups, and helping junior developers navigate their own journeys. Giving back to the community that helped me grow became an integral part of my identity.",
  },
  {
    id: "4",
    image: "/modern-web-application-on-laptop-screen.jpg",
    title: "Building for Impact",
    description:
      "Today, I focus on creating accessible, performant web applications that make a difference. Every project is an opportunity to combine technical excellence with thoughtful design, ensuring that what we build serves users effectively and inclusively. The journey continues, and I'm excited for what's next.",
  },
]
