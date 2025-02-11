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
  return (
    <div className="flex justify-between items-center py-3 px-8 ">
      <div className="raleway font-black text-[40px] text-white">GD.</div>
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
      <div className="flex sm:hidden w-10 h-10 relative">
        <Image src={"/MenuAlt4Outline.svg"} fill alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
