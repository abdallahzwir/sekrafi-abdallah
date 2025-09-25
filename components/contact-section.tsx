"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Globe,
  MessageCircle,
  Calendar,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "abdallah.sek@gmail.com",
      href: "mailto:abdallah.sek@gmail.com",
      description: "Best way to reach me",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(+216) 96 749 586",
      href: "tel:+21696749586",
      description: "Available during business hours",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Tataouine, Tunisia",
      href: "#",
      description: "Open to remote work globally",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Timezone",
      value: "GMT+1 (CET)",
      href: "#",
      description: "Flexible with international clients",
    },
  ];

  const services = [
    "Full Stack Web Development",
    "Business Analysis & Consulting",
    "System Architecture Design",
    "Technical Training & Mentorship",
    "UI/UX Design",
    "Database Design & Optimization",
    "API Development & Integration",
    "Project Management",
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`space-y-12 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-500">
              Let's Work Together
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <MessageCircle className="w-6 h-6 text-orange-500" />
                      <h3 className="text-2xl font-bold text-orange-500">
                        Send Me a Message
                      </h3>
                    </div>

                    {isSubmitted && (
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800 dark:text-green-200">
                          Thank you! Your message has been sent successfully.
                          I'll get back to you soon.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-orange-500"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="transition-all focus:scale-105"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-orange-500"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            required
                            className="transition-all focus:scale-105"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-orange-500"
                        >
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                          className="transition-all focus:scale-105"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-orange-500"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project, timeline, and any specific requirements..."
                          rows={6}
                          required
                          className="transition-all focus:scale-105 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all hover:scale-105 bg-orange-500"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Services */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-orange-500">
                    <Globe className="w-5 h-5 mr-2 text-orange-500" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="group">
                        <a
                          href={info.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="text-orange-500 mt-0.5 group-hover:scale-110 transition-transform ">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm text-orange-500">
                              {info.label}
                            </div>
                            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              {info.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {info.description}
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
