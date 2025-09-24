"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ThemeToggleButton } from "./ThemeToggleButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    // { href: "#home", label: "About" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  // Determine the base class for the navigation bar
  const baseClasses = `fixed top-4 z-50 transition-all duration-300 `;

  // Determine the dynamic classes based on screen size and state
  const mobileClasses = isOpen
    ? "w-[90%] left-1/2 transform -translate-x-1/2 rounded-xl"
    : " w-[90%] left-1/2 transform -translate-x-1/2 rounded-full";
  const desktopClasses = `w-[50%] left-1/2 transform -translate-x-1/2 rounded-full`;

  const bgClasses = scrolled
    ? "bg-green-800/95 backdrop-blur-md shadow-lg"
    : "bg-green-800";

  return (
    <nav
      className={`${baseClasses} ${bgClasses} px-6 py-3
      // Apply different classes based on screen size
      md:${desktopClasses}
      sm:${mobileClasses}
      `}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={() => scrollToSection("#home")}
            className=" cursor-pointer w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold hover:scale-105 transition-transform"
          >
            SA
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block mx-8">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-orange-300 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggleButton variant="circle" start="top-right" blur={true} />
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggleButton variant="circle" start="top-right" blur={true} />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/20">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-orange-300 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
