import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mt-20 max-w-6xl mx-auto px-6 py-28"
    >

      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Featured Projects
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
          A collection of backend-focused and full-stack systems emphasizing
          scalable architecture, API design, machine learning integration,
          deployment, and real-world engineering concepts.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => {
          const isLast = index === projects.length - 1

          return (
            <div
              key={index}
              className={isLast ? "md:col-span-2 flex justify-center" : ""}
            >
              <ProjectCard
                project={project}
                index={index}
                featured={isLast}
              />
            </div>
          )
        })}

      </div>

    </section>
  )
}

export default ProjectsSection