// src/app/blog/blog-data.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  featuredImage?: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-web-development-2024',
    title: 'The Future of Web Development in 2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development and how they impact business growth.',
    content: `
      <h2>Introduction</h2>
      <p>Web development continues to evolve at a rapid pace, with new frameworks, tools, and methodologies emerging regularly. As we move further into 2024, several key trends are shaping the future of web development.</p>
      
      <h2>1. Jamstack Architecture</h2>
      <p>Jamstack (JavaScript, APIs, and Markup) has gained significant traction in recent years. This architecture emphasizes pre-rendering and decoupling, resulting in faster, more secure websites and applications.</p>
      
      <h2>2. Serverless Functions</h2>
      <p>Serverless computing allows developers to build and run applications without managing infrastructure. This approach reduces operational complexity and costs while improving scalability.</p>
      
      <h2>3. AI Integration</h2>
      <p>Artificial Intelligence is increasingly being integrated into web applications, providing personalized experiences, intelligent search, and automated content generation.</p>
      
      <h2>4. WebAssembly</h2>
      <p>WebAssembly enables high-performance applications to run in the browser, opening up new possibilities for web applications that were previously only possible as native applications.</p>
      
      <h2>Conclusion</h2>
      <p>Staying current with these trends is essential for developers and businesses looking to create cutting-edge web experiences that meet user expectations and drive engagement.</p>
    `,
    author: 'Jane Smith',
    authorRole: 'Senior Web Developer',
    publishDate: '2024-01-15',
    readTime: '5 min read',
    category: 'Web Development',
    tags: ['web development', 'trends', 'technology', 'javascript']
  },
  {
    id: '2',
    slug: 'digital-transformation-business-growth',
    title: 'How Digital Transformation Can Boost Your Business',
    excerpt: 'Learn how embracing digital transformation can significantly improve your business operations and drive growth.',
    content: `
      <h2>Understanding Digital Transformation</h2>
      <p>Digital transformation is more than just adopting new technology—it's about fundamentally changing how your business operates and delivers value to customers.</p>
      
      <h2>Key Benefits</h2>
      <p>Businesses that successfully implement digital transformation see improvements in efficiency, customer experience, and innovation.</p>
      
      <h2>Getting Started</h2>
      <p>Start with a clear strategy, focus on customer needs, and build a culture that embraces change and innovation.</p>
    `,
    author: 'John Doe',
    authorRole: 'Digital Transformation Lead',
    publishDate: '2024-01-10',
    readTime: '7 min read',
    category: 'Digital Transformation',
    tags: ['digital transformation', 'business', 'strategy']
  },
  {
    id: '3',
    slug: 'mobile-app-development-native-vs-cross-platform',
    title: 'Mobile App Development: Native vs Cross-Platform',
    excerpt: 'A comprehensive comparison between native and cross-platform mobile app development approaches.',
    content: `
      <h2>Native Development</h2>
      <p>Native apps are built specifically for one platform (iOS or Android) using platform-specific programming languages.</p>
      
      <h2>Cross-Platform Development</h2>
      <p>Cross-platform solutions allow you to write code once and deploy it across multiple platforms.</p>
      
      <h2>Choosing the Right Approach</h2>
      <p>The best choice depends on your project requirements, budget, timeline, and target audience.</p>
    `,
    author: 'Alex Johnson',
    authorRole: 'Mobile Development Specialist',
    publishDate: '2024-01-05',
    readTime: '6 min read',
    category: 'Mobile Development',
    tags: ['mobile', 'react native', 'flutter', 'development']
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.slice(0, 3); // First 3 posts as featured
}

export function getRecentPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}