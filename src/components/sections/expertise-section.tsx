import { Card } from '@/components/ui/card'
import { Shield, Server, Code } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Shield,
    title: "AI Ethics & Governance",
    description: "Developing responsible AI frameworks that balance innovation with ethical considerations and regulatory compliance."
  },
  {
    icon: Server,
    title: "Platform Scaling",
    description: "Architecting systems that grow seamlessly from MVP to enterprise-grade, handling millions of users with reliability."
  },
  {
    icon: Code,
    title: "Developer Experience (DX)",
    description: "Creating tools and platforms that developers love to use, focusing on documentation, APIs, and workflow optimization."
  }
]

export default function ExpertiseSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={area.title} hover className="text-center p-8">
              <area.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}