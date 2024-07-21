import Navbar from "../components/navbar"
import Link from "next/link"

export default function Page() {
    return (
        <div className="w-full h-fit min-h-screen bg-primary select-none">
            <Navbar />
            <div className="w-full h-full p-4 flex justify-center">
                <div className="w-[600px] h-full p-4 flex flex-col gap-4">
                    <div className="w-full h-fit bg-primary-light p-4 px-12 rounded-md text-primary text-xl">
                        <h1 className="text-center text-2xl">Social</h1>
                        <div className="flex p-2 items-center gap-4 contact-btn">
                            <i class="fa-brands fa-facebook"></i><Link href='#'><h1>HoneyCrumps Official Facebook</h1></Link>
                            
                        </div>
                        <div className="flex p-2 items-center gap-4 contact-btn">
                            <i class="fa-brands fa-youtube"></i><Link href='#'><h1>HoneyCrumps Official Channel</h1></Link>
                        </div>
                        <div className="flex p-2 items-center gap-4 contact-btn">
                            <i class="fa-brands fa-x-twitter"></i><Link href='#'><h1>HoneyCrumps Official X/Twitter</h1></Link>
                        </div>
                        <div className="flex p-2 items-center gap-4 contact-btn">
                            <i class="fa-brands fa-tiktok"></i><Link href='#'><h1>HoneyCrumps Official TikTok</h1></Link>
                        </div>
                    </div>
                    <div className="w-full h-fit bg-primary-light p-4 px-12 rounded-md text-primary text-xl">
                        <h1 className="text-center text-2xl">Contact</h1>
                        <div className="flex p-2 items-center gap-4 contact-btn">
                            <i class="fa-solid fa-phone"></i><Link href='#'><h1>02-222-2222</h1></Link>
                        </div>
                        <div className="flex p-2 items-center gap-4 contact-btn">
                            <i class="fa-solid fa-envelope"></i><Link href='#'><h1>honeycrumps@domain.com</h1></Link>
                        </div>
                        <div className="flex p-2 items-center gap-4 contact-btn">
                            <i class="fa-brands fa-line"></i><Link href='#'><h1>@honeycrumpts</h1></Link>
                        </div>
                    </div>


                    <div className="w-full h-fit bg-primary-light p-4 px-12 rounded-md text-primary text-xl">
                        <h1 className="text-center text-2xl">Other Info</h1>
                        <div className="flex p-2 items-center gap-4 contact-btn">
                            <i class="fa-solid fa-globe"></i><Link href='#'><h1>www.honey-road.com</h1></Link>
                        </div>

                        <div className="flex p-2 items-center gap-4 contact-btn">
                            <i class="fa-solid fa-location-dot"></i><Link href='#'><h1>221b Baker st. Opposite Mrs. Hudson's house</h1></Link>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}