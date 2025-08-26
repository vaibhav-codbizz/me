'use client'

import { useEffect, useRef, useState } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Express.js', level: 92 },
        { name: 'NestJS', level: 85 },
        { name: 'Fastify', level: 80 },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 88 },
        { name: 'MySQL', level: 82 },
        { name: 'Elasticsearch', level: 75 },
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 80 },
        { name: 'AWS', level: 85 },
        { name: 'CI/CD', level: 82 },
        { name: 'Nginx', level: 78 },
      ]
    },
    {
      title: 'APIs & Testing',
      skills: [
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 85 },
        { name: 'Jest', level: 90 },
        { name: 'Vitest', level: 85 },
        { name: 'Cypress', level: 80 },
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills with staggered delays
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, skill.name]))
              }, (categoryIndex * 500) + (skillIndex * 100))
            })
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-dark-charcoal/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
            <span className="text-neon-green glow-text">Technical</span> Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-black/50 p-6 rounded-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-2xl font-bold mb-6 font-mono text-neon-green">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-mono text-white">{skill.name}</span>
                        <span className="font-mono text-neon-green">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className={`skill-fill transition-all duration-1000 ease-out ${
                            animatedSkills.has(skill.name) ? '' : 'w-0'
                          }`}
                          style={{
                            width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-mono text-gray-300">
              <span className="text-neon-green">"Clean code, scalable architecture, performance-first"</span>
              <br />
              - My development philosophy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills