import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="text-center max-w-4xl mx-auto">
        {/* Professional Headshot */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <Image
            src="/images/olanozun-maria-hero.jpg"
            alt="Olanozun Maria Raiwe - Product Leader & Co-Founder"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
          Transforming complex data into intuitive, high-growth consumer products.
        </h1>
        
        <blockquote className="text-xl sm:text-2xl text-gray-600 mb-8 italic max-w-3xl mx-auto">
          &ldquo;The best products don&rsquo;t just solve problems—they create new possibilities.&rdquo;
        </blockquote>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" href="/contact" size="lg">
            Let&rsquo;s Collaborate
          </Button>
           <Button variant="accent-outline" href="/about" size="lg">
            View My Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}