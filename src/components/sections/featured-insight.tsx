import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function FeaturedInsight() {
  const featuredPost = {
    title: "The Paradox of the Generalist AI",
    date: "December 2024",
    excerpt: "Exploring the balance between specialized AI systems and general-purpose models in enterprise environments.",
    slug: "paradox-generalist-ai"
  }

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Thought Leadership</h2>
        <Card hover className="max-w-4xl mx-auto">
          <div className="p-8">
            <span className="text-sm text-gray-500">{featuredPost.date}</span>
            <h3 className="text-2xl font-bold mb-4 mt-2">{featuredPost.title}</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <Button variant="primary" href={`/blog/${featuredPost.slug}`}>
               Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}