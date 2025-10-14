import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Users, TrendingUp, Rocket, Award, Target, Calendar } from 'lucide-react'

const stats = [
  { icon: Users, value: '50M+', label: 'Cumulative Users Reached' },
  { icon: TrendingUp, value: '400%', label: 'Platform Growth Achieved' },
  { icon: Rocket, value: '12', label: 'Products Launched' },
  { icon: Award, value: '92%', label: 'Team Retention Rate' },
]

const timeline = [
  { year: '2024-Present', role: 'Co-Founder & VP of Products', company: 'Huge Solutions International' },
  { year: '2022-2025', role: 'Business Analyst', company: 'CA GlobalHR' },
  { year: '2021-2023', role: 'Senior Product Manager', company: 'ChamsAccess' },
  { year: '2020-2021', role: 'System Support & QA', company: 'Optisoft Technology' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Section */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Creative Image Section */}
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/images/bac.jpg"
                    alt="Olanozun Maria Raiwe - Product Leader & Co-Founder"
                    width={600}
                    height={800}
                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-blue-500/10 mix-blend-overlay"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-blue-500/80 rounded-full animate-float"></div>
                  <div className="absolute bottom-6 left-6 w-6 h-6 bg-purple-500/60 rounded-full animate-float delay-1000"></div>
                </div>
                
                {/* Background Accent */}
                <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl"></div>
                </div>

              {/* Header Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
                  Product Leader, Visionary & Change Agent
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transforming complex challenges into scalable solutions through strategic leadership 
                  and data-driven product innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" href="/contact" size="lg">
                    Start a Conversation
                  </Button>
                  <Button variant="accent-outline" href="/portfolio" className="text-lg px-8 py-3">
                    View My Work
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Timeline */}
              <div className="lg:col-span-1">
                <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg sticky top-8">
                  <h3 className="text-xl font-bold mb-6 gradient-text">Career Journey</h3>
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <div key={index} className="relative pl-6 border-l-2 border-blue-200">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="text-sm font-semibold text-blue-600">{item.year}</div>
                        <div className="font-medium text-gray-900">{item.role}</div>
                        <div className="text-sm text-gray-600">{item.company}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Main Story */}
              <div className="lg:col-span-2">
                <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-3xl font-bold mb-6 gradient-text">My Story</h2>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      My journey in product management began unexpectedly—starting in a support role where 
                      I doubled as system support staff and QA. This unique beginning gave me a ground-level 
                      understanding of user pain points and system limitations that many product leaders never experience.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      At <strong>ChamsAccess</strong>, I had the privilege of working on <strong>Pension Central</strong>, 
                      a pension remittance gateway that taught me the intricacies of building secure, scalable 
                      financial platforms. This experience shaped my approach to product development—balancing 
                      technical excellence with user-centric design.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                      <p className="text-blue-800 font-medium italic">
                        &ldquo;Understanding and strategically positioning myself at the intersection between 
                        technology, user needs and business objectives has been the winning strategy for 
                        successful product delivery.&rdquo;
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      Today, as <strong>Co-Founder and VP of Products at Huge Solutions International</strong>, 
                      I lead teams in developing products and initiatives that advance equity and data inclusion 
                      for people of color. This role allows me to combine my technical expertise with my passion 
                      for creating meaningful social impact.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 gradient-text">My Philosophy</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <Target className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Data-Driven Decisions</h4>
                          <p className="text-gray-600 text-sm mt-1">Let metrics guide strategy, not assumptions</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Inclusive Leadership</h4>
                          <p className="text-gray-600 text-sm mt-1">Build trust and foster open communication</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Whether it&apos;s optimizing business processes, driving digital transformation, or scaling 
                      product-led growth, I bring an analytical, data-driven, and strategic leadership approach 
                      to every challenge.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Product Vision?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to turn your complex challenges into scalable, user-loving products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                href="/contact"
                className="bg-blue-600 text-blue-600 hover:bg-gray-100 border-white text-lg px-8 py-3"
              >
                Start a Project
              </Button>
              <Button 
                variant="outline" 
                href="/portfolio"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
              >
                See My Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}