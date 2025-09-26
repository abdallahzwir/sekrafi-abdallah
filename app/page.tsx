import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
         {/* <ProjectsSection /> */}
        <ContactSection />

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="text-2xl font-bold text-orange-500">SA</div>
              <p className="text-sm opacity-80">© 2025 Sekrafi Abdallah. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  )
}
