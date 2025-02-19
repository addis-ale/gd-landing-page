import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const navigationLink = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Services",
    href: "service",
  },
  {
    label: "Our Work",
    href: "our-work",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-3 px-8 sm:px-0 sm:py-0 relative">
      <div className="raleway font-black text-[40px] text-white">GD.</div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 sm:gap-[40px]">
        <ul className="flex items-center gap-8 sm:gap-[40px]">
          {navigationLink.map((item) => (
            <li key={item.href} className="text-[16px] font-bold text-white">
              {item.label}
            </li>
          ))}
        </ul>
        <Button label="Enroll now" background="darkGray" />
      </div>

      {/* Mobile Menu Button */}
      <div
        className="flex sm:hidden w-10 h-10 relative"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src={"/MenuAlt4Outline.svg"} fill alt="menu" />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-8 bg-gray-800 p-5 rounded-lg shadow-lg sm:hidden">
          <ul className="flex flex-col gap-4">
            {navigationLink.map((item) => (
              <li key={item.href} className="text-[16px] font-bold text-white">
                {item.label}
              </li>
            ))}
          </ul>
          <Button label="Enroll now" background="darkGray" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
