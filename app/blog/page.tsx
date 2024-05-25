import NavMenu from "../components/navmenu/navmenu"
import Footer from "../components/footer/footer"

const Page = () => {
    return (
        <main>
            <NavMenu text="OUR POST" />
            <div className="flex justify-center items-start gap-x-20 py-40 px-[8vw] mobile:flex-col mobile:gap-y-16 mobile:py-20">
                <div className="w-[70%] flex flex-col gap-y-8 mobile:w-full">
                    <h3 className="text-2xl font-semibold">Our Certificate & Online Program</h3>
                    <p className="text-sm font-bold text-[#24F8C7] cursor-pointer">Aug 1, 2021</p>
                    <img className="w-[990px] relative bottom-5 mobile:static" src="/post.png" alt="Post" />
                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                    <form className="flex flex-col border border-gray-300 p-5 gap-y-8">
                        <h3 className="text-2xl font-bold">Leave a Comment</h3>
                        <input className="bg-gray-100 h-10 p-3 text-sm" type="text" placeholder="Enter Name" />
                        <input className="bg-gray-100 h-10 p-3 text-sm" type="email" placeholder="Enter Email" />
                        <textarea className="bg-gray-100 h-32 p-3 text-sm" placeholder="Your Comment" />
                        <button className="border px-8 py-2 h-12 rounded-md border-purple-500 w-48 text-purple-500 hover:bg-[#24F8C7] hover:text-white hover hover:border-none transition-all duration-500 ease-in-out">POST COMMENT</button>
                    </form>
                </div>
                <div className="flex flex-col justify-center items-center w-[38%] gap-y-8 mobile:w-full">
                    <button className="w-full bg-[#24F8C7] text-white font-bold py-2">Post Categories</button>
                    <div className="w-full flex flex-col">
                        <div className="flex justify-between w-full hover:text-[#24F8C7] cursor-pointer py-3">
                            <p>Business Analytics</p>
                            <p>12</p>
                        </div>
                        <div className="flex justify-between w-full hover:text-[#24F8C7] cursor-pointer py-3">
                            <p>Machine Learning</p>
                            <p>29</p>
                        </div>
                        <div className="flex justify-between w-full hover:text-[#24F8C7] cursor-pointer py-3">
                            <p>Computer Science</p>
                            <p>15</p>
                        </div>
                        <div className="flex justify-between w-full hover:text-[#24F8C7] cursor-pointer py-3">
                            <p>Data Analytics</p>
                            <p>22</p>
                        </div>
                        <div className="flex justify-between w-full hover:text-[#24F8C7] cursor-pointer py-3">
                            <p>Full Stack</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Page