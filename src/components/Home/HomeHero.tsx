import Image from "next/image";
import SearchBar from "./SearchBar";
import QuickQuery from "@/utils/QuickQuery";

export default function HomeHero() {

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">

                {/* background decorative blur */}
                <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-orange-400/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-amber-400/30 rounded-full blur-[120px]" />

                {/* bottom wave */}
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
                        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur text-xs md:text-sm px-4 py-2 rounded-full shadow text-amber-700 font-medium mb-6 cursor-pointer hover:shadow-xl hover:shadow-amber-200 transition ml-21 md:ml-0">
                            🪷 Explore Divine Vrindavan
                        </div>

                        {/* heading */}
                        <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold leading-tight text-gray-800">
                            Discover{" "}
                            <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text">
                                Vrindavan Tour Packages
                            </span>
                            <br />
                            Taxi & Hotel Booking
                        </h1>

                        <p className="mt-4 text-center md:text-start text-xs text-gray-600 md:text-lg">
                            Book spiritual tours, comfortable taxis, and premium hotels in
                            Vrindavan with trusted local service.
                        </p>

                        {/* <div className="max-w-xl">
                            <SearchBar />
                        </div> */}
                        <QuickQuery/>

                        {/* trust indicators */}
                        <div className="flex gap-20 mt-10 text-sm text-gray-600">

                            <div>
                                <div className="font-extrabold text-amber-600 text-xl cursor-pointer">
                                    5000+
                                </div>
                                Travelers
                            </div>

                            <div>
                                <div className="font-extrabold text-amber-600 text-xl cursor-pointer">
                                    200+
                                </div>
                                Hotels
                            </div>

                            <div>
                                <div className="font-extrabold text-amber-600 text-xl cursor-pointer">
                                    24/7
                                </div>
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
                            <div className="text-xl font-bold text-amber-600">
                                ₹1,999
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}


// import Image from "next/image";

// export default function HomeHero() {
//   return (
//     <section
//       className="relative overflow-hidden min-h-[580px] flex items-center pt-22"
//       style={{ background: "linear-gradient(135deg, #b85000 0%, #d96800 35%, #f08010 65%, #c86008 100%)" }}
//     >
//       {/* Glow blobs */}
//       <div className="absolute top-[-80px] right-[200px] w-[320px] h-[320px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(255,210,80,.22) 0%, transparent 70%)" }} />
//       <div className="absolute bottom-[-80px] left-[-40px] w-[260px] h-[260px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(140,30,0,.5) 0%, transparent 70%)" }} />

//       <div className="relative z-10 max-w-7xl mx-auto px-10 py-12 pb-16 grid lg:grid-cols-[1fr_420px] gap-10 items-start w-full">

//         {/* LEFT */}
//         <div>
//           <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border text-[11px] font-semibold tracking-widest uppercase"
//             style={{ background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.25)", color: "#ffe4b0" }}>
//             <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
//             Vrindavan's Trusted Partner
//           </div>

//           <h1 className="text-[50px] font-extrabold leading-[1.08] text-white mb-1.5">
//             Plan Your Divine
//             <span className="block text-amber-300">Vrindavan Journey</span>
//           </h1>
//           <p className="text-[18px] font-light mb-3" style={{ color: "rgba(255,255,255,.72)" }}>
//             Tours · Taxi · Hotels · Temple Pujas
//           </p>
//           <p className="text-[13.5px] leading-relaxed mb-7 max-w-[400px]" style={{ color: "rgba(255,255,255,.65)" }}>
//             Spirituality meets comfort. Trusted local expertise for pilgrims seeking a truly sacred experience in the heart of Braj Bhoomi.
//           </p>

//           {/* Stats */}
//           <div className="flex mb-8">
//             {[["5000+","Happy Pilgrims"],["50+","Tour Packages"],["12+","Years Experience"],["24/7","Support"]].map(([n,l],i,a) => (
//               <div key={i} className={`flex flex-col ${i < a.length-1 ? "pr-5 mr-5 border-r" : ""}`}
//                 style={{ borderColor: "rgba(255,255,255,.2)" }}>
//                 <span className="text-[24px] font-extrabold text-amber-300 leading-none">{n}</span>
//                 <span className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,.55)" }}>{l}</span>
//               </div>
//             ))}
//           </div>

//           {/* Compact Enquiry Form */}
//           <div className="rounded-2xl p-5 max-w-[430px]"
//             style={{ background: "rgba(255,255,255,.13)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.22)" }}>
//             <p className="text-[13px] font-bold text-white mb-3.5 flex items-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
//               Quick Enquiry — Free Consultation
//             </p>
//             <div className="grid grid-cols-3 gap-2 mb-2.5">
//               {[["Name","text","Full name"],["Email","email","you@email.com"],["Phone","tel","+91 00000"]].map(([lbl,type,ph]) => (
//                 <div key={lbl} className="flex flex-col gap-1">
//                   <label className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,.65)" }}>{lbl}</label>
//                   <input type={type} placeholder={ph}
//                     className="w-full px-3 py-2 rounded-lg text-[12.5px] text-white outline-none"
//                     style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)" }} />
//                 </div>
//               ))}
//             </div>
//             <button className="w-full py-2.5 flex items-center justify-center gap-2 rounded-[9px] text-[13px] font-bold border-none cursor-pointer"
//               style={{ background: "linear-gradient(90deg, #ffd336 0%, #ff8c00 100%)", color: "#7a2e00", boxShadow: "0 4px 16px rgba(0,0,0,.2)" }}>
//               Send Enquiry →
//             </button>
//           </div>
//         </div>

