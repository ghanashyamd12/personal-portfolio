import { useNavigate } from "react-router-dom"

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/project/${index}`)}
      className="cursor-pointer bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 
                 hover:border-gray-600 hover:scale-[1.02] 
                 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] 
                 transition duration-300"
    >

      {/* Title + Status */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        {project.status && (
          <span className="text-xs px-2 py-1 border border-gray-600 rounded-md text-gray-400">
            {project.status}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-400 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-gray-800 px-2 py-1 rounded-md text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links (prevent click propagation) */}
      <div className="mt-6 flex gap-4">
        <a
          href={project.github}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-300 hover:text-white transition"
        >
          GitHub →
        </a>

        <a
          href={project.live}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-300 hover:text-white transition"
        >
          Live →
        </a>
      </div>

    </div>
  )
}

export default ProjectCard