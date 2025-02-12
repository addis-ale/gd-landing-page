import Image from "next/image";
interface CourseCardProps {
  imgSrc: string;
  title: string;
}
const CourseCard = ({ imgSrc, title }: CourseCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl pt-0 pb-5 w-full sm:w-[326px] px-4 sm:px-[16px] h-auto sm:h-[218px] relative">
      {/* Image Container */}
      {imgSrc && (
        <div className="relative w-full h-[150px] sm:h-[200px] mb-4">
          <Image
            src={imgSrc}
            alt="kids"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl mt-[-1px]"
          />
        </div>
      )}

      {/* Course Title */}
      <div className="text-lg sm:text-xl font-bold text-darkGray mb-2 w-full">
        {title}
      </div>

      {/* Time Info */}
      <div className="flex items-center gap-2 w-full justify-end">
        <div className="relative w-5 sm:w-6 h-5 sm:h-6">
          <Image src="/Clock.svg" alt="time" layout="fill" />
        </div>
        <span className="text-xs sm:text-sm text-gray-500">8 HRS</span>
      </div>

      {/* Progress Bar */}
      <div className="bg-darkGray w-full h-2 rounded-full mb-[-24px]"></div>
    </div>
  );
};

export default CourseCard;
