import Navbar from "../components/navbar";
import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full h-fit min-h-screen bg-primary select-none">
            <Navbar />
            <div className="outer-container w-full h-full px-20 border-b-1 border-primary-light text-primary">
                <div className="about-container w-full h-fit flex gap-4 p-4">
                    <div className="about-element w-4/6 h-full bg-primary-light p-8 rounded-md">
                        <Image
                            src='/top-view-rye-bread-slices-basket-cutting-board-with-knife-plaid-cloth-wooden-background-scaled.jpg'
                            width={1000}
                            height={1000}
                            className="w-full h-auto object-cover bg-center rounded-md"
                        />
                        <div>
                            <h1 className="header-text">TOPIC</h1>
                        </div>
                        <div>
                            <p>This is the paragraph.</p>
                        </div>
                    </div>
                    <div className="about-element about-element-2 w-2/6 h-full p-4 flex flex-col gap-4">
                        <div className="w-full h-3/6 about-element-2-1 bg-primary-light rounded-md p-4">
                            <Image
                                src='/top-view-rye-bread-slices-basket-cutting-board-with-knife-plaid-cloth-wooden-background-scaled.jpg'
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-cover bg-center rounded-md"
                            />
                            <div>
                                <h1 className="header-text">TOPIC</h1>
                            </div>
                            <div>
                                <p>This is the paragraph.</p>
                            </div>
                        </div>
                        <div className="w-full h-3/6 about-element-2-1 bg-primary-light rounded-md p-4">
                            <Image
                                src='/top-view-rye-bread-slices-basket-cutting-board-with-knife-plaid-cloth-wooden-background-scaled.jpg'
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-cover bg-center rounded-md"
                            />
                            <div>
                                <h1 className="header-text">TOPIC</h1>
                            </div>
                            <div>
                                <p>This is the paragraph.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="outer-container w-full h-fit px-20 border-b-1 border-primary bg-gradient-to-b from-primary to-primary-light p-4 flex flex-col items-center gap-4 text-primary-light">
                <div><h1>METHOD</h1></div>
                <div className="flex justify-center gap-4 about-element-2">
                    <div className="w-1/3 h-full bg-primary p-4 rounded-md element-middle-1">
                        <Image
                            src='/top-view-rye-bread-slices-basket-cutting-board-with-knife-plaid-cloth-wooden-background-scaled.jpg'
                            width={1000}
                            height={1000}
                            className="w-full h-auto object-cover bg-center rounded-md"
                        />
                        <div>
                            <p>paragraph</p>
                        </div>
                    </div>
                    <div className="w-1/3 h-full bg-primary p-4 rounded-md element-middle-1">
                        <Image
                            src='/top-view-rye-bread-slices-basket-cutting-board-with-knife-plaid-cloth-wooden-background-scaled.jpg'
                            width={1000}
                            height={1000}
                            className="w-full h-auto object-cover bg-center rounded-md"
                        />
                        <div>
                            <p>paragraph</p>
                        </div>
                    </div>
                    <div className="w-1/3 h-full bg-primary p-4 rounded-md element-middle-1">
                        <Image
                            src='/top-view-rye-bread-slices-basket-cutting-board-with-knife-plaid-cloth-wooden-background-scaled.jpg'
                            width={1000}
                            height={1000}
                            className="w-full h-auto object-cover bg-center rounded-md"
                        />
                        <div>
                            <p>paragraph</p>
                        </div>
                    </div>
                </div>
                <div className="w-3/6 h-full bg-primary p-4 rounded-md element-middle-1">
                    <div className="w-full h-full">
                        <Image
                            src='/top-view-rye-bread-slices-basket-cutting-board-with-knife-plaid-cloth-wooden-background-scaled.jpg'
                            width={1000}
                            height={1000}
                            className="w-full h-auto object-cover bg-center rounded-md"
                        />
                        <div>
                            <p>paragraph</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit p-20 border-b-1 bg-primary-light flex justify-center text-primary">
                <h1 className="thank-text text-7xl">Thank you for coming</h1>
            </div>
        </div>
    )
}