//         {/* RIGHT — 3 image layout */}
//         <div className="relative h-[460px] hidden lg:block">
//           {/* Main top-center, rotated left */}
//           <div className="absolute top-0 left-6 w-[200px] h-[280px] rounded-[22px] overflow-hidden"
//             style={{ boxShadow: "0 20px 50px rgba(0,0,0,.35)", transform: "rotate(-5deg)" }}>
//             <Image src="/images/Home/prem-mandir.jpg" fill className="object-cover" alt="Prem Mandir" priority />
//           </div>
//           {/* Bottom left, rotated right */}
//           <div className="absolute bottom-0 left-0 w-[195px] h-[240px] rounded-[22px] overflow-hidden"
//             style={{ boxShadow: "0 14px 36px rgba(0,0,0,.3)", border: "2.5px solid rgba(255,255,255,.18)", transform: "rotate(5deg)" }}>
//             <Image src="/images/Home/Mandir.jpg" fill className="object-cover" alt="Mandir" priority />
//           </div>
//           {/* Right side upright */}
//           <div className="absolute top-10 right-0 w-[200px] h-[250px] rounded-[22px] overflow-hidden"
//             style={{ boxShadow: "0 14px 36px rgba(0,0,0,.28)" }}>
//             <Image src="/images/Home/Mandir-new.jpg" fill className="object-cover" alt="Mandir new" priority />
//           </div>

//           {/* Rating badge */}
//           <div className="absolute top-3.5 -left-3 flex items-center gap-2 px-3 py-2 rounded-xl text-xs"
//             style={{ background: "rgba(255,255,255,.14)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,.2)", boxShadow: "0 4px 14px rgba(0,0,0,.18)" }}>
//             <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,212,80,.2)", fontSize: 13 }}>⭐</div>
//             <div>
//               <div className="font-bold text-amber-300 text-[12px]">4.9 / 5</div>
//               <div className="text-[10px]" style={{ color: "rgba(255,255,255,.55)" }}>1200+ Reviews</div>
//             </div>
//           </div>

//           {/* Price card */}
//           <div className="absolute bottom-2.5 right-1 rounded-2xl px-4 py-3"
//             style={{ background: "rgba(255,255,255,.14)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,.24)", boxShadow: "0 6px 24px rgba(0,0,0,.2)" }}>
//             <div className="text-[10px] mb-0.5" style={{ color: "rgba(255,255,255,.6)" }}>Starting from</div>
//             <div className="text-[20px] font-extrabold text-amber-300">₹1,999</div>
//             <div className="text-[10px]" style={{ color: "rgba(255,255,255,.45)" }}>per person · all inclusive</div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom wave — yellow to orange gradient */}
//       <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 90" preserveAspectRatio="none">
//         <defs>
//           <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#ffd336" />
//             <stop offset="50%" stopColor="#ff9d00" />
//             <stop offset="100%" stopColor="#ff6a00" />
//           </linearGradient>
//         </defs>
//         <path d="M0,45 C200,90 400,10 600,50 C800,88 1000,15 1200,48 C1320,66 1390,30 1440,45 L1440,90 L0,90 Z" fill="url(#waveGrad)" opacity="0.35"/>
//         <path d="M0,60 C240,20 480,80 720,55 C960,30 1200,75 1440,55 L1440,90 L0,90 Z" fill="url(#waveGrad)" opacity="0.55"/>
//         <path d="M0,72 C300,50 600,90 900,68 C1100,52 1300,80 1440,70 L1440,90 L0,90 Z" fill="url(#waveGrad)" opacity="1"/>
//       </svg>
//     </section>
//   );
// }

// import Image from "next/image";

// export default function HomeHero() {
//   return (
//     <section
//       className="relative overflow-hidden min-h-[580px] flex items-center"
//       style={{ background: "linear-gradient(135deg, #b85000 0%, #d96800 35%, #f08010 65%, #c86008 100%)" }}
//     >
//       {/* Glow blobs */}
//       <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(255,210,80,.2) 0%, transparent 70%)" }} />
//       <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(140,30,0,.45) 0%, transparent 70%)" }} />

