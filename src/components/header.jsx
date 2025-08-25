import { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import logo from "../images/Modern Blue P Letter Logo-cropped.svg";

const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PAYMENT", href: "#payment" },
    { label: "FEATURES", href: "#features" },
    { label: "PREVIEW", href: "#preview" },
    { label: "USER", href: "#user" },
];

const Header = () => {
   const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                    const el = document.querySelector(href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            } else {
                const el = document.querySelector(href);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="bg-[#F9EFE5] sticky top-0 z-50">
            <div className="flex items-center justify-between lg:justify-around px-6 py-6">
                {/* Logo */}
                <a href="/" aria-label="Logo">
                    <img src={logo} alt="Logo" className="h-10 w-auto md:h-12" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-10 text-sm font-medium text-gray-700">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="hover:text-gray-900 hover:underline transition"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Sign Up */}
                <button className="hidden lg:block bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
                    Sign up
                </button>

                {/* Mobile Menu Icon */}
                <button
                    className="lg:hidden text-gray-700 text-3xl focus:outline-none"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <MdClose /> : <MdOutlineMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <ul className="flex flex-col gap-4 text-sm font-semibold text-gray-700 bg-[#f8f3ed] rounded-lg p-5 mx-4 shadow">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                onClick={(e) => {
                                    scrollToSection(e, item.href);
                                    setOpen(false);
                                }}
                                className="hover:text-red-600 transition block"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="my-2 mx-4 w-[calc(100%-2rem)] bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
                    Sign up
                </button>
            </div>
        </nav>
    );
};

export default Header;
