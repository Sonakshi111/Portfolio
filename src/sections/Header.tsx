export const Header = () => {
  return (
    
    <div className="flex justify-center items-center fixed top-3 w-full z-10 ">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
        <a href='#home' className="nav-item">Home</a>
        <a href='#project' className="nav-item">Project</a>
        <a href='#about' className="nav-item">About</a>
        <a href="public/SResume.pdf" download className="nav-item bg-white text-gray-900 hover:bg-blue-400/70 hover:text-white-900">Download CV</a>
      </nav>
    </div>
  );
};
