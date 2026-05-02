import { motion } from "framer-motion"

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-6 py-28 flex flex-col items-center text-center"
    >

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-28 h-28 mb-6"
      >
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-full h-full object-cover rounded-full border border-gray-700"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-semibold tracking-tight text-white"
      >
        Ghanashyam D
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-lg text-gray-400"
      >
        Full Stack Developer |{" "}
        <span className="text-white font-semibold">
          ML Systems Builder
        </span>
      </motion.p>

      {/* Value */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-7 max-w-2xl text-gray-300 leading-relaxed"
      >
        Building scalable backend systems and ML-powered applications that solve real-world problems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <button
          onClick={() => {
            const section = document.getElementById("projects")
            if (section) {
              section.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className="px-6 py-3 bg-white text-black rounded-lg font-medium 
                     hover:bg-gray-200 transition duration-200 
                     hover:scale-105 active:scale-95"
        >
          View Projects
        </button>

        <a
          href="/resume.pdf"   // 👉 replace with your actual resume file
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-gray-500 rounded-lg 
                     hover:border-gray-300 transition duration-200 
                     hover:scale-105 active:scale-95"
        >
          Resume
        </a>
      </motion.div>

    </motion.div>
  )
}

export default Hero