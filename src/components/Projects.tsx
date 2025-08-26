'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Play, FileText } from 'lucide-react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: 'Scalable E-commerce API',
      description: 'High-performance microservices architecture handling 10k+ concurrent users with advanced caching and rate limiting.',
      tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
      features: [
        'Microservices architecture',
        'JWT authentication & authorization',
        'Advanced rate limiting',
        'Real-time inventory management',
        'Payment gateway integration'
      ],
      icon: <Github className="w-5 h-5" />,
      link: '#',
      type: 'code'
    },
    {
      title: 'Real-time Chat System',
      description: 'WebSocket-based chat application with room management, message persistence, and real-time notifications.',
      tech: ['Socket.io', 'MongoDB', 'Express', 'Redis', 'JWT'],
      features: [
        'Real-time messaging',
        'Room management system',
        'Message history & search',
        'File sharing capabilities',
        'Online presence indicators'
      ],
      icon: <Play className="w-5 h-5" />,
      link: '#',
      type: 'demo'
    },
    {
      title: 'Analytics Dashboard API',
      description: 'Data aggregation service processing millions of events daily with advanced caching and admin dashboard.',
      tech: ['NestJS', 'PostgreSQL', 'Docker', 'Grafana', 'Prometheus'],
      features: [
        'Real-time data aggregation',
        'Advanced caching strategies',
        'Admin dashboard & controls',
        'Custom metrics & alerts',
        'Automated reporting system'
      ],
      icon: <FileText className="w-5 h-5" />,
      link: '#',
      type: 'docs'
    }
  ]

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

  const getButtonText = (type: string) => {
    switch (type) {
      case 'code': return 'View Code'
      case 'demo': return 'Live Demo'
      case 'docs': return 'Documentation'
      default: return 'View Project'
    }
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
            <span className="text-neon-green glow-text">Featured</span> Projects
          </h2>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-dark-charcoal rounded-lg overflow-hidden card-hover transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <h3 className="text-2xl font-bold mb-4 font-mono text-neon-green">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 font-mono leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 font-mono text-neon-green">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300 font-mono">
                              <span className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-black/50 text-neon-green border border-neon-green/30 rounded-full text-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-1/3 flex flex-col justify-center">
                      <div className="bg-black/50 p-6 rounded-lg text-center">
                        <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="text-neon-green">
                            {project.icon}
                          </div>
                        </div>
                        <a
                          href={project.link}
                          className="btn-neon inline-flex items-center gap-2"
                        >
                          {project.icon}
                          {getButtonText(project.type)}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-mono text-gray-300 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com"
              className="btn-neon inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects