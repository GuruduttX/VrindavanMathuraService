import Image from "next/image";
import SearchBar from "./SearchBar";


export default function HomeHero() {


    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-100">



                {/* background decorative blur */}
                <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-400/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-fuchsia-400/30 rounded-full blur-[120px]" />

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
                    <svg
                        viewBox="0 0 1440 80"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="w-full h-16 md:h-20"
                    >
                        <path
                            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
                            fill="white"
                        />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center mt-15">

                    {/* LEFT CONTENT */}
                    <div className="z-10">

                        {/* badge */}
                        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur text-xs md:text-sm px-4 py-2 rounded-full shadow text-pink-600 font-medium mb-6 cursor-pointer hover:shadow-xl hover:shadow-pink-200 transition ml-15 md:ml-0">
                            🪷 Explore Divine Vrindavan
                        </div>

                        {/* heading */}
                        <h1 className="text-center text-3xl md:text-5xl font-bold leading-tight text-gray-800">
                            Discover{" "}
                            <span className="bg-gradient-to-r from-pink-600 to-fuchsia-600 text-transparent bg-clip-text">
                                Vrindavan Tour Packages
                            </span>
                            <br />
                            Taxi & Hotel Booking
                        </h1>

                        <p className="mt-4  text-center md:text-start text-xs text-gray-600 md:text-lg">
                            Book spiritual tours, comfortable taxis, and premium hotels in
                            Vrindavan with trusted local service.
                        </p>

                        <div className="max-w-xl">
                            <SearchBar />
                        </div>


                        {/* trust indicators */}
                        <div className="flex gap-20 mt-10 text-sm text-gray-600">

                            <div>
                                <div className="font-extrabold text-pink-600 text-xl cursor-pointer">5000+</div>
                                Travelers
                            </div>

                            <div>
                                <div className="font-extrabold text-pink-600 text-xl cursor-pointer">200+</div>
                                Hotels
                            </div>

                            <div>
                                <div className="font-extrabold text-pink-600 text-xl cursor-pointer">24/7</div>
                                Taxi Service
                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE LAYOUT */}
                    <div className="relative h-[500px] hidden lg:block">

                        {/* main image */}
                        <div className="absolute top-0 left-25 w-65 h-90 rounded-3xl overflow-hidden shadow-2xl rotate-[-6deg]">
                            <Image
                                src="/images/Home/prem-mandir.jpg"
                                fill
                                priority
                                className="object-cover"
                                alt="Vrindavan temple"
                            />
                        </div>

                        {/* image */}
                        <div className="absolute bottom-0 left-0 w-65 h-80 rounded-3xl overflow-hidden shadow-xl rotate-6">
                            <Image
                                src="/images/Home/Mandir.jpg"
                                fill
                                priority
                                className="object-cover"
                                alt="Prem Mandir"
                            />
                        </div>

                        {/* image */}
                        <div className="absolute top-35 right-1 w-65 h-80 rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/Home/Mandir-new.jpg"
                                fill
                                priority
                                className="object-cover"
                                alt="Hotel"
                            />
                        </div>

                        {/* floating card */}
                        <div className="absolute bottom-2 right-0 bg-white p-4 rounded-2xl shadow-xl">
                            <div className="text-sm text-gray-500">
                                Starting from
                            </div>
                            <div className="text-xl font-bold text-pink-600">
                                ₹1,999
                            </div>
                        </div>

                    </div>



                </div>


            </section>


        </>
    );
}