export const portfolioData = {
  projects: [
    {
      id: 1,
      title: "Launching the V3 Data Platform",
      type: "success" as const,
      metric: "+400% API adoption",
      description: "Led the complete redesign and launch of enterprise data platform serving financial institutions.",
      fullContent: "The V3 Data Platform transformed how financial institutions access and utilize their data. By focusing on developer experience and API-first design, we achieved 400% growth in API adoption within the first year. Key features included real-time data streaming, enhanced security protocols, and comprehensive documentation that reduced integration time from weeks to days.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"]
    },
    {
      id: 2,
      title: "The Mobile-First Pivot Learning",
      type: "failure" as const,
      insight: "Failure to prioritize core user loop",
      description: "Early-stage product pivot that taught valuable lessons about user behavior and market timing.",
      fullContent: "This experience taught us the importance of validating market assumptions before major pivots. While mobile-first seemed like the right direction, we learned that our enterprise users primarily interacted with our platform through desktop applications. The key takeaway was to maintain focus on the core user value proposition while exploring new platforms incrementally.",
      technologies: ["React Native", "Firebase", "AWS"]
    }
  ]
}