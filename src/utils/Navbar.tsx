"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import TourEnquiryPopup from "./TourEnquiryPopUp";
import CommonEnquiryForm from "./CommanEnquiryForm";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navItems = [
    { label: "Home", url: "/" },
    { label: "Tours", url: "/tour-packages" },
    { label: "Taxi", url: "/taxi" },
    { label: "Hotels", url: "/hotels" },
    { label: "Pooja", url: "/pooja" },
    { label: "About", url: "/about" },
  ];

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <TourEnquiryPopup open={open} onClose={() => setOpen(false)} />
      <header className="fixed top-6 left-0 w-full z-50 flex justify-center">
        <div className="relative w-[92vw] sm:w-[90vw] xl:w-[85vw]">
          {/* Glow Background */}
          <div
            className="
                    absolute inset-0
                    bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500
                    blur-xl opacity-30 rounded-full
                "
          ></div>

          {/* Navbar */}
          <nav
            ref={containerRef}
            className={`
                        relative
                        flex items-center justify-between
                        px-3 xl:px-12 py-3
                        rounded-full
                        backdrop-blur-xl
                        bg-white/80
                        border border-amber-200/60
                        transition-all duration-300
                        ${scrolled ? "shadow-2xl scale-105" : "shadow-xl"}
                    `}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="h-12 w-[140px] md:w-[180px] rounded-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center px-4">
                <Image
                  src="/images/Experience_my_India.webp"
                  height={50}
                  width={150}
                  alt="Mathura Vrindavan Taxi Services Logo"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="relative hidden xl:flex items-center">
              {/* Sliding Indicator */}
              <div
                ref={indicatorRef}
                className="
                            absolute top-0 bottom-0
                            bg-gradient-to-r from-orange-400 to-amber-600
                            rounded-full
                            transition-all duration-300
                        "
                style={{
                  width: "0px",
                  left: "0px",
                  opacity: 0.15,
                }}
              ></div>

              <div className="relative flex items-center gap-2 px-2">
                {navItems.map((item, idx) => (
                  <Link
                    href={item.url}
                    key={idx}
                    data-nav={item.label}
                    onClick={() => setActive(item.label)}
                    className={`
                                        relative z-10
                                        px-5 py-2 rounded-full
                                        font-medium
                                        transition
                                        cursor-pointer
                                        ${
                                          active === item.label
                                            ? "text-amber-700"
                                            : "text-gray-700 hover:text-amber-600"
                                        }
                                    `}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* CTA */}
              <button
                className="
                                    relative
                                    px-3 xl:px-7 py-3
                                    text-sm xl:text-lg
                                    rounded-full
                                    font-medium
                                    text-white
                                    bg-gradient-to-r from-orange-500 to-amber-600
                                    shadow-lg
                                    hover:scale-105
                                    transition
                                    overflow-hidden
                                    cursor-pointer
                                "
                onClick={() => setIsFormOpen(true)}
              >
                Enquire Now
                <span
                  className="
                                        absolute inset-0
                                        bg-white opacity-0 hover:opacity-20
                                        transition
                                    "
                ></span>
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden flex items-center justify-center h-10 w-10 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100 transition cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* 3. common Form Component */}
              <CommonEnquiryForm
                open={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                defaultService="General Enquiry"
              />
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="xl:hidden absolute top-full left-0 right-0 mt-3 mx-2 sm:mx-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-amber-200/60 shadow-2xl overflow-hidden z-50">
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
                                        px-6 py-3.5
                                        text-base
                                        font-medium
                                        transition
                                        ${
                                          active === item.label
                                            ? "text-amber-700 bg-amber-50"
                                            : "text-gray-700 hover:text-amber-600 hover:bg-amber-50/60"
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
