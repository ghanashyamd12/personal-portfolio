import { motion } from "framer-motion"

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-32 text-center"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold mb-6"
      >
        Contact
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-400 mb-10"
      >
        Open to opportunities, collaborations, and solving meaningful real-world problems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center gap-6 flex-wrap"
      >
        <a
          href="mailto:reachghanashyamd1@gmail.com"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium 
           shadow-md hover:shadow-lg 
           hover:bg-gray-200 transition duration-200"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/ghanashyam-d-929a63376/"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 border border-gray-600 rounded-lg hover:border-gray-400 transition duration-200"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/ghanashyamd12"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 border border-gray-600 rounded-lg hover:border-gray-400 transition duration-200"
        >
          GitHub
        </a>
      </motion.div>

      {/* Email (Clean + Contextual) */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 text-gray-500 text-sm"
      >
        You can also reach me directly at{" "}
        <a
          href="mailto:reachghanashyamd1@gmail.com"
          className="text-white hover:underline"
        >
          reachghanashyamd1@gmail.com
        </a>
      </motion.p>

    </section>
  )
}

export default ContactSection