//       {/* Bottom wave — yellow to orange gradient */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
//         <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
//           <defs>
//             <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#ffd336" />
//               <stop offset="50%" stopColor="#ff9d00" />
//               <stop offset="100%" stopColor="#ff6a00" />
//             </linearGradient>
//           </defs>
//           <path d="M0,45 C200,90 400,10 600,50 C800,88 1000,15 1200,48 C1320,66 1390,30 1440,45 L1440,90 L0,90 Z"
//             fill="url(#waveGrad)" opacity="0.3" />
//           <path d="M0,60 C240,20 480,80 720,55 C960,30 1200,75 1440,55 L1440,90 L0,90 Z"
//             fill="url(#waveGrad)" opacity="0.5" />
//           <path d="M0,72 C300,50 600,90 900,68 C1100,52 1300,80 1440,70 L1440,90 L0,90 Z"
//             fill="url(#waveGrad)" opacity="1" />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center mt-15 relative z-10 w-full">

//         {/* LEFT CONTENT */}
//         <div className="z-10">

//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs md:text-sm font-medium cursor-pointer transition ml-21 md:ml-0"
//             style={{ background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.25)", color: "#ffe4b0" }}>
//             <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
//             🪷 Explore Divine Vrindavan
//           </div>

//           {/* Heading */}
//           <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold leading-tight text-white">
//             Discover{" "}
//             <span className="text-amber-300">
//               Vrindavan Tour Packages
//             </span>
//             <br />
//             Taxi &amp; Hotel Booking
//           </h1>

//           <p className="mt-4 text-center md:text-start text-xs md:text-lg" style={{ color: "rgba(255,255,255,.7)" }}>
//             Book spiritual tours, comfortable taxis, and premium hotels in
//             Vrindavan with trusted local service.
//           </p>

//           {/* Compact Enquiry Form */}
//           <div className="mt-8 rounded-2xl p-5 max-w-[500px]"
//             style={{ background: "rgba(255,255,255,.13)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,.22)" }}>
//             <p className="text-[13px] font-bold text-white mb-4 flex items-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
//               Quick Enquiry — Free Consultation
//             </p>
//             <div className="grid grid-cols-3 gap-2 mb-3">
//               {([
//                 ["Name",  "text",  "Full name"],
//                 ["Email", "email", "you@email.com"],
//                 ["Phone", "tel",   "+91 00000"],
//               ] as const).map(([lbl, type, ph]) => (
//                 <div key={lbl} className="flex flex-col gap-1">
//                   <label className="text-[10px] font-semibold tracking-widest uppercase"
//                     style={{ color: "rgba(255,255,255,.65)" }}>{lbl}</label>
//                   <input
//                     type={type}
//                     placeholder={ph}
//                     className="w-full px-3 py-2 rounded-lg text-[12.5px] text-white outline-none placeholder:opacity-40 focus:border-amber-400/70 transition"
//                     style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)" }}
//                   />
//                 </div>
//               ))}
//             </div>
//             <button
//               className="w-full py-2.5 flex items-center justify-center gap-2 rounded-[9px] text-[13px] font-bold border-none cursor-pointer hover:-translate-y-0.5 transition"
//               style={{ background: "linear-gradient(90deg, #ffd336 0%, #ff8c00 100%)", color: "#7a2e00", boxShadow: "0 4px 16px rgba(0,0,0,.2)" }}
//             >
//               Send Enquiry →
//             </button>
//           </div>

//           {/* Trust indicators */}
//           <div className="flex gap-20 mt-8 text-sm">
//             {[["5000+", "Travelers"], ["200+", "Hotels"], ["24/7", "Taxi Service"]].map(([num, lbl]) => (
//               <div key={lbl}>
//                 <div className="font-extrabold text-amber-300 text-xl cursor-pointer">{num}</div>
//                 <div style={{ color: "rgba(255,255,255,.65)" }}>{lbl}</div>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* RIGHT IMAGE LAYOUT — unchanged */}
//         <div className="relative h-[500px] hidden lg:block">

//           {/* main image */}
//           <div className="absolute top-0 left-25 w-65 h-90 rounded-3xl overflow-hidden shadow-2xl rotate-[-6deg]">
//             <Image src="/images/Home/prem-mandir.jpg" fill priority className="object-cover" alt="Vrindavan temple" />
//           </div>

//           {/* image */}
//           <div className="absolute bottom-0 left-0 w-65 h-80 rounded-3xl overflow-hidden shadow-xl rotate-6">
//             <Image src="/images/Home/Mandir.jpg" fill priority className="object-cover" alt="Prem Mandir" />
//           </div>

//           {/* image */}
//           <div className="absolute top-35 right-1 w-65 h-80 rounded-3xl overflow-hidden shadow-xl">
//             <Image src="/images/Home/Mandir-new.jpg" fill priority className="object-cover" alt="Hotel" />
//           </div>

//           {/* floating card */}
//           <div className="absolute bottom-2 right-0 p-4 rounded-2xl"
//             style={{ background: "rgba(255,255,255,.14)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,.24)", boxShadow: "0 6px 24px rgba(0,0,0,.2)" }}>
//             <div className="text-sm" style={{ color: "rgba(255,255,255,.6)" }}>Starting from</div>
//             <div className="text-xl font-bold text-amber-300">₹1,999</div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }