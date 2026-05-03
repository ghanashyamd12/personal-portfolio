import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}

      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}

      onClick={() => navigate(`/project/${index}`)}

      className="group relative w-full md:max-w-xl 
                 cursor-pointer rounded-2xl 
                 border border-gray-800 
                 bg-[#0f0f0f] 
                 p-7
                 shadow-lg hover:shadow-2xl
                 transition duration-300"
    >

      {/* ⭐ FEATURED BADGE (only for first project) */}
      {index === 0 && (
        <div className="absolute top-4 right-4 text-xs 
                        bg-white/10 text-white px-3 py-1 rounded-full 
                        border border-white/20 backdrop-blur-sm">
          Featured
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold mb-3 
                     group-hover:text-white transition">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech?.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 👉 HOVER CTA */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-gray-500">
          Click to explore
        </span>

        <span className="text-sm text-gray-400 
                         opacity-0 translate-x-2 
                         group-hover:opacity-100 group-hover:translate-x-0 
                         transition duration-300">
          View Details →
        </span>
      </div>

      {/* Subtle glow border */}
      <div className="absolute inset-0 rounded-2xl 
                      opacity-0 group-hover:opacity-100 
                      transition duration-300 
                      border border-white/10 pointer-events-none" />

    </motion.div>
  )
}

export default ProjectCard