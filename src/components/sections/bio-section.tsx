import Image from 'next/image'

export default function BioSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Creative Bio Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 group">
                {/* Main Image Container */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                  <Image
                    src="/images/olanozun-maria-bio.jpg"
                    alt="Olanozun Maria Raiwe - Product Leader & Co-Founder"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Design Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-150"></div>
                <div className="absolute top-8 -right-8 w-4 h-4 bg-green-500 rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-300 animate-pulse delay-300"></div>
                <div className="absolute -bottom-2 right-8 w-5 h-5 bg-orange-500 rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-300 animate-pulse delay-450"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-70 -z-10"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
                About Ola Raiwe
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I help product-led companies turn ideas into viable products, scaling beyond product launch 
                  to product growth and expansion. My journey as a Product Manager started with a support role, 
                  where I doubled as system support staff and QA, before landing an official Product Management role.
                </p>
                
                <p>
                  Over the years, I have prioritized developing the right skills and competencies required for 
                  successful collaboration across cross-functional teams and C-suite executives, building trust 
                  and encouraging open communication to foster inclusion, growth and value alignment.
                </p>
                
                <p>
                  Today, I double as a co-founder and VP of products at Huge Solutions International, leading 
                  and influencing teams to develop products and initiatives to advance equity and data inclusion 
                  for people of color.
                </p>
                
                <p className="font-semibold text-gray-900">
                  Whether it&apos;s optimizing business processes, driving digital transformation, or scaling 
                  product-led growth, I bring an analytical, data-driven, and strategic leadership approach to the table.
                </p>
              </div>

              {/* Key Expertise Points */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Product Strategy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium">Platform Scaling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">AI Ethics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">Team Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}