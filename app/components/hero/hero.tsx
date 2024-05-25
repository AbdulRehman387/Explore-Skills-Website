import Navbar from "../navbar/navbar"

const Hero = () => {
    return (
        <section className="h-[100vh] background mobile:px-5">
            <Navbar />
            <div className="flex justify-center items-center h-[75%]">
                <div className="text-center w-[80%] flex flex-col justify-center items-center mobile:w-auto">
                    <h1 className="text-8xl font-bold text-[#24F8C7] w-[550px] mobile:w-auto mobile:text-6xl">GET READY</h1>
                    <h2 className="text-5xl font-bold text-[#C8FFF2] w-[550px] mobile:w-auto mobile:text-3xl">TO DISCOVER CAMPUS</h2>
                    <p className="text-lg text-white mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro esse blanditiis in quae perspiciatis quo.</p>
                    <button className="bg-transparent border-2 border-l-white px-9 py-3 text-xs rounded-md text-white mt-10 hover:bg-[#24F8C7] transition-all duration-500 ease-in-out">Visit Us To Know More</button>
                </div>
            </div>
        </section>
    )
}

export default Hero