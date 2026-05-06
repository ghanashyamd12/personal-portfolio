import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import projects from "../data/projects"

/* ---------- SECTION CARD ---------- */
const SectionCard = ({ title, content }) => {
  if (!content || content.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#0f0f0f] p-6 rounded-2xl border border-gray-800 
                 hover:border-gray-700 hover:-translate-y-1
                 transition duration-300"
    >
      <h2 className="text-xl font-semibold mb-5 text-white">
        {title}
      </h2>

      <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
        {content.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1 text-gray-500">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ---------- MAIN COMPONENT ---------- */
const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = projects[id]

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Project not found
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white px-6 py-20 overflow-x-hidden">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#090909] to-black" />

      <div className="pointer-events-none absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-700 opacity-20 blur-[120px] rounded-full" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-indigo-700 opacity-20 blur-[120px] rounded-full" />

      {/* Back Button */}
      <button
        onClick={() => {
          sessionStorage.setItem("scrollTo", "projects")
          navigate("/")
        }}
        className="mb-12 text-sm text-gray-400 hover:text-white
                   transition duration-200 flex items-center gap-2
                   hover:-translate-x-1"
      >
        ← Back to Projects
      </button>

      <div className="max-w-5xl mx-auto space-y-24">

        {/* ---------- HERO ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.2] pb-2 text-white">
            {project.title}
          </h1>

          <p className="mt-6 text-gray-400 max-w-3xl leading-relaxed text-lg">
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.tech && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-[#121212] border border-gray-800 px-3 py-1 rounded-md text-sm text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">

            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 border border-gray-600 rounded-lg text-sm
                           hover:border-gray-400 hover:bg-white/5
                           transition duration-200"
              >
                View Code
              </a>
            )}

            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 bg-white text-black rounded-lg font-medium
                           hover:bg-gray-200 transition duration-200"
              >
                Live Demo
              </a>
            )}

          </div>

        </motion.div>

        {/* ---------- ENGINEERING BREAKDOWN ---------- */}
        {(project.problem ||
          project.approach ||
          project.architecture ||
          project.challenges) ? (

          <div>

            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white">
                Engineering Breakdown
              </h2>

              <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
                Architectural decisions, backend design choices, implementation
                strategy, and engineering challenges solved during development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <SectionCard
                title="Problem"
                content={project.problem}
              />

              <SectionCard
                title="Approach"
                content={project.approach}
              />

              <SectionCard
                title="Architecture"
                content={project.architecture}
              />

              <SectionCard
                title="Challenges"
                content={project.challenges}
              />

            </div>

          </div>

        ) : (

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 text-center text-gray-400">
            🚧 Detailed breakdown coming soon. This project is currently in progress.
          </div>

        )}

        {/* ---------- IMPACT ---------- */}
        {project.impact && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#101010] border border-gray-800 rounded-2xl p-8"
          >

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Impact
            </h2>

            <p className="text-gray-300 leading-relaxed text-[15px]">
              {project.impact}
            </p>

          </motion.div>
        )}

        {/* ---------- PRODUCT WALKTHROUGH ---------- */}
        {project.images && project.images.length > 0 && (
          <div>

            <div className="mb-14">
              <h2 className="text-3xl font-semibold text-white">
                Product Walkthrough
              </h2>

              <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
                Key flows, backend behavior visualizations, dashboards, and
                important product interactions from the system.
              </p>
            </div>

            <div className="space-y-24">

              {project.images.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid md:grid-cols-2 gap-10 items-center ${
                    i % 2 !== 0
                      ? "md:[&>div:first-child]:order-2"
                      : ""
                  }`}
                >

                  {/* Image */}
                  <div className="rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition duration-300 bg-[#0d0d0d]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-[1.02] transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div>

                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default ProjectDetails