import HeartDiseasePred from "@/assets/images/heart-Disease-pred.png";
import AnimeWebiste from "@/assets/images/Anime-website.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    title: "Heart Disease Prediction Model",
    results: [
      { title: "Heart disease prediction using ML algorithms" },
      { title: "Built interactive UI with Streamlit" },
      { title: "Real-time results based on user input" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: HeartDiseasePred,
  },
  {
    title: "Anime Searching Website",
    results: [
      { title: "Built anime-themed website with HTML, CSS, JS" },
      { title: "Responsive layout with sliding image feature" },
      { title: "Designed for visual appeal and interactivity" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: AnimeWebiste,
  },

  // ADD WHN U DO IT 


  // {
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">Real World Results</p>
        </div>

        <h2 className="font-serif text-3xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4">See how i transformed concepts into digital experiences</p>

        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map(project => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8">

              <div>
                <div className="flex">
                  <h3 className="font-serif text-2xl mt-2 font-semibold tracking-widest bg-gradient-to-r from-blue-300 to-red-400 text-transparent bg-clip-text">{project.title}</h3>
                </div>

                <hr className="border-t-2 border-white/5 mt-4" />
                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((result) => (
                    <li className="flex gap-2 text-sm text-white/50">
                      <CheckIcon className='size-5' />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>

                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-bold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit The Project</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
                <Image src={project.image} alt={project.title} className="mt-8" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>);
};
