"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const menu = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Fair Services", path: "/services" },
  { name: "Saftey", path: "/saftey" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBaseLight = "relative px-3 py-2 transition-colors duration-30 text-black hover:text-cyan-400 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0 after:w-0 after:h-1 after:bg-cyan-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-6";

  const linkBaseDark = `relative px-3 py-2 transition-colors duration-300 ${scrolled ? "text-black" : "text-white"} hover:text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0 after:w-0 after:h-1 after:bg-cyan-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-6`;

  const isActive = (path: string, isDark: boolean) => {
    const linkBase = isDark ? linkBaseDark : linkBaseLight;
    return pathname === path ? `${linkBase} after:w-6` : linkBase;
  };

  return (
    <>
      <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "bg-white/90 backdrop-blur-sm border-b-2 border-cyan-400 px-2" : isHome ? "bg-white/20 lg:bg-white/5 border-b-2 border-transparent backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm border-b-2 border-cyan-400"}`}>
        <nav className="flex justify-between items-center px-5 py-4 md:px-15">
          <div className="rideza-logo rounded-2xl">
            <img src="/images/ridezalogo.png" className="w-20 lg:w-25" alt="rideza-logo" />
          </div>
          <ul className="hidden text-black text-[17px] font-medium lg:flex items-center gap-5 pb-1">
            {menu.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className={isActive(item.path, scrolled || isHome)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Link href="/contact-us" className="hidden md:flex items-center bg-cyan-400 text-md tracking-wider font-medium text-white pl-6 pr-4 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300">
              Book Ride
              <span className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-white text-cyan-400">
                <FaPhoneAlt size={15} />
              </span>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden text-3xl transition-all duration-300 
              ${scrolled ? "text-cyan-400" : "text-white" }`}>
              {isOpen ? <IoMdClose /> : <FiMenu />}
            </button>
          </div>
        </nav>
        {/* mobile-menu */}
        {isOpen && (
          <div className={`lg:hidden p-5 border-t transition-all duration-300 
            ${scrolled || isHome ? "border-white/20 bg-header" : "bg-cyan-400"}`}>
            <ul className="flex flex-col items-center gap-3">
              {menu.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} onClick={() => setIsOpen(false)} className={`font-medium transition-colors duration-300 
                    ${scrolled ? "text-black" : "text-cyan-300 hover:text-cyan-400" }`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}