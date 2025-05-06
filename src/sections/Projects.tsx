import HeartDiseasePred from "@/assets/images/heart-Disease-pred.png";
import AnimeWebiste from "@/assets/images/Anime-website.png";
// import TITLE from "@/assets/images/IMAGE";
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
    link: "https://github.com/Sonakshi111/Heart-Disease-Prediction.git",
    image: HeartDiseasePred,
  },
  {
    title: "Anime Searching Webpage",
    results: [
      { title: "Built anime-themed website with HTML, CSS, JS" },
      { title: "Responsive layout with sliding image feature" },
      { title: "Designed for visual appeal and interactivity" },
    ],
    link: "https://github.com/Sonakshi111/Anime-website.git",
    image: AnimeWebiste,
  },

  // ADD WHN U DO IT 


  // {
  //   title: "",
  //   results: [
  //     { title: "" },
  //     { title: "" },
  //     { title: "" },
  //   ],
  //   link: "",
  //   image: ,
  // },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">Real World Results</p>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center md:text-xl lg:text-2xl text-white/60 mt-4 max-w-md mx-auto">See how I transformed concepts into digital experiences</p>

        <div className=" mt-10 md:mt-20 lg:mt-30 flex flex-col gap-20 ">
          {portfolioProjects.map(project => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none">

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex">
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl lg:text-5xl font-semibold tracking-widest bg-gradient-to-r from-blue-300 to-red-400 text-transparent bg-clip-text">{project.title}</h3>
                  </div>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 lg:mt-10" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5 lg:mt-8">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base lg:text-xl text-white/50">
                        <CheckIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-bold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit The Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 lg:absolute lg:h-fit lg:w-fit" />
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>);
};
