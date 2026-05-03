const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 
                 h-16 flex items-center 
                 backdrop-blur-md bg-black/40 
                 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex justify-between items-center">

        {/* Logo / Name */}
        <h1 className="text-white font-semibold tracking-wide cursor-pointer">
          Ghanashyam D
        </h1>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#projects" className="hover:text-white transition duration-200">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition duration-200">
            Skills
          </a>
          <a href="#about" className="hover:text-white transition duration-200">
            About
          </a>
          <a href="#contact" className="hover:text-white transition duration-200">
            Contact
          </a>
        </div>

      </div>
    </div>
  )
}

export default Navbar