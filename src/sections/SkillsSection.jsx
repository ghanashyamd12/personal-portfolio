import { motion } from "framer-motion"

const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "C++", "Java"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    title: "Database & ML",
    items: ["PostgreSQL", "MongoDB", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Tools & Concepts",
    items: [
      "Docker",
      "AWS (EC2)",
      "Git",
      "MVC Architecture",
      "JWT Auth",
      "System Design",
    ],
  },
]

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-32 scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] p-6 rounded-2xl border border-gray-800 
                       hover:border-gray-600 hover:-translate-y-1 
                       transition duration-300"
          >
            <h3 className="text-lg font-semibold mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 px-3 py-1 rounded-md text-sm text-gray-300"
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