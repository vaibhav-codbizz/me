'use client'

import { useEffect, useRef, useState } from 'react'
import { Code, Database, Server, Zap } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Expert',
      description: 'Optimizing queries and designing efficient database schemas'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'System Architecture',
      description: 'Building robust microservices and distributed systems'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance First',
      description: 'Optimizing for speed, scalability, and reliability'
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
            <span className="text-neon-green glow-text">About</span> Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-neon-green/20 to-transparent rounded-full flex items-center justify-center glow-border">
                  <div className="w-48 h-48 bg-dark-charcoal rounded-full flex items-center justify-center">
                    <span className="text-6xl font-mono text-neon-green">V</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-mono text-neon-green">
                Backend Architect & System Designer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-mono">
                With over 5 years of experience in backend development, I specialize in 
                building high-performance, scalable systems that power modern applications. 
                My expertise spans across Node.js ecosystems, database optimization, 
                and cloud architecture.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-mono">
                I believe in <span className="text-neon-green">clean code</span>, 
                <span className="text-neon-green"> scalable architecture</span>, and 
                <span className="text-neon-green"> performance-first</span> development. 
                Every line of code I write is crafted with precision and purpose.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-dark-charcoal p-6 rounded-lg card-hover transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-neon-green mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2 font-mono text-neon-green">
                  {feature.title}
                </h4>
                <p className="text-gray-300 font-mono text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About