import Image from "next/image";

interface AchievementProps {
  star: string;
  label: string;
  iconSrc?: string;
}

const Achievement = ({ star, label, iconSrc }: AchievementProps) => {
  return (
    <div className="relative inline-block">
      {/* Shadow effect to the bottom and right */}
      <div className="absolute top-0 left-2 h-[110%] w-full bg-gradient-to-br from-vibrantBlue to-darkBlue opacity-40 rounded-[24px]"></div>

      {/* Main content */}
      <div className="bg-white flex flex-col items-center px-8 py-2 relative z-10 shadow-md rounded-[24px]">
        <div className="flex gap-2 items-center">
          <h1 className="font-bold text-[36px] text-darkGray">{star}</h1>
          {iconSrc && (
            <div className="relative w-8 h-8">
              {/* Define fixed size for image */}
              <Image
                src={iconSrc}
                alt="icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
        </div>
        <p className="text-[16px] text-nowrap mt-[-4px]">{label}</p>
      </div>
    </div>
  );
};

export default Achievement;
