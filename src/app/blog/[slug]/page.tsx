import { notFound } from 'next/navigation'
import { blogPosts } from '@/content/blog-posts'
import BlogPostClient from './BlogPostClient'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Pass the post data to the client component
  return <BlogPostClient post={post} />
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${post.title} | Olanozun Maria Raiwe`,
    description: post.excerpt,
  }
}