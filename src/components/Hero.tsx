'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = 'Vaibhav // Backend Architect'

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono">
            <span className="text-neon-green glow-text">
              {displayText}
              <span className="animate-pulse-green">|</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-mono max-w-3xl mx-auto px-4">
            Building scalable systems with{' '}
            <span className="text-neon-green">Node.js</span>,{' '}
            <span className="text-neon-green">TypeScript</span>, and{' '}
            <span className="text-neon-green">modern databases</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a
            href="#projects"
            className="btn-neon"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-neon"
          >
            Get In Touch
          </a>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-green rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-neon-green" size={32} />
      </div>
    </section>
  )
}

export default Hero