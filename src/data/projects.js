export const projects = [
  {
    id: 1,
    title: "Mindful Journey",
    tagline: "A meditation app that adapts to your mood",
    tags: ["UX Design", "UI Design", "Coded"],
    thumbnail: "/images/project1-thumb.jpg",
    color: "lavender",
    overview: "Designed and developed a meditation app that uses mood tracking to personalize daily sessions.",
    problem: "Users struggle to maintain consistent meditation habits because generic apps don't adapt to their emotional needs.",
    research: {
      methods: ["User Interviews", "Surveys", "Competitive Analysis"],
      insights: [
        "87% of users want personalized content based on their current mood",
        "Morning sessions are 3x more likely to be completed",
        "Visual cues significantly impact user engagement"
      ]
    },
    ideation: {
      concepts: ["Mood-based algorithms", "Adaptive UI colors", "Progress visualization"],
      sketches: ["/images/project1-sketch1.jpg", "/images/project1-sketch2.jpg"]
    },
    ui: {
      mockups: ["/images/project1-ui1.jpg", "/images/project1-ui2.jpg"],
      designSystem: {
        colors: ["#E9D5FF", "#F3E8FF", "#FAE8FF"],
        typography: "Rounded, calming typefaces"
      }
    },
    development: {
      stack: ["React", "Node.js", "MongoDB"],
      challenges: "Implementing real-time mood analysis",
      learnings: "Learned to integrate sentiment analysis APIs",
      liveLink: "https://mindfuljourney.app",
      githubLink: "https://github.com/yourusername/mindful-journey"
    },
    reflection: "This project taught me the importance of emotional design and how subtle UI changes can significantly impact user wellbeing."
  },
  {
    id: 2,
    title: "Local Treasures",
    tagline: "Connecting communities through local artisan discovery",
    tags: ["UX Design", "UI Design"],
    thumbnail: "/images/project2-thumb.jpg",
    color: "pink",
    overview: "A marketplace platform that helps users discover and support local artisans.",
    problem: "Local artisans struggle to reach customers, while consumers want authentic, locally-made products but don't know where to find them.",
    research: {
      methods: ["Field Studies", "Stakeholder Interviews", "Journey Mapping"],
      insights: [
        "Trust is the #1 factor in purchasing from unknown artisans",
        "Story-telling increases purchase intent by 64%",
        "Mobile-first approach essential for on-the-go discovery"
      ]
    },
    ideation: {
      concepts: ["Artisan stories", "Location-based discovery", "Community reviews"],
      sketches: ["/images/project2-sketch1.jpg"]
    },
    ui: {
      mockups: ["/images/project2-ui1.jpg", "/images/project2-ui2.jpg"],
      designSystem: {
        colors: ["#FCE4EC", "#F8BBD0", "#F48FB1"],
        typography: "Warm, approachable sans-serif"
      }
    },
    reflection: "Working with local communities showed me how design can bridge gaps and create meaningful connections."
  }
];