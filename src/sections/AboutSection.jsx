import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto px-6 py-32 scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold mb-8"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg leading-relaxed"
      >
        I build scalable backend systems and full-stack applications focused on solving real-world problems.
        My work combines strong system design with practical machine learning integration, enabling intelligent,
        production-ready solutions.

        <br /><br />

        I focus on writing clean, maintainable code and designing systems that can scale. I’m particularly
        interested in backend architecture, distributed systems, and building products that demonstrate
        engineering depth rather than surface-level features.
      </motion.p>
    </section>
  )
}

export default AboutSection