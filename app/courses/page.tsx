import NavMenu from "../components/navmenu/navmenu"
import Footer from "../components/footer/footer"

const Page = () => {
    return (
        <main>
            <NavMenu text="OUR COURSES" />
            <section className="h-auto mt-60 flex justify-center items-center mobile:mt-40">
                <div className="flex flex-col justify-center items-center w-[80%] gap-y-24 mobile:w-full">
                    <div className="text-center flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold w-[500px] text-[#24F8C7] mobile:text-2xl mobile:w-[300px]">COURSES WE OFFER</h1>
                        <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="flex justify-center gap-x-8 mobile:flex-col mobile:px-5 mobile:gap-y-5">
                        <div className="flex flex-col items-center gap-y-5 w-[38%] py-7 px-1 text-center bg-[#FFF3F3] flex-[1] mobile:w-auto rounded-lg hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] transition-all duration-500">
                            <h3 className="text-xl font-semibold">Undergraduate Programs</h3>
                            <p className="w-[80%] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
                        </div>
                        <div className="flex flex-col items-center gap-y-5 w-[38%] py-7 px-1 text-center bg-[#FFF3F3] flex-[1] mobile:w-auto rounded-lg hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] transition-all duration-500">
                            <h3 className="text-xl font-semibold">Graduate Programs</h3>
                            <p className="w-[80%] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
                        </div>
                        <div className="flex flex-col items-center gap-y-5 w-[38%] py-7 px-1 text-center bg-[#FFF3F3] flex-[1] mobile:w-auto rounded-lg hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] transition-all duration-500">
                            <h3 className="text-xl font-semibold">Adult Learning & Degree Completion</h3>
                            <p className="w-[80%] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-auto mt-40 mb-40 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-[80%] gap-y-16 mobile:w-full">
                    <div className="text-center flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold w-[600px] text-[#24F8C7] mobile:text-2xl mobile:w-[300px]">BEST COURSES</h1>
                        <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex justify-center gap-x-8 mobile:flex-col mobile:px-5 mobile:gap-y-5">
                        <div className="flex flex-col items-start gap-y-5 w-[29%] mobile:w-auto relative group flex-[1]">
                            <img className="rounded-lg hover:shadow-[2px_2px_20px_2px_rgba(0,0,0,0.4)] transition-all duration-500" src="/course1.png" alt="Campus" />
                            <h3 className="text-xl font-bold">Web Development</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
                        </div>
                        <div className="flex flex-col items-start gap-y-5 w-[29%] mobile:w-auto relative group flex-[1]">
                            <img className="rounded-lg hover:shadow-[2px_2px_20px_2px_rgba(0,0,0,0.4)] transition-all duration-500" src="/course2.png" alt="Campus" />
                            <h3 className="text-xl font-bold">Artificial Intelligence</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
                        </div>
                        <div className="flex flex-col items-start gap-y-5 w-[29%] mobile:w-auto relative group flex-[1]">
                            <img className="rounded-lg hover:shadow-[2px_2px_20px_2px_rgba(0,0,0,0.4)] transition-all duration-500" src="/course3.png" alt="Campus" />
                            <h3 className="text-xl font-bold w-[80%]">Data Science</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Page