"use client"
import Link from "next/link"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Navbar = (props: any) => {
    const [sidebar, setSidebar] = useState(false)
    let showSidebar = () => {
        setSidebar(true)
    }
    let hideSidebar = () => {
        setSidebar(false)
    }
    return (
        <section className="relative">
            <nav className="flex justify-between items-center h-32 text-white bg-transparent mx-20 mobile:mx-5">
                <div className="w-40">
                    <h1 className="text-2xl font-extrabold">Xplore Skill</h1>
                </div>
                <div className="ml-5 flex gap-x-8 text-lg font-medium mobile:hidden">
                    <div className="">
                        <div className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#24F8C7] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#24F8C7] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            <Link href={"/"}>HOME</Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#24F8C7] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#24F8C7] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            <Link href={"/courses"}>COURSE</Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#24F8C7] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#24F8C7] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            <Link href={"/blog"}>BLOG</Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#24F8C7] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#24F8C7] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            <Link href={"/about"}>ABOUT</Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#24F8C7] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#24F8C7] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                            <Link href={"/contact"}>CONTACT</Link>
                        </div>
                    </div>
                </div>
                <div className="hidden mobile:block">
                    <FaBars onClick={showSidebar} className="text-white text-2xl" />
                </div>
            </nav>

            <nav style={{ transform: sidebar ? "translateX(0%)" : "translateX(100%)" }} className="flex flex-col gap-y-4 h-[100vh] bg-[#48B19E] w-[200px] fixed top-0 right-0 p-10 text-lg text-white font-medium">
                <div onClick={hideSidebar} className="relative bottom-8 right-8">
                    <ImCross className="text-white" />
                </div>
                <div>
                    <Link href={"/"}>HOME</Link>
                </div>
                <div>
                    <Link href={"/courses"}>COURSE</Link>
                </div>
                <div>
                    <Link href={"/blog"}>BLOG</Link>
                </div>
                <div>
                    <Link href={"/about"}>ABOUT</Link>
                </div>
                <div>
                    <Link href={"/contact"}>CONTACT</Link>
                </div>
            </nav>
        </section>
    )
}

export default Navbar