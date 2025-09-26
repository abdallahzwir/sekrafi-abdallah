"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Truck, Heart, ShoppingCart, Package, Clock, Eye, Building, Palette } from "lucide-react"
import Image from "next/image"

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")
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

  const projects = [
    {
      id: 1,
      title: "Fleet Management System",
      category: "web-app",
      description:
        "Comprehensive fleet management solution for tracking vehicles, maintenance schedules, and driver assignments with real-time monitoring capabilities.",
      image: "/fleet-management-dashboard.png",
      technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap", "JavaScript"],
      features: ["Real-time tracking", "Maintenance scheduling", "Driver management", "Reporting dashboard"],
      icon: <Truck className="w-6 h-6" />,
      year: "2018",
      status: "Completed",
    },
    {
      id: 2,
      title: "Medical Center Management",
      category: "web-app",
      description:
        "Complete healthcare management system for patient records, appointment scheduling, and medical inventory management.",
      image: "/medical-center-management-system.jpg",
      technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "HTML"],
      features: ["Patient records", "Appointment system", "Inventory tracking", "Billing integration"],
      icon: <Heart className="w-6 h-6" />,
      year: "2017",
      status: "Completed",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "web-app",
      description:
        "Modern e-commerce solution with product catalog, shopping cart, payment integration, and order management system.",
      image: "/modern-ecommerce-platform.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      features: ["Product catalog", "Shopping cart", "Payment processing", "Order tracking"],
      icon: <ShoppingCart className="w-6 h-6" />,
      year: "2024",
      status: "In Development",
    },
    {
      id: 4,
      title: "Inventory Management System",
      category: "web-app",
      description:
        "Advanced inventory tracking system with barcode scanning, stock alerts, and automated reordering capabilities.",
      image: "/inventory-management-dashboard.png",
      technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap", "JavaScript"],
      features: ["Barcode scanning", "Stock alerts", "Automated reordering", "Analytics"],
      icon: <Package className="w-6 h-6" />,
      year: "2019",
      status: "Completed",
    },
    {
      id: 5,
      title: "Time & Payroll Management",
      category: "web-app",
      description:
        "Comprehensive HR solution for time tracking, payroll processing, and employee management with automated calculations.",
      image: "/payroll-management-system.jpg",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "JavaScript"],
      features: ["Time tracking", "Payroll processing", "Employee management", "Report generation"],
      icon: <Clock className="w-6 h-6" />,
      year: "2020",
      status: "Completed",
    },
    {
      id: 6,
      title: "Neural Network Shape Recognition",
      category: "ai-project",
      description:
        "Advanced AI system for shape and image recognition using artificial neural networks with symbolic rule integration.",
      image: "/neural-network-visualization.png",
      technologies: ["Java", "MATLAB", "Swing", "AWT", "Machine Learning"],
      features: ["Shape recognition", "Neural networks", "Pattern analysis", "Training optimization"],
      icon: <Eye className="w-6 h-6" />,
      year: "2005",
      status: "Research Project",
    },
    {
      id: 7,
      title: "Corporate Brand Identity",
      category: "design",
      description:
        "Complete brand identity package including logo design, business cards, letterheads, and marketing materials.",
      image: "/corporate-brand-identity-design.jpg",
      technologies: ["Adobe Photoshop", "Inkscape", "Microsoft Publisher"],
      features: ["Logo design", "Brand guidelines", "Marketing materials", "Print design"],
      icon: <Palette className="w-6 h-6" />,
      year: "2023",
      status: "Ongoing",
    },
    {
      id: 8,
      title: "Business Consulting Platform",
      category: "web-app",
      description:
        "Digital platform for business analysis services, client management, and project tracking with automated reporting.",
      image: "/business-consulting-dashboard.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      features: ["Client management", "Project tracking", "Automated reports", "Analytics dashboard"],
      icon: <Building className="w-6 h-6" />,
      year: "2024",
      status: "In Development",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "web-app", label: "Web Applications", count: projects.filter((p) => p.category === "web-app").length },
    { id: "ai-project", label: "AI Projects", count: projects.filter((p) => p.category === "ai-project").length },
    { id: "design", label: "Design Work", count: projects.filter((p) => p.category === "design").length },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "In Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Research Project":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "Ongoing":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <section ref={sectionRef} id="projects" className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of diverse projects spanning web development, business solutions, AI research, and creative
              design work, demonstrating versatility and technical expertise.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="transition-all hover:scale-105"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all hover:scale-105 overflow-hidden">
                <div className="relative">
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" className="hover:scale-110 transition-transform">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="secondary" className="hover:scale-110 transition-transform">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <Badge className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}>{project.status}</Badge>
                </div>

                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-secondary">{project.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-4">
                    <h4 className="text-sm font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, i) => (
                        <div key={i} className="text-xs text-muted-foreground flex items-center">
                          <span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <Card className="bg-secondary/10 border-secondary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  These projects represent just a portion of my portfolio. I'm always excited to take on new challenges
                  and create innovative solutions that make a real impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Start a Project
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  >
                    View Full Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
