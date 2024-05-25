import { FaTwitter, FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <main>
      <div className="w-[100%] h-[2px] bg-slate-400"></div>
        <footer className="flex flex-col justify-center items-center gap-y-5 text-sm mt-12 py-5 text-center px-5">
            <h3 className="text-lg font-bold">About Us</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.</p>
            <div className="flex">
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaTwitter className="text-xl text-purple-600" /></div>
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaInstagram className="text-xl text-purple-600" /></div>
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaWhatsapp className="text-xl text-purple-600" /></div>
            <div className="flex justify-center items-center h-12 w-12 hover:scale-[1.25] transition-transform ease-in-out duration-150 cursor-pointer"><FaFacebookF className="text-xl text-purple-600" /></div>
            </div>
            <p>Made by <span className="text-lg font-bold text-purple-600 cursor-pointer">Abdul Rehman</span></p>
            <p>Copyright © 2021 <span className="text-purple-600 font-bold cursor-pointer">Xplore Skill.</span> All Rights Reserved</p>
        </footer>
    </main>
  )
}

export default Footer