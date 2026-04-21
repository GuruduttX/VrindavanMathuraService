"use client";
import { useState, useEffect, useRef } from "react";
import HotelCard from "./ProductShow/HotelsCard";
import PoojaCard from "./ProductShow/PoojaCards";
import TourCard from "./ProductShow/TourCards";
import CommonEnquiryForm from "@/utils/CommanEnquiryForm";
type FilterId = "tours"  | "hotels" | "puja";

interface Filter {
  id: FilterId;
  label: string;
}

interface Product {
  title: string;
  price: string;
  image: string;
  location: string;
}

type ProductData = Record<FilterId, Product[]>;

const filters: Filter[] = [
  { id: "tours", label: "Tour Packages" },
  { id: "hotels", label: "Hotels" },
  { id: "puja", label: "Puja" },
];

export default function ProductsShowcase() {
  const [active, setActive] = useState<FilterId>("tours");
  const [data, setData] = useState<ProductData>({
    tours: [],
    hotels: [],
    puja: [],
  });

  const [opne, setIsOpen] = useState(false)

  const indicatorRef = useRef<HTMLDivElement | null>(null);


useEffect(() => {
  const fetchData = async () => {
    try {
 
      const toursRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/tour-packages`);
      const tours = await toursRes.json();

  
      const hotelsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/hotels`);
      const hotels = await hotelsRes.json();

 
      const pujaRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/pooja`);
      const puja = await pujaRes.json();


      setData({
        tours: tours?.data || [],
        hotels: hotels?.data || [],
        puja: puja?.data || [],
      });

    } catch (err) {
      console.error("API Error:", err);
    }
  };

  fetchData();
}, []);



  // indicator animation
  useEffect(() => {
    const el = document.querySelector(
      `[data-filter="${active}"]`
    ) as HTMLElement | null;

    if (el && indicatorRef.current) {
      indicatorRef.current.style.width = `${el.offsetWidth}px`;
      indicatorRef.current.style.left = `${el.offsetLeft}px`;
    }
  }, [active]);

  return (
    <> 
      <CommonEnquiryForm open={opne} onClose={()=>setIsOpen(false)}/>
      <section className="py-10 md:py-24 relative bg-gradient-to-b from-white via-amber-50 to-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* heading */}
         <div className="text-center mb-12">

  
          {/* headline with inline SVG underline decoration */}
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent leading-tight tracking-tight">
              Tours, Hotels &amp; Rituals
            </h2>

            {/* SVG decorative underline */}
            <svg
              viewBox="0 0 320 12"
              className="w-full mt-1"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="uline" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#ea580c" />
                  <stop offset="50%"  stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
              </defs>
              {/* wavy underline path */}
              <path
                d="M0,6 Q40,0 80,6 T160,6 T240,6 T320,6"
                fill="none"
                stroke="url(#uline)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

 

  

        </div>

          {/* FILTER */}
          <div className="flex justify-center mb-10">
            <div className="relative flex gap-6 md:gap-2 bg-white shadow-lg p-2 rounded-full border-2 border-amber-400 cursor-pointer">

              <div
                ref={indicatorRef}
                className="absolute top-2 bottom-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full transition-all duration-300 opacity-20"
              />

              {filters.map((filter) => (
                <button
                  key={filter.id}
                  data-filter={filter.id}
                  onClick={() => setActive(filter.id)}
                  className={`relative z-10 text-xs md:text-lg px-3 whitespace-nowrap md:px-10 py-2 md:py-4 rounded-full font-medium transition cursor-pointer ${
                    active === filter.id
                      ? "text-amber-700"
                      : "text-gray-600 hover:text-amber-600"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {data[active]?.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col hover:scale-105 cursor-pointer"
              >

                {/* TOURS */}
                {active === "tours" && (
                  <>
                  <TourCard product={product} setOpen={setIsOpen}/>
                  </>
                )}

              

                {/* HOTELS */}
                {active === "hotels" && (
                  <>
                  <HotelCard product={product} setOpen={setIsOpen}/>
                  </>
                )}

                {active === 'puja' && (
                  <>
                    <PoojaCard product={product} setOpen={setIsOpen}/> 
                  </>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
   
  );
}