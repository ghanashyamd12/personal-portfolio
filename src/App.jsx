import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { motion } from "framer-motion"

import HeroSection from "./sections/HeroSection"
import ProjectsSection from "./sections/ProjectsSection"
import ProjectDetails from "./pages/ProjectDetails"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return null
}
function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTo")

    if (target) {
      const el = document.getElementById(target)

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" })
        }, 150)
      }

      sessionStorage.removeItem("scrollTo")
    }
  }, [location])

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />

      <motion.div
        className="pointer-events-none absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-500 opacity-30 blur-[140px] rounded-full"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-indigo-500 opacity-30 blur-[140px] rounded-full"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <HeroSection />
      <ProjectsSection />
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  )
}

export default App