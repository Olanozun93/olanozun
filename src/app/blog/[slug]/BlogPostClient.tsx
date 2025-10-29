'use client'

import { usePathname } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowLeft, Clock, Share2, Star, BookOpen, Target, Lightbulb, Zap, X, Copy, Check, MessageCircle, Linkedin, Twitter, Facebook, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState, ReactNode } from 'react'

interface BlogPost {
  id: number
  title: string
  slug: string
  date: string
  author: string
  excerpt: string
  content: string
  tags: string[]
  readTime: string
  featured?: boolean
}

interface BlogPostClientProps {
  post: BlogPost
}

// Custom components for enhanced content
const KeyInsight = ({ children, icon: Icon = Lightbulb }: { children: ReactNode; icon?: any }) => (
  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
      <div className="text-blue-800 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
)

const StepByStep = ({ steps }: { steps: string[] }) => (
  <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl my-8 border border-gray-200">
    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
      <Zap className="w-5 h-5 text-orange-500" />
      Quick Implementation Steps
    </h4>
    <ol className="space-y-3">
      {steps.map((step, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
            {index + 1}
          </span>
          <span className="text-gray-700 leading-relaxed">{step}</span>
        </li>
      ))}
    </ol>
  </div>
)

const ComparisonTable = ({ data }: { data: { aspect: string; optionA: string; optionB: string }[] }) => (
  <div className="my-8 overflow-hidden rounded-lg border border-gray-200 bg-white">
    <table className="w-full">
      <thead>
        <tr className="bg-gray-50 border-b border-gray-200">
          <th className="px-6 py-4 text-left font-semibold text-gray-900">Aspect</th>
          <th className="px-6 py-4 text-left font-semibold text-gray-900">Option A</th>
          <th className="px-6 py-4 text-left font-semibold text-gray-900">Option B</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-200">{row.aspect}</td>
            <td className="px-6 py-4 text-gray-700">{row.optionA}</td>
            <td className="px-6 py-4 text-gray-700">{row.optionB}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const MetricCard = ({ metric, value, description, trend }: { metric: string; value: string; description: string; trend?: string }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
    <div className="text-2xl font-bold text-gray-900 mb-2">{value}</div>
    <div className="text-sm font-semibold text-gray-700 mb-2">{metric}</div>
    <div className="text-xs text-gray-600 leading-relaxed">{description}</div>
    {trend && (
      <div className="text-xs text-green-600 mt-2 font-medium">{trend}</div>
    )}
  </div>
)

// Share Modal Component
const ShareModal = ({ isOpen, onClose, post, url }: { isOpen: boolean; onClose: () => void; post: BlogPost; url: string }) => {
  const [copied, setCopied] = useState(false)

  const shareOptions = [
    {
      name: 'Copy Link',
      icon: Copy,
      color: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
      action: () => {
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-100 hover:bg-green-200 text-green-700',
      action: () => window.open(`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${url}`)}`, '_blank')
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
      action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-100 hover:bg-sky-200 text-sky-700',
      action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`, '_blank')
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700',
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-red-100 hover:bg-red-200 text-red-700',
      action: () => window.open(`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`${post.excerpt}\n\nRead more: ${url}`)}`, '_blank')
    }
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Share URL Preview */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="text-sm font-medium text-gray-900 mb-1">Article Link</div>
            <div className="text-sm text-gray-600 truncate">{url}</div>
          </div>

          {/* Share Options Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                onClick={option.action}
                className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all duration-200 hover:scale-105 ${option.color}`}
              >
                <option.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{option.name}</span>
              </button>
            ))}
          </div>

          {/* Copy Feedback */}
          {copied && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
              <Check className="w-4 h-4" />
              <span className="text-sm font-medium">Link copied to clipboard!</span>
            </div>
          )}

          {/* Native Share Fallback */}
          <div className="pt-4 border-t border-gray-200">
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: url,
                  }).catch(() => {
                    // User cancelled share - no need to do anything
                  });
                }
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 hover:from-blue-600 hover:to-blue-700"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share via Device
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const pathname = usePathname()
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  // Construct full URL for sharing with fallback
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000')
  const fullUrl = `${baseUrl}${pathname}`

  const sharePost = () => {
    // Try native share first
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: fullUrl,
      }).catch(() => {
        // Fallback to custom share modal if native share fails
        setIsShareModalOpen(true)
      })
    } else {
      // Fallback to custom share modal
      setIsShareModalOpen(true)
    }
  }

  // Calculate reading progress (simplified)
  const ReadingProgress = () => (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
        style={{ width: '0%' }}
      />
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <ReadingProgress />
      
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>
        </div>

        {/* Article Header */}
        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
              {post.featured && (
                <span className="flex items-center gap-1 bg-gradient-to-r from-[#ffc100] to-[#ffc700] text-gray-900 px-3 py-1.5 rounded-full border border-[#ffc100]">
                  <Star className="w-4 h-4" />
                  Featured
                </span>
              )}
              <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-gray-200 text-gray-600">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-gray-200 text-gray-600">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-gray-200 text-gray-600">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
                <Button 
                    onClick={sharePost}
                    className="bg-[#ff581b] text-white border-0 hover:bg-[#e04e18] flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <Share2 className="w-4 h-4" />
                    Share Article
                </Button>
                <Button 
                    onClick={() => window.print()}
                    variant="outline"
                    className="flex items-center gap-2 border-[#ff581b] text-[#ff581b] hover:bg-[#ff581b] hover:text-white transition-all duration-300"
                >
                    <BookOpen className="w-4 h-4" />
                    Save for Later
                </Button>
                </div>
          </div>
        </Card>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="p-8 lg:p-12 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="max-w-none">
                {/* Enhanced Prose Styling */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              
              {/* Article Footer */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      OR
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{post.author}</div>
                      <div className="text-sm text-gray-600">Tech Thought Leader & Product Strategist</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">
                      Published {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                   <Button 
                    onClick={sharePost}
                    className="bg-[#ff581b] text-white border-0 hover:bg-[#e04e18] flex items-center gap-2"
                    >
                    <Share2 className="w-4 h-4" />
                    Share Insights
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-28">
              {/* Key Takeaways */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  Key Takeaways
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Balance specialization with generalization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Measure what matters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Build scalable systems</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Articles would go here */}
      </div>

      {/* Share Modal */}
      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        post={post}
        url={fullUrl}
      />
    </div>
  )
}