export const portfolioData = {
  projects: [
    {
      id: 1,
      title: "Launching the V3 Data Platform",
      type: "success" as const,
      category: "success-stories",
      metric: "+400% API adoption",
      excerpt: "Led the complete redesign and launch of enterprise data platform serving financial institutions.",
      description: "Led the complete redesign and launch of enterprise data platform serving financial institutions.",
      fullContent: "The V3 Data Platform transformed how financial institutions access and utilize their data. By focusing on developer experience and API-first design, we achieved 400% growth in API adoption within the first year. Key features included real-time data streaming, enhanced security protocols, and comprehensive documentation that reduced integration time from weeks to days.",
      outcome: "Achieved 400% API adoption growth and reduced integration time from weeks to days",
      challenges: [
        "Legacy system limitations preventing scalability",
        "Complex regulatory compliance requirements",
        "Need for real-time data processing capabilities",
        "Ensuring data security across multiple financial institutions"
      ],
      approach: [
        "Implemented API-first design philosophy",
        "Developed comprehensive developer documentation",
        "Built real-time data streaming capabilities",
        "Enhanced security protocols and compliance measures"
      ],
      results: [
        "400% growth in API adoption within first year",
        "Reduced integration time from weeks to days",
        "Improved platform scalability and performance",
        "Enhanced security and compliance measures"
      ],
      metrics: [
        { metric: "API Adoption Growth", value: "+400%" },
        { metric: "Integration Time", value: "Days (from weeks)" },
        { metric: "Platform Uptime", value: "99.9%" }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      tags: ["Platform Scaling", "API Design", "Financial Technology", "Enterprise SaaS"],
      date: "2023-12-01",
      featured: true
    },
    {
      id: 2,
      title: "The Mobile-First Pivot Learning",
      type: "failure" as const,
      category: "learning-experience",
      insight: "Failure to prioritize core user loop",
      excerpt: "Early-stage product pivot that taught valuable lessons about user behavior and market timing.",
      description: "Early-stage product pivot that taught valuable lessons about user behavior and market timing.",
      fullContent: "This experience taught us the importance of validating market assumptions before major pivots. While mobile-first seemed like the right direction, we learned that our enterprise users primarily interacted with our platform through desktop applications. The key takeaway was to maintain focus on the core user value proposition while exploring new platforms incrementally.",
      outcome: "Learned critical lessons about market validation and user behavior patterns",
      challenges: [
        "Assuming mobile usage patterns matched desktop",
        "Underestimating enterprise user preferences",
        "Over-investing in mobile before validating demand",
        "Diverting resources from core product improvements"
      ],
      approach: [
        "Conducted user research across different platforms",
        "Analyzed actual usage patterns and behaviors",
        "Validated assumptions through incremental testing",
        "Pivoted strategy based on empirical data"
      ],
      results: [
        "Identified mismatch between assumptions and actual user behavior",
        "Reallocated resources to core platform improvements",
        "Developed more rigorous validation processes",
        "Improved product decision-making framework"
      ],
      learnings: [
        "Enterprise users prefer desktop for complex workflows",
        "Mobile usage was supplemental, not primary",
        "Incremental validation prevents major missteps",
        "User behavior data trumps assumptions"
      ],
      technologies: ["React Native", "Firebase", "AWS"],
      tags: ["Product Strategy", "User Research", "Market Validation", "Mobile Development"],
      date: "2023-10-15",
      featured: false
    },
    {
      id: 3,
      title: "Multi-Stakeholder Platform Negotiation Framework",
      type: "success" as const,
      category: "success-stories",
      metric: "$8M investment secured",
      excerpt: "Developed a systematic approach to align competing executive priorities and secure critical platform investments",
      description: "Created and implemented a stakeholder negotiation framework that transformed conflicting requirements into unified strategic vision, securing $8M in platform funding.",
      fullContent: "Developed and implemented a comprehensive stakeholder negotiation framework that successfully aligned competing executive priorities across finance, technology, marketing, legal, and operations departments. The framework transformed conflicting requirements into a unified strategic vision, enabling the organization to secure critical platform investments while maintaining stakeholder buy-in throughout the implementation process.",
      outcome: "Secured $8M investment with complete stakeholder alignment and accelerated implementation timeline by 9 months",
      challenges: [
        "CFO demanding immediate ROI and 30% cost reduction",
        "CTO advocating for technical excellence with 18-month timeline",
        "CMO requiring rapid feature deployment for competitive advantage",
        "Legal team imposing extensive compliance and data governance requirements",
        "Operations team needing minimal disruption to existing workflows"
      ],
      approach: [
        "Conducted stakeholder mapping and influence assessment across 12 departments",
        "Developed unified success metrics addressing all stakeholder concerns",
        "Created phased implementation roadmap with quick wins for each stakeholder group",
        "Facilitated collaborative solution design workshops with cross-functional teams",
        "Implemented transparent decision-making framework with clear escalation paths"
      ],
      results: [
        "100% stakeholder approval for $8M platform investment",
        "9-month acceleration in project timeline through parallel workstreams",
        "35% reduction in initial development costs through strategic prioritization",
        "Established cross-functional executive sponsorship committee",
        "Improved inter-departmental collaboration scores by 60%"
      ],
      metrics: [
        { metric: "Investment Secured", value: "$8M" },
        { metric: "Timeline Acceleration", value: "9 months" },
        { metric: "Cost Reduction", value: "35%" },
        { metric: "Stakeholder Satisfaction", value: "100%" }
      ],
      tags: ["Stakeholder Management", "Negotiation", "Strategic Alignment", "Executive Communication"],
      date: "2023-11-01",
      featured: true
    },
    {
      id: 4,
      title: "End-User Driven Product Transformation",
      type: "failure" as const,
      category: "learning-experience",
      insight: "Technology-driven development missed real user needs",
      excerpt: "Learning to build products users love by embracing radical customer empathy and shifting from technology-driven to human-centered development",
      description: "Pivoted from technology-driven to human-centered product development after discovering fundamental mismatches between our assumptions and actual user needs, transforming our approach to product strategy.",
      fullContent: "This transformative experience revealed how technology-driven development can create products that technically work but fail to solve real user problems. By shifting to human-centered design principles and embracing radical customer empathy, we discovered that our assumptions about user needs were fundamentally wrong in 70% of cases. This led to a complete overhaul of our product development process and ultimately resulted in dramatically improved user adoption and satisfaction.",
      outcome: "Transformed product development process to prioritize real user value, resulting in 78% user adoption and 4.2/5.0 satisfaction scores",
      challenges: [
        "Low user adoption (25%) despite positive technical metrics",
        "Development team completely disconnected from actual user contexts",
        "Feature prioritization based on executive opinions rather than user research",
        "Difficulty measuring meaningful user outcomes and business impact",
        "Cultural resistance to user research and qualitative data"
      ],
      approach: [
        "Conducted immersive user observation and journey mapping across 50+ users",
        "Implemented continuous user feedback loops with weekly synthesis sessions",
        "Restructured product team around user outcome metrics rather than feature delivery",
        "Created cross-functional customer empathy programs and user shadowing",
        "Established lightweight user research practices integrated into sprints"
      ],
      results: [
        "User adoption increased from 25% to 78% within 6 months",
        "Product satisfaction scores improved from 2.8 to 4.2/5.0",
        "Development velocity increased by 40% through better prioritization",
        "Team developed deeper understanding of user contexts and pain points",
        "Reduced feature churn by 65% through validated learning"
      ],
      learnings: [
        "Assumptions about user needs were fundamentally wrong in 70% of cases",
        "Users valued simplicity and reliability over advanced features",
        "Contextual understanding transformed team empathy and decision-making",
        "Qualitative insights revealed opportunities quantitative data missed",
        "Continuous user engagement became our most valuable innovation tool"
      ],
      metrics: [
        { metric: "User Adoption", value: "78% (from 25%)" },
        { metric: "Satisfaction Score", value: "4.2/5.0 (from 2.8)" },
        { metric: "Development Velocity", value: "+40%" },
        { metric: "Feature Churn Reduction", value: "65%" }
      ],
      tags: ["User Research", "Product Strategy", "Customer Empathy", "Human-Centered Design"],
      date: "2023-09-15",
      featured: true
    }
  ]
};