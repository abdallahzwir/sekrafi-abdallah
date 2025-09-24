"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Globe, Users } from "lucide-react"

const AboutSection = () => {
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

  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Full-Stack Expertise",
      description: "Proficient in modern JavaScript frameworks and backend technologies",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Business Analysis",
      description: "17+ years bridging technical solutions with business requirements",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Experience",
      description: "Worked internationally in India, bringing global perspective to projects",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Recently completed Full Stack JavaScript Bootcamp at GOMYCODE",
      color: "bg-purple-50 border-purple-200",
    },
  ]

  const languages = [
    { name: "Arabic", level: 100, color: "bg-orange-500" },
    { name: "French", level: 90, color: "bg-green-500" },
    { name: "English", level: 75, color: "bg-blue-500" },
    { name: "Hindi", level: 40, color: "bg-purple-500" },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-500">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get to know more about my background, skills and passion for technology
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Story Column */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold">My Journey</h3>
                  </div>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      My journey in technology began over 15 years ago with a Bachelor's degree in Computer Engineering.
                      What started as a fascination with software development has evolved into a comprehensive career
                      spanning full-stack development, business analysis, and international consulting.
                    </p>
                    <p>
                      In 2014-2015, I had the incredible opportunity to work in New Delhi, India, where I expanded my
                      global perspective and worked on diverse application development projects. This international
                      experience taught me the importance of cultural adaptability and cross-functional collaboration.
                    </p>
                    <p>
                      Today, I combine my technical expertise in modern JavaScript frameworks with deep business
                      analysis skills, helping organizations bridge the gap between technology and business objectives.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-all hover:scale-105 ${highlight.color}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-gray-700 mt-1">{highlight.icon}</div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1 text-gray-800">{highlight.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold">Languages</h3>
                  </div>
                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-800">{lang.name}</span>
                          <span className="text-xs text-gray-500">{lang.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${lang.color} transition-all duration-1000`}
                            style={{ width: `${lang.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education & Training */}
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold">Education & Training</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Full Stack JS Developer</h4>
                      <p className="text-xs text-gray-600">GOMYCODE Bootcamp (2023-2024)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Bachelor of Computer Engineering</h4>
                      <p className="text-xs text-gray-600">Faculty of Sciences of Bizerte (2001-2005)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
