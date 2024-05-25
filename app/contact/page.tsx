import NavMenu from "../components/navmenu/navmenu"
import Footer from "../components/footer/footer"
import { FaHome, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Page = () => {
    return (
        <main>
            <NavMenu text="CONTACT US" />
            <div className="w-full px-[10vw] py-20 flex flex-col gap-y-40 mobile:gap-y-20">
                <iframe className="w-full h-[400px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin" allowFullScreen loading="lazy"></iframe>
                <div className="flex w-full gap-x-5 mobile:flex-col mobile:gap-y-20">
                    <div className="flex flex-col gap-y-10 w-[50%] mobile:w-full">
                        <div className="flex items-center gap-x-8">
                            <FaHome className="text-[#24F8C7] text-4xl" />
                            <div>
                                <h3 className="text-xl">NH9 Road, ABC Building</h3>
                                <p className="text-sm">Ghaziabad, Uttar Pradesh, IN</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <FaPhone className="text-[#24F8C7] text-4xl" />
                            <div>
                                <h3 className="text-xl">+91 7445546525</h3>
                                <p className="text-sm">Monday To Saturday, 9AM To 6PM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <IoMdMail className="text-[#24F8C7] text-4xl" />
                            <div>
                                <h3 className="text-xl">xyz@email.com</h3>
                                <p className="text-sm">Email Us Yor Query</p>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col gap-y-8 w-[50%] mobile:w-full">
                        <input className="border border-gray-300 h-14 p-3 text-sm" type="text" placeholder="Enter Name" />
                        <input className="border border-gray-300 h-14 p-3 text-sm" type="email" placeholder="Enter Email" />
                        <input className="border border-gray-300 h-14 p-3 text-sm" type="text" placeholder="Enter Subject" />
                        <textarea className="border border-gray-300 h-32 p-3 text-sm" placeholder="Message" />
                        <button className="border px-8 py-2 rounded-md border-purple-500 w-48 h-12 text-purple-500 hover:bg-[#24F8C7] hover:text-white hover hover:border-none transition-all duration-500 ease-in-out">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Page