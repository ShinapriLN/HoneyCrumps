import Navbar from "../components/navbar"
import { products } from "../data";
import Image from "next/image";

export default function Page() {
    return (
        <div className="menu-page w-full h-fit min-h-screen scrollable">
            <Navbar />
            <div className="w-full h-fit p-4 flex justify-center gap-4">
                <div className="filter-container w-3/12 h-fit p-4 rounded-lg bg-primary-light">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-2xl font-bold">Filters</h1>
                        <div className="w-full h-full">
                            <p>Suggestion</p>
                        </div>
                        <div className="filter w-full h-fit p-4 select-none bg-white">
                            <div>
                                <input type="checkbox" />Suggest By Store
                            </div>
                            <div>
                                <input type="checkbox" />Suggest By Customers
                            </div>
                            <div>
                                <input type="checkbox" />Best Seller
                            </div>
                            <div>
                                <input type="checkbox" />Best Review
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <p>Categories</p>
                        </div>
                        <div className="filter w-full h-fit p-4 select-none bg-white">
                            <div>
                                <input type="checkbox" />Bread
                            </div>
                            <div>
                                <input type="checkbox" />Cookie
                            </div>
                            <div>
                                <input type="checkbox" />Cupcake
                            </div>
                        </div>
                    </div>


                </div>
                <div className="outer-product-container w-9/12 h-fit p-4 rounded-lg bg-primary-light flex flex-col gap-4">
                    <div className="w-full h-fit p-4 bg-white flex justify-center rounded-md">
                        Search
                    </div>
                    <div className="w-full h-fit flex justify-end">
                        <div className="w-fit h-full p-4 bg-white flex gap-4 rounded-full">
                            <i class="fa-solid fa-border-all"></i>
                            <i class="fa-solid fa-list"></i>
                        </div>

                    </div>
                    <div className="w-full min-h-screen bg-white flex gap-4 flex-wrap justify-center rounded-md">
                        {products.map((product, index) => (
                            <div key={index} className="product-container rounded-lg m-2 bg-black">
                                <Image
                                    src={product.src}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-5/6 object-cover rounded-t-md"
                                    alt={product.name}
                                />
                                <div className="text-primary-light w-full h-1/6 content-center px-2">
                                    <h1 className="product-name">{product.name}</h1>
                                    {/* <p className="product-description">{product.description}</p> */}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}