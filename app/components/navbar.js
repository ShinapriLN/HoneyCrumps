import Link from "next/link";

export default function Navbar() {
    return(
        <div className="container w-full h-[80px] flex justify-between items-center select-none px-8 bg-primary-light rounded-b-md">
            <div>
                <div className="logo"><Link href='/'><h1 className="font-heading text-3xl"><span className="text-primary">Honey</span><span className="text-secondary-dark">Crumps</span></h1></Link></div>
            </div>
            <div className="text-primary-dark">
                <ul className="menu-container flex gap-4 font-body">
                    <li className="menu-btn"><Link href='/'>Home</Link></li>
                    <li className="menu-btn"><Link href='/menu'>Menu</Link></li>
                    <li className="menu-btn"><Link href='/contact'>Contact</Link></li>
                    <li className="menu-btn"><Link href='/about'>About</Link></li>
                </ul>
                <div className="menu-icon">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    )
}