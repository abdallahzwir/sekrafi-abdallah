"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, FileText, RefreshCw, Globe2, GraduationCap } from "lucide-react"

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

  const languages = [
    { name: "Arabic", level: 100, badge: "Native" },
    { name: "French", level: 85, badge: "Advanced" },
    { name: "English", level: 70, badge: "Regular" },
    { name: "Hindi", level: 30, badge: "Basic" },
  ]

  const expertiseCards = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Full Stack Expertise",
      description: "Proficient in modern JavaScript frameworks and backend technologies",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Business Analysis",
      description: "IT Business Analyst with expertise in system requirements and process optimization",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Continuous Learning",
      description: "Recently completed Full Stack JS Bootcamp at GOMYCODE",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "International Experience",
      description: "International mission experience in New Delhi, India",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-orange-500">About Me</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get to know more about my background, skills, and{" "}
              <span className="text-orange-500 font-medium">passion</span> for{" "}
              <span className="text-orange-500 font-medium">technology</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* My Journey Card */}
              <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">AS</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">My Journey</h3>
                  </div>

                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>
                      I'm Abdallah Sekrafi, a passionate{" "}
                      <span className="text-orange-500 font-medium">Full Stack JavaScript Developer</span> and IT{" "}
                      <span className="text-orange-500 font-medium">Business Analyst</span> based in Tunisia. With a
                      strong foundation in Computer Engineering and recent expertise in modern web technologies, I
                      bridge the gap between technical implementation and business requirements.
                    </p>
                    <p>
                      My journey spans from traditional <span className="text-orange-500 font-medium">Java</span> web
                      development to modern <span className="text-orange-500 font-medium">JavaScript</span> ecosystems.
                      I've worked on diverse projects including{" "}
                      <span className="text-orange-500 font-medium">fleet management</span> systems,{" "}
                      <span className="text-orange-500 font-medium">e-commerce</span> platforms, and{" "}
                      <span className="text-orange-500 font-medium">medical center management</span> solutions. This
                      experience has given me a unique perspective on both technical execution and business needs.
                    </p>
                    <p>
                      Currently, I'm focused on creating beautiful, functional web applications using React, Node.js,
                      and <span className="text-orange-500 font-medium">modern</span> development practices while also
                      providing <span className="text-orange-500 font-medium">training</span> and{" "}
                      <span className="text-orange-500 font-medium">consultancy</span> services.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 mt-6 pt-4">
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">2024</div>
                        <div className="text-xs text-gray-500">Started Coding</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">Tunisia</div>
                        <div className="text-xs text-gray-500">Based In</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Languages Card */}
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
                  </div>

                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-800">{lang.name}</span>
                          <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full font-medium">
                            {lang.badge}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-orange-500 transition-all duration-1000"
                            style={{ width: `${lang.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {expertiseCards.map((card, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mt-1">
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{card.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Education & Training</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Full Stack JS Developer</h4>
                    <p className="text-sm text-gray-600">GOMYCODE • 2023-2024</p>
                    <p className="text-xs text-gray-500 mt-1">JavaScript, React, Redux, Node.js, Express, MongoDB</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Bachelor of Computer Engineering</h4>
                    <p className="text-sm text-gray-600">Faculty of Sciences of Bizerte • 2001-2005</p>
                    <p className="text-xs text-gray-500 mt-1">Software Engineering and Programming</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
