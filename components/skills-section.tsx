"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Database,
  Palette,
  Users,
  Globe,
  Zap,
  Server,
  Monitor,
  GitBranch,
} from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState<{
    [key: string]: number;
  }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          setTimeout(() => {
            const progressValues: { [key: string]: number } = {};
            technicalSkills.forEach((skill) => {
              progressValues[skill.name] = skill.level;
            });
            setAnimatedProgress(progressValues);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      color: "text-blue-600",
      skills: [
        "React.js",
        "Redux Toolkit",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "text-green-600",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Mongoose",
        "Java",
        "Spring Boot",
        "Thymeleaf",
      ],
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "text-purple-600",
      skills: [
        "MongoDB",
        "MySQL",
        "Database Design",
        "Query Optimization",
        "Data Modeling",
      ],
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="w-6 h-6" />,
      color: "text-orange-600",
      skills: [
        "Git",
        "GitHub",
        "Version Control",
        "JBuilder IDE",
        "VS Code",
        "Postman",
      ],
    },
    {
      title: "Design & Graphics",
      icon: <Palette className="w-6 h-6" />,
      color: "text-pink-600",
      skills: [
        "Adobe Photoshop",
        "Inkscape",
        "UI/UX Design",
        "Logo Design",
        "Brand Identity",
        "Microsoft Publisher",
      ],
    },
    {
      title: "Business Analysis",
      icon: <Users className="w-6 h-6" />,
      color: "text-indigo-600",
      skills: [
        "Requirements Analysis",
        "System Design",
        "Process Optimization",
        "Project Management",
        "Training & Documentation",
        "Quality Assurance",
      ],
    },
    {
      title: "Specialized Skills",
      icon: <Zap className="w-6 h-6" />,
      color: "text-yellow-600",
      skills: [
        "Artificial Intelligence",
        "Neural Networks",
        "Image Recognition",
        "MATLAB",
        "Digital Transformation",
        "Technical Training",
      ],
    },
    {
      title: "Soft Skills",
      icon: <Globe className="w-6 h-6" />,
      color: "text-teal-600",
      skills: [
        "Cross-cultural Communication",
        "Team Leadership",
        "Client Relations",
        "Problem Solving",
        "Mentoring",
        "International Collaboration",
      ],
    },
  ];

  const technicalSkills = [
    { name: "JavaScript/React", level: 95 },
    { name: "Node.js/Express", level: 90 },
    { name: "MongoDB/MySQL", level: 85 },
    { name: "Java/Spring Boot", level: 80 },
    { name: "Business Analysis", level: 95 },
    { name: "Project Management", level: 90 },
    { name: "UI/UX Design", level: 75 },
    { name: "System Architecture", level: 85 },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`space-y-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-500">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive skill set spanning full-stack development,
              business analysis, and creative design, honed through years of
              diverse project experience and continuous learning.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center space-x-3">
                      <div
                        className={`${category.color} group-hover:scale-110 transition-transform`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-sm">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs hover:bg-secondary/80 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Proficiency */}
          <div className="mt-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Technical Proficiency
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={animatedProgress[skill.name] || 0}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
