import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return <div className="py-8 lg:py-24 lg:pt-20">
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">Let's create something amazing together</h2>
            <p className="text-sm mt-2 md:text-base">
              I'm always excited to learn and take on new challenges. Let's connect and see how I can help bring your project to life!
            </p>
          </div>
          <div>
            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
              <span className="font-semibold ">Contact Me</span>
              <ArrowUpRightIcon classname="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
