'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:vaibhav@example.com',
      label: 'vaibhav@example.com'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com',
      label: 'github.com/vaibhav'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com',
      label: 'linkedin.com/in/vaibhav'
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-dark-charcoal/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 font-mono">
            <span className="text-neon-green glow-text">Let's Build</span> Something Incredible
          </h2>
          
          <p className="text-xl text-center text-gray-300 font-mono mb-16 max-w-3xl mx-auto">
            Ready to discuss your next project? I'm always excited to work on challenging 
            backend systems and scalable architectures.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold mb-6 font-mono text-neon-green">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input font-mono"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input font-mono"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input font-mono w-full"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="form-input font-mono w-full resize-none"
                  required
                />
                <button
                  type="submit"
                  className="btn-neon w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold mb-6 font-mono text-neon-green">
                Get In Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="font-mono text-white">Location</p>
                    <p className="font-mono text-gray-300">Available Worldwide (Remote)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="font-mono text-white">Response Time</p>
                    <p className="font-mono text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold font-mono text-neon-green mb-4">
                  Connect With Me
                </h4>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-4 bg-black/50 rounded-lg hover:bg-black/70 transition-all duration-300 group"
                  >
                    <div className="text-neon-green group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-mono text-white">{link.name}</p>
                      <p className="font-mono text-gray-300 text-sm">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neon-green/20 mt-20 pt-8">
        <div className="text-center">
          <p className="font-mono text-gray-300">
            © 2024 Vaibhav. Built with{' '}
            <span className="text-neon-green">Next.js</span> &{' '}
            <span className="text-neon-green">TypeScript</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact