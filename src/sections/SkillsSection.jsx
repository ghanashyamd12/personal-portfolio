import { motion } from "framer-motion"

const skills = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "Python", "C++"],
  },

  {
    title: "Frontend",
    items: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "Spring Boot",
      "REST APIs",
    ],
  },

  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },

  {
    title: "Machine Learning",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },

  {
    title: "Tools & Cloud",
    items: [
      "Docker",
      "AWS EC2",
      "Git",
      "GitHub",
      "Vercel",
      "Render",
    ],
  },

  {
    title: "Concepts",
    items: [
      "REST API Design",
      "MVC Architecture",
      "JWT Authentication",
      "System Design",
      "Rate Limiting",
      "Caching",
      "Microservices",
    ],
  },
]

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-32 scroll-mt-24"
    >

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >

        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Skills
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
          Technologies, tools, and engineering concepts I use to build
          scalable backend systems, full-stack applications, and
          machine learning powered solutions.
        </p>

      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {skills.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] p-6 rounded-2xl border border-gray-800
                       hover:border-gray-700 hover:-translate-y-1
                       transition duration-300"
          >

            <h3 className="text-lg font-semibold mb-5 text-white">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#181818] border border-gray-700
                             px-3 py-1 rounded-md text-sm text-gray-300
                             hover:border-gray-500 transition duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default SkillsSection