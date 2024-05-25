import NavMenu from "../components/navmenu/navmenu"
import Footer from "../components/footer/footer"

const Page = () => {
    return (
        <main>
            <NavMenu text="ABOUT US" />
            <div className="flex justify-center gap-x-16 mt-20 mobile:flex-col mobile:items-center mobile:px-[10vw] mobile:gap-y-10 mb-20 mobile:mb-20">
                <div className="w-[38%] flex flex-col gap-y-10 mt-5 mobile:w-full">
                    <h1 className="text-5xl font-bold text-[#24F8C7] mobile:text-2xl">WE ARE THE WORLD'S LARGEST UNIVERSITY</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                    <button className="border px-8 py-2 rounded-md border-purple-500 w-48 h-12 text-purple-500 hover:bg-[#24F8C7] hover:text-white hover hover:border-none transition-all duration-500 ease-in-out">EXPLORE NOW</button>
                </div>
                <div className="w-[38%] mobile:w-full">
                    <img className="w-[750px]" src="/about.png" alt="About" />
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Page