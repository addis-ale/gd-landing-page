import Image from "next/image";

interface AchievementProps {
  star: string;
  label: string;
  iconSrc?: string;
  iconSize?: number; // Optional prop to set custom icon size
}

const Achievement = ({
  star,
  label,
  iconSrc,
  iconSize = 24,
}: AchievementProps) => {
  return (
    <div className="relative inline-block">
      {/* Shadow effect */}
      <div className="absolute top-0 left-2 h-[110%] w-full bg-gradient-to-b from-vibrantBlue to-darkBlue opacity-40 rounded-[24px]"></div>

      {/* Main content */}
      <div className="bg-white flex flex-col items-center px-6 sm:px-8 py-2 relative z-10 shadow-md rounded-[24px] max-w-fit">
        <div className="flex gap-2 items-center">
          <h1 className="font-bold text-2xl sm:text-[36px] text-darkGray">
            {star}
          </h1>
          {iconSrc && (
            <div
              className="relative"
              style={{ width: iconSize, height: iconSize }}
            >
              <Image
                src={iconSrc}
                alt="icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
        </div>
        <p className="text-sm sm:text-[16px] whitespace-nowrap mt-1">{label}</p>
      </div>
    </div>
  );
};

export default Achievement;
