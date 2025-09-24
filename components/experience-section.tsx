"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Code, Users, Briefcase } from "lucide-react"

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      period: "2024 - Present",
      title: "Freelance Full Stack JS Developer & Trainer",
      company: "Self-Employed",
      location: "Tunisia",
      type: "Freelance",
      current: true,
      icon: <Code className="w-5 h-5" />,
      description: "Leading full-stack development projects and providing technical training to aspiring developers.",
      achievements: [
        "Front-end development with React, Redux Toolkit, and modern CSS frameworks",
        "Back-end development using Node.js, Express, and Mongoose",
        "REST API architecture and implementation",
        "Technical training and mentorship programs",
        "Project management and user needs analysis",
      ],
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "JavaScript", "Git"],
    },
    {
      period: "2016 - Present",
      title: "Graphic Designer",
      company: "Freelance Projects",
      location: "Tunisia",
      type: "Freelance",
      current: true,
      icon: <Briefcase className="w-5 h-5" />,
      description: "Creating visual identity and marketing materials for various clients and businesses.",
      achievements: [
        "Logo design and brand identity development",
        "Advertising poster and marketing material creation",
        "Social media content design and strategy",
        "Print and digital design solutions",
      ],
      technologies: ["Adobe Photoshop", "Inkscape", "Microsoft Publisher"],
    },
    {
      period: "2007 - Present",
      title: "IT Business Analyst",
      company: "Smart Tunisian Technoparks",
      location: "Tunisia",
      type: "Full-time",
      current: true,
      icon: <Users className="w-5 h-5" />,
      description:
        "Leading IT strategy, system analysis, and digital transformation initiatives across multiple departments.",
      achievements: [
        "Policy and procedure analysis for various subdepartments",
        "Software requirements gathering and documentation",
        "Quality assurance and system validation",
        "Operational efficiency and scalability improvements",
        "Technical tender preparation and evaluation",
        "Cross-departmental liaison and communication",
        "Training documentation and workshop facilitation",
      ],
      technologies: ["Business Analysis", "System Design", "Project Management", "Training", "Documentation"],
    },
    {
      period: "2016 - 2020",
      title: "Java Web Developer",
      company: "Freelance Projects",
      location: "Tunisia",
      type: "Freelance",
      current: false,
      icon: <Code className="w-5 h-5" />,
      description: "Developed comprehensive web applications and management systems for various industries.",
      achievements: [
        "Fleet management system development",
        "Medical center management system",
        "E-commerce web applications",
        "Inventory and payroll management systems",
        "Image recognition and shape analysis systems",
      ],
      technologies: ["Java", "Spring Boot", "Thymeleaf", "Bootstrap", "MySQL", "HTML", "JavaScript"],
    },
    {
      period: "2014 - 2015",
      title: "Application Developer",
      company: "International Mission",
      location: "New Delhi, India",
      type: "Contract",
      current: false,
      icon: <Building className="w-5 h-5" />,
      description:
        "International assignment focused on application development and hosting solutions as part of skills exchange program.",
      achievements: [
        "Cross-cultural collaboration and knowledge transfer",
        "Web application development and deployment",
        "Database design and optimization",
        "International project management experience",
      ],
      technologies: ["Photoshop", "HTML", "CSS", "JavaScript", "MySQL"],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Freelance":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Contract":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-500">Professional Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive journey through technology, business analysis, and international collaboration, spanning
              over 15 years of diverse professional experiences.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-orange-300"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white flex items-center justify-center z-10 shadow-lg">
                    <div className="text-white">{exp.icon}</div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="hover:shadow-lg transition-all hover:scale-105 border-l-4 border-l-orange-500">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="space-y-3 mb-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                            {exp.current && (
                              <Badge
                                className="bg-green-500 text-white font-bold px-3 py-1 shadow-lg"
                                style={{
                                  animation: "pulse-glow 2s ease-in-out infinite",
                                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
                                }}
                              >
                                Current
                              </Badge>
                            )}
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>

                          <div className="flex items-center text-gray-600">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                            <MapPin className="w-4 h-4 ml-4 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm text-gray-800">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs border-orange-300 text-orange-700">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
