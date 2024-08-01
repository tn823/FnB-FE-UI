export default function Content() {
  return (
    <div className='bg-[#0E0E0C] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end bg-[#0E0E0C] text-[#DDDDD5]'>
            <h1 className='text-[12vw] leading-[0.8] mt-10 bg-[#0E0E0C]'>Smurf Village</h1>
            <p className="bg-[#0E0E0C]">©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20 bg-[#0E0E0C]'>
            <div className='flex flex-col gap-2 bg-[#0E0E0C]'>
                <h3 className='mb-2 uppercase text-[#DDDDD5] bg-[#0E0E0C]'>About</h3>
                <a href="/#hero" className="group relative hidden md:inline-block bg-[#0E0E0C]">
                    <span className="text-[#DDDDD5] bg-[#0E0E0C]">Home</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="/#hero" className="group relative hidden md:inline-block bg-[#0E0E0C]">
                    <span className="text-[#DDDDD5] bg-[#0E0E0C]">Services</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="/#hero" className="group relative hidden md:inline-block bg-[#0E0E0C]">
                    <span className="text-[#DDDDD5] bg-[#0E0E0C]">Projects</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="/#hero" className="group relative hidden md:inline-block bg-[#0E0E0C]">
                    <span className="text-[#DDDDD5] bg-[#0E0E0C]">Contact</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
            </div>
            <div className='flex flex-col gap-2 bg-[#0E0E0C]'>
                <h3 className='mb-2 uppercase text-[#DDDDD5] bg-[#0E0E0C]'>My bio</h3>
                <a href="/#hero" className="group relative hidden md:inline-block bg-[#0E0E0C]">
                    <span className="text-[#DDDDD5] bg-[#0E0E0C]">Github</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="/#hero" className="group relative hidden md:inline-block bg-[#0E0E0C]">
                    <span className="text-[#DDDDD5] bg-[#0E0E0C]">Email</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="/#hero" className="group relative hidden md:inline-block bg-[#0E0E0C]">
                    <span className="text-[#DDDDD5] bg-[#0E0E0C]">Facebook</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a href="/#hero" className="group relative hidden md:inline-block bg-[#0E0E0C]">
                    <span className="text-[#DDDDD5] bg-[#0E0E0C]">Instagram</span>
                    <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </a>
            </div>
        </div>
    )
}