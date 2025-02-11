import Image from "next/image";

interface buttonProps {
  background?: string;
  label: string;
  iconSrc?: string;
}
const Button = ({ background, label, iconSrc }: buttonProps) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 ${
        background ? `bg-${background}` : "bg-orangeRed"
      }  rounded-[24px] text-[16px] sm:text-[18px] font-bold text-white gap-2`}
    >
      {iconSrc && (
        <div className="relative w-4 h-4 flex items-center justify-center ">
          <Image src={`${iconSrc}`} fill alt="icon" />
        </div>
      )}
      <span>{label}</span>
    </button>
  );
};

export default Button;
