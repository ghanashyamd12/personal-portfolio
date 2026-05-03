import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"

const ProjectsSection = () => {
  return (
    <section id="projects" className="mt-20 max-w-6xl mx-auto px-6 py-28">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-14">
        Featured Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => {
          const isLast = index === projects.length - 1

          return (
            <div
              key={index}
              className={isLast ? "md:col-span-2 flex justify-center" : ""}
            >
              <ProjectCard project={project} index={index} />
            </div>
          )
        })}

      </div>

    </section>
  )
}

export default ProjectsSection