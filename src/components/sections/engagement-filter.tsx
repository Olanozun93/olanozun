import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const engagementOptions = [
  {
    title: "Advisory/Consulting",
    description: "For Corporate/Executive leadership",
    cta: "Get Started",
    href: "/contact?type=advisory"
  },
  {
    title: "Speaking/Keynote", 
    description: "For Events & Media engagements",
    cta: "Book Now",
    href: "/contact?type=speaking"
  },
  {
    title: "Mentorship/Office Hours",
    description: "For Aspiring Product Managers",
    cta: "Schedule",
    href: "/contact?type=mentorship"
  }
]

export default function EngagementFilter() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Vision?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose how you'd like to engage and let's create meaningful impact together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {engagementOptions.map((option, index) => (
            <Card key={option.title} hover className="text-center p-8">
              <h3 className="text-lg font-bold mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {option.description}
              </p>
              <Button variant="accent" href={option.href} className="w-full">
                {option.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}