"use client"

export function HeroButtons() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-wrap gap-3 pt-4">
      <button
        onClick={() => scrollToSection("projects")}
        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        View My Projects
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100"
      >
        Contact Me
      </button>
    </div>
  )
} 