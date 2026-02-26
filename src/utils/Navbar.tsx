"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("Home");

    const navItems = ["Home", "Tours", "Taxi", "Hotels", "Puja", "About"];

    const containerRef = useRef(null);
    const indicatorRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const activeEl = document.querySelector(`[data-nav="${active}"]`);
        if (activeEl && indicatorRef.current) {
            indicatorRef.current.style.width = `${activeEl.offsetWidth}px`;
            indicatorRef.current.style.left = `${activeEl.offsetLeft}px`;
        }
    }, [active]);

    return (
        <header className="fixed top-6 left-0 w-full z-50 flex justify-center">

            {/* OUTER GLOW */}
            <div className="relative w-[85vw]">

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
          px-8 lg:px-12 py-3
          rounded-full
          backdrop-blur-xl
          bg-white/70
          border border-white/40
          transition-all duration-300
          ${scrolled ? "shadow-2xl scale-105" : "shadow-xl"}
          `}
                >

                    <Link href="/" className="flex items-center">
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



                    {/* CENTER NAV */}
                    <div className="relative hidden md:flex items-center">

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

                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    data-nav={item}
                                    onClick={() => setActive(item)}
                                    className={`
                  relative z-10
                  px-5 py-2 rounded-full
                  font-medium
                  transition cursor-pointer
                  ${active === item
                                            ? "text-pink-700"
                                            : "text-gray-700 hover:text-pink-600"
                                        }
                  `}
                                >
                                    {item}
                                </button>
                            ))}

                        </div>

                    </div>



                    {/* CTA */}
                    <Link href="/taxi">

                        <button
                            className="
              relative
              px-7 py-3
              rounded-full
              font-medium
              text-white
              bg-gradient-to-r from-pink-500 to-fuchsia-600
              shadow-lg
              hover:scale-105
              transition
              overflow-hidden
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

                    </Link>

                </nav>

            </div>

        </header>
    );
}