"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false) // Close mobile menu after clicking
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're at the bottom of the page
      if (Math.ceil(scrollPosition + windowHeight) >= documentHeight) {
        setActiveSection("contact")
        return
      }

      // Otherwise check each section
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          // Add a small buffer (100px) to make the detection more generous
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount to set initial active section
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => scrollToSection("home")} className="font-bold text-xl">
            Richard Nam
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {[
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 rounded-md transition-colors ${
                activeSection === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-1">
              {[
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-md text-left transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 