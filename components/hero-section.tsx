"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Facebook, ArrowDownToLine } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="greeting-box inline-block px-4 py-2"
              >
                <span className="text-foreground font-medium">Hello There!</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                I'm <span className="text-orange-500">Sekrafi Abdallah</span>,
              </h1>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl  font-bold leading-tight">Full Stack Developer &</h2>
                <h2 className="text-xl sm:text-2xl  font-bold leading-tight">Business Analyst</h2>
                <h3 className="text-lg sm:text-xl text-gray-600">Based in Tunisia.</h3>
              </div>

              <p className="text-lg text-foreground max-w-2xl leading-relaxed">
                With <span className="text-orange-500 font-bold">8+</span> years experience in{" "}
                <span className="text-orange-500 font-bold">software development</span> and{" "}
                <span className="text-orange-500 font-bold">17+</span> years in{" "}
                <span className="text-orange-500 font-bold">IT</span> including{" "}
                <span className="text-orange-500 font-bold"> business analysis</span> , I collaborate with companies and
                clients to create exceptional <span className="text-orange-500 font-bold">digital experiences</span> .
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1PO32yskQJOFkEfebrmqH0hDMKdpzrfDZ/view?usp=sharing",
                    "_blank",
                  )
                }
                size="lg"
                className="bg-green-800 hover:bg-green-700 text-white rounded-full px-8 py-3 flex items-center gap-2"
              >
                Download My CV
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center ml-2">
                  <ArrowDownToLine className="w-4 h-4 text-white fill-white" />
                </div>
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                size="lg"
                className="border-green-800 text-green-800 hover:bg-green-800 hover:text-white rounded-full px-8 py-3"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-orange-500 rounded-full border-2 border-orange-500 border-dashed"
                onClick={() => window.open("https://github.com/abdallahsekrafi", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-orange-500 rounded-full border-2 border-orange-500 border-dashed"
                onClick={() => window.open("https://linkedin.com/in/abdallah-sekrafi-47232889", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-orange-500 rounded-full border-2 border-orange-500 border-dashed"
                onClick={() => window.open("https://www.facebook.com/abdallah.sek", "_blank")}
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                
                {/* Photo Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden  shadow-[0px_5px_15px_0px] shadow-orange-300 z-10">
                  <Image
                    src="/images/abdallah-photo-new.png"
                    alt="Sekrafi Abdallah - Full Stack Developer"
                    width={400}
                    height={400}
                    className="w-full h-full object-fill object-center"
                    priority
                  />
                </div>
              </div>

              <motion.div
                className="absolute -top-2 right-12 bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-xs font-bold shadow-xl z-20 border-1"
                style={{
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)",
                  animation: "pulse-glow 2s ease-in-out infinite",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <span className="text-center leading-tight">
                  OPEN
                  <br />
                  TO WORK
                </span>
              </motion.div>

              <motion.div
                className="absolute top-45 -right-12 bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg z-10 border-2 border-white"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.4,
                  y: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                Full Stack Developer
              </motion.div>

              <motion.div
                className="absolute bottom-20 -left-8 bg-green-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg z-10 border-2 border-white"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.6,
                  y: {
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                IT Business Analyst
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("#about")}
            className="rounded-full cursor-pointer border-2 border-orange-500 border-dashed hover:bg-orange-500"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
