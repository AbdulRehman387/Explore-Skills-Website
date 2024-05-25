import { IoMdStar } from "react-icons/io";

const Main = () => {
    return (
        <main>
            <section className="h-auto mt-24 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-[90%] gap-y-16">
                    <div className="h-24 w-[2px] bg-[#24F8C7]"></div>
                    <div className="text-center flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold w-[500px] text-[#24F8C7] mobile:text-2xl mobile:w-[300px]">EXPLORE OUR 69+ MAJOR PROGRAMS</h1>
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
            <section className="h-auto mt-24 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-[90%] gap-y-16">
                    <div className="h-24 w-[2px] bg-[#24F8C7]"></div>
                    <div className="text-center flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold w-[600px] text-[#24F8C7] mobile:text-2xl mobile:w-[300px]">TAKE OUR VIRTUAL TOUR</h1>
                        <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex justify-center gap-x-8 mobile:flex-col mobile:px-5 mobile:gap-y-5">
                        <div className="flex flex-col items-center gap-y-5 w-[38%] h-auto text-center mobile:w-auto relative group">
                            <img className="rounded-lg flex-[1]" src="/campus1.png" alt="Campus" />
                            <div className="absolute top-0 w-full h-full bg-rgba-green opacity-0 group-hover:opacity-[0.3] transition-opacity ease-in-out duration-500"></div>
                            <h3 className="text-3xl text-white font-normal absolute -bottom-10 group-hover:bottom-[45%] transition-all ease-in-out duration-500">DELHI</h3>
                        </div>
                        <div className="flex flex-col items-center gap-y-5 w-[38%] h-auto text-center mobile:w-auto relative group">
                            <img className="rounded-lg flex-[1]" src="/campus2.png" alt="Campus" />
                            <div className="absolute top-0 w-full h-full bg-rgba-green opacity-0 group-hover:opacity-[0.3] transition-opacity ease-in-out duration-500"></div>
                            <h3 className="text-3xl text-white font-normal absolute -bottom-10 group-hover:bottom-[45%] transition-all ease-in-out duration-500">HYDERABAD</h3>
                        </div>
                        <div className="flex flex-col items-center gap-y-5 w-[38%] h-auto text-center mobile:w-auto relative group">
                            <img className="rounded-lg flex-[1]" src="/campus3.png" alt="Campus" />
                            <div className="absolute top-0 w-full h-full bg-rgba-green opacity-0 group-hover:opacity-[0.3] transition-opacity ease-in-out duration-500"></div>
                            <h3 className="text-3xl text-white font-normal absolute -bottom-10 group-hover:bottom-[45%] transition-all ease-in-out duration-500">MUMBAI</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-auto mt-24 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-[90%] gap-y-16">
                    <div className="h-24 w-[2px] bg-[#24F8C7]"></div>
                    <div className="text-center flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold w-[600px] text-[#24F8C7] mobile:text-2xl mobile:w-[300px]">OUR FACILITIES</h1>
                        <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex justify-center gap-x-8 mobile:flex-col mobile:px-5 mobile:gap-y-5">
                        <div className="flex flex-col items-start gap-y-5 w-[29%] mobile:w-auto relative group flex-[1]">
                            <img className="rounded-lg hover:shadow-[2px_2px_20px_2px_rgba(0,0,0,0.4)] transition-all duration-500" src="/libary.png" alt="Campus" />
                            <h3 className="text-xl font-bold">Best Libary</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
                        </div>
                        <div className="flex flex-col items-start gap-y-5 w-[29%] mobile:w-auto relative group flex-[1]">
                            <img className="rounded-lg hover:shadow-[2px_2px_20px_2px_rgba(0,0,0,0.4)] transition-all duration-500" src="/playground.png" alt="Campus" />
                            <h3 className="text-xl font-bold">Athletics</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
                        </div>
                        <div className="flex flex-col items-start gap-y-5 w-[29%] mobile:w-auto relative group flex-[1]">
                            <img className="rounded-lg hover:shadow-[2px_2px_20px_2px_rgba(0,0,0,0.4)] transition-all duration-500" src="/food.png" alt="Campus" />
                            <h3 className="text-xl font-bold w-[80%]">Tasty and Healthy Food</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-auto mt-24 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-[90%] gap-y-16">
                    <div className="h-24 w-[2px] bg-[#24F8C7]"></div>
                    <div className="text-center flex flex-col justify-center items-center">
                        <h1 className="text-5xl font-bold w-[600px] text-[#24F8C7] mobile:text-2xl mobile:w-[300px]">WHAT OUR STUDENT SAYS</h1>
                        <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex justify-center gap-x-20 mobile:flex-col mobile:px-5 mobile:gap-y-5 mx-5">
                        <div className="flex justify-center w-[35vw] bg-[#FFF3F3] py-6 px-8 gap-x-8 rounded-lg h-auto mobile:w-[90vw] cursor-pointer">
                            <div className="w-16 flex-none">
                                <img src="/user.png" alt="User" />
                            </div>
                            <div className="w-auto">
                                <p className="text-sm w-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime.</p>
                                <h3 className="text-lg font-bold mt-5">Student Name</h3>
                                <div className="flex">
                                    <IoMdStar className="text-[#24F8C7] text-2xl" />
                                    <IoMdStar className="text-[#24F8C7] text-2xl" />
                                    <IoMdStar className="text-[#24F8C7] text-2xl" />
                                    <IoMdStar className="text-[#24F8C7] text-2xl" />
                                    <IoMdStar className="text-[#24F8C7] text-2xl" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center w-[35vw] bg-[#FFF3F3] py-6 px-8 gap-x-8 rounded-lg h-auto mobile:w-[90vw] cursor-pointer">
                            <div className="w-16 flex-none">
                                <img src="/user.png" alt="User" />
                            </div>
                            <div className="w-auto">
                                <p className="text-sm w-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime.</p>
                                <h3 className="text-lg font-bold mt-5">Student Name</h3>
                                <div className="flex">
                                    <IoMdStar className="text-[#24F8C7] text-2xl" />
                                    <IoMdStar className="text-[#24F8C7] text-2xl" />
                                    <IoMdStar className="text-[#24F8C7] text-2xl" />
                                    <IoMdStar className="text-[#24F8C7] text-2xl" />
                                    <IoMdStar className="text-[#24F8C7] text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center py-32">
                <div className="img rounded-xl py-[100px] text-center">
                    <h1 className="text-6xl text-white font-bold mobile:text-2xl">GET READY FOR A BRIGHT FUTURE</h1>
                    <button className="bg-transparent border-2 border-l-white px-9 py-3 text-xs rounded-md text-white mt-10 hover:bg-[#24F8C7] transition-all duration-500 ease-in-out">Contact Us</button>
                </div>
            </section>
        </main>
    )
}

export default Main