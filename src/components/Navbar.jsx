const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 
                 h-16 flex items-center 
                 backdrop-blur-md bg-black/40 
                 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full flex justify-between items-center">

        <h1 className="text-white font-semibold tracking-wide whitespace-nowrap text-sm md:text-base cursor-pointer">
          Ghanashyam D
        </h1>

        <div className="flex flex-wrap md:flex-nowrap justify-end gap-3 md:gap-6 lg:gap-8 text-xs md:text-sm text-gray-400 max-w-md">
          <a href="#projects" className="hover:text-white transition duration-200 hover:-translate-y-[1px]">Projects</a>
          <a href="#skills" className="hover:text-white transition duration-200 hover:-translate-y-[1px]">Skills</a>
          <a href="#about" className="hover:text-white transition duration-200 hover:-translate-y-[1px]">About</a>
          <a href="#contact" className="hover:text-white transition duration-200 hover:-translate-y-[1px]">Contact</a>
        </div>

      </div>
    </div>
  )
}

export default Navbar;