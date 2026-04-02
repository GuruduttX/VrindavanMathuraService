"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import TourEnquiryPopup from "./TourEnquiryPopUp";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const navItems = [{label : "Home", url : "/"}, {label : "Tours" ,url : "/tour-packages"}, {label : "Taxi" , url : '/taxi'}, {label : "Hotels", url : '/hotels'}, {label :"Puja" , url : "/pooja"}, {label : "About" , url : '/about'}];

    const containerRef = useRef<HTMLElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const activeEl = document.querySelector(`[data-nav="${active}"]`);
        if (activeEl && indicatorRef.current) {
            indicatorRef.current.style.width = `${(activeEl as HTMLElement).offsetWidth}px`;
            indicatorRef.current.style.left = `${(activeEl as HTMLElement).offsetLeft}px`;
        }
    }, [active]);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) setIsMobileMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
         <TourEnquiryPopup open={open} onClose={()=>setOpen(false)}/>
         <header className="fixed top-6 left-0 w-full z-50 flex justify-center">

            {/* OUTER GLOW */}
            <div className="relative w-[92vw] sm:w-[90vw] xl:w-[85vw]">

                <div className="
          absolute inset-0
          bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500
          blur-xl opacity-30 rounded-full
        "></div>


                {/* NAVBAR */}
                <nav
                    ref={containerRef}
                    className={`
          relative
          flex items-center justify-between
          px-3 xl:px-12 py-3
          rounded-full
          backdrop-blur-xl
          bg-white/70
          border border-white/40
          transition-all duration-300
          ${scrolled ? "shadow-2xl scale-105" : "shadow-xl"}
          `}
                >

                    {/* LOGO */}
                    <Link href="/" className="flex items-center flex-shrink-0">
                        <div className="h-12 w-[140px] md:w-[180px] rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center px-4">
                            <Image
                                src="/images/Experience_my_India.webp"
                                height={50}
                                width={150}
                                alt="Mathura Vrindavan Taxi Services Logo"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </Link>



                    {/* CENTER NAV — visible only on xl+ (1280px) */}
                    <div className="relative hidden xl:flex items-center">

                        {/* sliding pill indicator */}
                        <div
                            ref={indicatorRef}
                            className="
              absolute top-0 bottom-0
              bg-gradient-to-r from-pink-500 to-fuchsia-500
              rounded-full
              transition-all duration-300
              "
                            style={{
                                width: "0px",
                                left: "0px",
                                opacity: 0.15,
                            }}
                        ></div>


                        <div className="relative flex items-center gap-2 px-2 cursor-pointer">

                            {navItems.map((item : any, idx) => (
                                <Link
                                    href={item.url}
                                    key={idx}
                                    data-nav={item.label}
                                    onClick={() => setActive(item.label)}
                                    className={`
                  relative z-10
                  px-5 py-2 rounded-full
                  font-medium
                  transition cursor-pointer
                  ${active === item.label
                                            ? "text-pink-700"
                                            : "text-gray-700 hover:text-pink-600"
                                        }
                  `}
                                >
                                    {item.label}
                                </Link>
                            ))}

                        </div>

                    </div>



                    {/* RIGHT SIDE: CTA + Hamburger */}
                    <div className="flex items-center gap-3 flex-shrink-0">

                        {/* CTA Button */}
                       
                        <button
                            onClick={()=>setOpen(true)}
                            className="
                            relative
                            px-3 xl:px-7 py-3
                            text-sm xl:text-lg
                            rounded-full
                            font-medium
                            text-white
                            bg-gradient-to-r from-pink-500 to-fuchsia-600
                            shadow-lg
                            hover:scale-105
                            transition
                            overflow-hidden
                            cursor-pointer
                            "
                        >
                            Enquire Now

                            {/* shine effect */}
                            <span className="
            absolute inset-0
            bg-white opacity-0 hover:opacity-20
            transition
            "></span>
                        </button>
                      

                        {/* Hamburger Menu Button — visible below lg (1024px) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="xl:hidden flex items-center justify-center h-10 w-10 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                </nav>

                {/* MOBILE/TABLET DROPDOWN MENU */}
                {isMobileMenuOpen && (
                    <div className="xl:hidden absolute top-full left-0 right-0 mt-3 mx-2 sm:mx-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden z-50">
                        <div className="flex flex-col py-3">
                            {navItems.map((item, idx) => (
                                <Link
                                    href={item.url}
                                    key={idx}
                                    onClick={() => {
                                        setActive(item.label);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`
                                        px-6 py-3.5 text-base font-medium transition
                                        ${active === item.label
                                            ? "text-pink-600 bg-pink-50"
                                            : "text-gray-700 hover:text-pink-600 hover:bg-pink-50/50"
                                        }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

            </div>

        </header>
        </>
       
    );
}