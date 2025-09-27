"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Globe, Linkedin, Github, ExternalLink } from "lucide-react"

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abdallah.sek@gmail.com",
      href: "mailto:abdallah.sek@gmail.com",
      description: "Best way to reach me",
      color: "bg-blue-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(+216) 96 749 586",
      href: "tel:+21696749586",
      description: "Available during business hours",
      color: "bg-green-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Tataouine, Tunisia",
      href: "#",
      description: "Open to remote work globally",
      color: "bg-red-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Timezone",
      value: "GMT+1 (CET)",
      href: "#",
      description: "Flexible with international clients",
      color: "bg-purple-500",
    },
  ]

  const services = [
    "Full Stack Web Development",
    "Business Analysis & Consulting",
    "System Architecture Design",
    "Technical Training & Mentorship",
    "UI/UX Design",
    "Database Design & Optimization",
    "API Development & Integration",
    "Project Management",
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-500">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need a {" "}
                <span className="text-orange-500 font-bold">full-stack web application</span> , {" "}
                <span className="text-orange-500 font-bold">IT business analysis</span> , or {" "}
                <span className="text-orange-500 font-bold">technical consulting</span> , I'm here to
            {" "}
                <span className="text-orange-500 font-bold">help</span> turn{" "}
                <span className="text-orange-500 font-bold">your vision</span> into {" "}
                <span className="text-orange-500 font-bold">reality</span> and bring {" "}
                <span className="text-orange-500 font-bold">your ideas</span> to {" "}
                <span className="text-orange-500 font-bold">life</span>.
            Get {" "}
                <span className="text-orange-500 font-bold">in touch</span> and let's discuss how we can work {" "}
                <span className="text-orange-500 font-bold">together</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{info.icon}</div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-orange-500">{info.label}</h3>
                  <a
                    href={info.href}
                    className="text-foreground hover:text-orange-500 transition-colors font-medium block mb-2"
                  >
                    {info.value}
                  </a>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-orange-500 flex items-center justify-center">
                <Globe className="w-6 h-6 mr-2" />
                Services I Offer
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {services.map((service, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="p-3 text-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-default"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
