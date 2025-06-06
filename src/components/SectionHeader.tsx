export const SectionHeader = ({
    title,
    eyebrow,
    description, }:
    {
        title: string;
        eyebrow: string;
        description: string;
    }
) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">{eyebrow}</p>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 bg-gradient-to-r from-pink-400 to-rose-300 text-transparent bg-clip-text ">{title}</h2>
            <p className="text-center md:text-xl lg:text-2xl text-white/60 mt-4 max-w-md mx-auto mb-6">{description}</p>
        </>
    )
}