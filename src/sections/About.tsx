
import { SectionHeader } from "@/components/sectionheader";
import HTMLIcon from "@/assets/icons/html5.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/logo-python.svg";
import { TechIcon } from "@/components/TechIcon";



const toolboxItems = [
  {
    title: 'HTML',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS',
    iconType: CSSIcon,
  },
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  // {
  //   title: 'Python',
  //   icon: <PythonIcon/>,
  // },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨'
  },
  {
    title: 'Reading',
    emoji: '📖'
  },
  {
    title: 'Music',
    emoji: '🎶'
  },
  {
    title: 'Travel',
    emoji: '🧳'
  },
  {
    title: 'Badminton',
    emoji: '🏸'
  },
  {
    title: 'Craft',
    emoji: '✂️'
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse into my world" description="Learn more about who I am, what I do and what inspires me." />
        <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none px-8 pt-4 mt-20 md:pt-12 md:px-10 lg:pt-16 lg:px-20 ">
          <h3>My ToolBox</h3>
          <p>Explore the technologies ans tools I use</p>

          <div>
            {toolboxItems.map(item => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none px-8 pt-4 mt-20 md:pt-12 md:px-10 lg:pt-16 lg:px-20 ">
          <h3>Beyond the code</h3>
          <p>Explore my interests and hobbies beyond the digital domain</p>
          <div>
            {hobbies.map(hobby => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>);
};
