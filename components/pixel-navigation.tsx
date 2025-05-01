"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface PixelNavigationProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

export default function PixelNavigation({ isDarkMode, toggleTheme }: PixelNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => scrollToSection("hero")}
          className={`w-12 h-12 ${isDarkMode ? "bg-[#1E00FF]" : "bg-[#1E00FF]"} text-white flex items-center justify-center border-2 border-[#FF0004]`}
        >
          <Home size={20} />
        </button>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 ${isDarkMode ? "bg-[#1E00FF]" : "bg-[#1E00FF]"} text-white flex items-center justify-center border-2 border-[#FF0004]`}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out",
          isDarkMode ? "bg-black border-l-4 border-[#1E00FF]" : "bg-white border-l-4 border-[#1E00FF]",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-4 mt-20">
          <nav className="space-y-2">
            {[
              { id: "hero", label: "HOME" },
              { id: "about", label: "ABOUT ME" },
              { id: "experience", label: "EXPERIENCE" },
              { id: "projects", label: "PROJECTS" },
              { id: "skills", label: "SKILLS" },
              { id: "education", label: "EDUCATION" },
              { id: "contact", label: "CONNECT" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "block w-full text-left p-2 hover:bg-[#1E00FF] hover:text-white transition-colors pixel-text",
                  activeSection === item.id ? "bg-[#1E00FF] text-white" : isDarkMode ? "text-white" : "text-black",
                )}
              >
                &gt; {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
