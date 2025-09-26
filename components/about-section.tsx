"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, FileText, RefreshCw, Globe2, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Bilingual" },
    { name: "English", level: "Regular" },
  ];
  // Helper object to map levels to specific Tailwind CSS classes
  const levelClasses = {
    Native: "text-green-600 bg-green-500/10 border-green-600/30",
    Bilingual: "text-blue-600 bg-blue-500/10 border-blue-600/30",
    Regular: "text-orange-600 bg-orange-500/10 border-orange-600/30",
  };
  const expertiseCards = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Full Stack Expertise",
      description:
        "Proficient in modern JavaScript frameworks and backend technologies",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Business Analysis",
      description:
        "IT Business Analyst with expertise in system requirements and process optimization",
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
  ];

  return (
    <section ref={sectionRef} id="about" className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`space-y-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
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
              <Card className=" border-primary border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow ">
                <CardContent className="p-3">
                  <div className="flex items-start gap-3 bg-orange-300 rounded-lg p-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Bachelor of Computer Engineering
                      </h4>
                      <p className="text-sm text-gray-600">
                        Faculty of Sciences of Bizerte • 2001-2005
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Software Engineering and Programming
                      </p>
                    </div>
                  </div>
                  {/* Languages Card */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-primary text-lg">🌍</span>
                    <div className="flex flex-wrap gap-4">
                      {languages.map((lang) => (
                        <div
                          key={lang.name}
                          className="flex items-center gap-2"
                        >
                          <span className="font-medium text-foreground text-sm">
                            {lang.name}
                          </span>
                          {/* This span now has conditional classes */}
                          <span
                            className={`font-semibold text-xs rounded-sm border px-1.5 py-0.5 ${
                              levelClasses[
                                lang.level as keyof typeof levelClasses
                              ] || "border-border"
                            }`}
                          >
                            {lang.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                    <p>
                      I'm Abdallah Sekrafi, a passionate{" "}
                      <span className="text-orange-500 font-medium">
                        Full Stack JavaScript Developer
                      </span>{" "}
                      and{" "}
                      <span className="text-orange-500 font-medium">
                        IT Business Analyst
                      </span>{" "}
                      based in Tunisia. With a strong foundation in Computer
                      Engineering and recent expertise in modern web
                      technologies, I bridge the gap between technical
                      implementation and business requirements.
                    </p>
                    <p>
                      My journey spans from traditional{" "}
                      <span className="text-orange-500 font-medium">Java</span>{" "}
                      web development to modern{" "}
                      <span className="text-orange-500 font-medium">
                        JavaScript
                      </span>{" "}
                      ecosystems. I've worked on diverse projects including{" "}
                      <span className="text-orange-500 font-medium">
                        fleet management
                      </span>{" "}
                      systems,{" "}
                      <span className="text-orange-500 font-medium">
                        e-commerce
                      </span>{" "}
                      platforms, and{" "}
                      <span className="text-orange-500 font-medium">
                        medical center management
                      </span>{" "}
                      solutions. This experience has given me a unique
                      perspective on both technical execution and business
                      needs.
                    </p>
                    <p>
                      Currently, I'm focused on creating beautiful, functional
                      web applications using React, Node.js, and{" "}
                      <span className="text-orange-500 font-medium">
                        modern
                      </span>{" "}
                      development practices while also providing{" "}
                      <span className="text-orange-500 font-medium">
                        training
                      </span>{" "}
                      and{" "}
                      <span className="text-orange-500 font-medium">
                        consultancy
                      </span>{" "}
                      services.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 mt-6 pt-4">
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">
                          2007
                        </div>
                        <div className="text-xs text-gray-500">
                          Started Working
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">
                          2016
                        </div>
                        <div className="text-xs text-gray-500">
                          Started Coding
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">
                          Tunisia
                        </div>
                        <div className="text-xs text-gray-500">Based In</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {expertiseCards.map((card, index) => (
                <Card
                  key={index}
                  className="group border-primary border-l-4 border-l-orange-500 hover:shadow-md transition-shadow bg-gray-50 hover:border-orange-500/30"
                >
                  <CardContent className="p-4 ">
                    <div className="flex items-start gap-3 ">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mt-1 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1 transition-colors duration-300 group-hover:text-orange-500">
                          {card.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
