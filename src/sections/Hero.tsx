import memoji from '@/assets/images/memoji-computer2.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from "@/assets/images/grain.jpg";
import starImage from "@/assets/images/starry-night.jpg";



export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip pointer-events-none'>
      <div className='absolute inset-0' style={{
    maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
  } as React.CSSProperties}>
        {/* For grains */}
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`,
        }}></div>
        {/* stars */}
        <div className='absolute inset-0 -z-30 opacity-10' style={{
          backgroundImage: `url(${starImage.src})`,WebkitMaskImage: 'radial-gradient(circle,transparent 25%, black 30%)',maskImage: 'radial-gradient(circle, transparent 25%, black 30%)',
        }}></div>

        {/* Rings */}
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[800px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
      </div>


      <div className="container">
        <div className='flex flex-col items-center'>

          {/* Image */}
          <Image src={memoji} className="size-[75px]" alt="A person peeking behind a laptop" />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 mt-1.5 inline-flex items-center gap-4 rounded-full'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Heading */}
          <p className='mt-4 text-center text-white/75 md:text-lg'>Hello, I'm</p>
          <h1 className='text-center text-3xl md:text-5xl font-serif mt-3 tracking-wide font-semibold'>Sonakshi <span className='text-blue-300 '>Yadav</span></h1>

          {/* Para */}
          <p className='mt-4 text-center text-white/75 md:text-lg'>An enthusiastic frontend developer, open to all professional projects which brings user's imagination into real by building user friendly and unique experiences </p>
        </div>

        {/* Buttons */}
        <div className='flex flex-col md:flex-row justify-center items-center mt-4 gap-3.5'>

          {/* Button 1 */}
          <button className='inline-flex items-center gap-2.5 border border-white/15 h-12 px-6 rounded-xl'>
            <span className='font-semibold'>Explore my work</span>
            <ArrowDown className='size-4' /></button>

          {/* Button 2 */}
          <button className='inline-flex text-black bg-white px-3 py-2 rounded-lg'>
            <span>👋</span>
            <span className='font-semibold'>Let's Connect</span></button>
        </div>

      </div>
    </div>);
};
