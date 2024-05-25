import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

const NavMenu = (props: { text: string }) => {
    return (
        <main className="navmenu">
            <Navbar />
            <div className="w-full h-[30vh] flex justify-center items-center">
                <h1 className="text-6xl font-bold text-[#24F8C7] mobile:text-4xl">{props.text}</h1>
            </div>
        </main>
    )
}

export default NavMenu