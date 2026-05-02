import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-28">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Featured Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

    </section>
  )
}

export default ProjectsSection