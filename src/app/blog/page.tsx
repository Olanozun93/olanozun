import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/content/blog-posts'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Articles, Keynotes, and The Product Playbook
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights on product strategy, platform scaling, AI ethics, and the future of technology.
          </p>
          
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {['All', 'AI Ethics', 'Platform Scaling', 'Developer Experience', 'Keynote'].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 rounded-full border border-gray-300 hover:border-black transition-colors text-sm font-medium"
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>

        {/* Featured Product Playbook */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <div className="p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                The Product Playbook
              </h2>
              <p className="text-gray-700 mb-6 text-lg max-w-2xl mx-auto">
                My comprehensive framework for product development, from ideation to scale. 
                Includes battle-tested methodologies for prioritization, roadmapping, and team alignment.
              </p>
              <Link href="/portfolio#toolkit">
                <Button className="bg-[#ff581b] text-white border-0 hover:bg-[#e04e18]">
                  Access the Playbook <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} hover className="flex flex-col h-full">
              <div className="flex-1 p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 pt-0">
                <Button 
                  variant="accent-outline"  // New accent outline variant
                  href={`/blog/${post.slug}`}
                  className="w-full justify-center"
                >
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}