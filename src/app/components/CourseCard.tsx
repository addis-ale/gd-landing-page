import Image from "next/image";

const CourseCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl  px-4 pt-0 pb-5 w-full max-w-sm relative">
      {/* Image Container */}
      <div className="relative w-full h-[200px] mb-4">
        <Image
          src="/kids_image1.png"
          alt="kids"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl mt-[-1px]"
        />
      </div>

      {/* Course Title */}
      <div className="text-xl font-bold text-darkGray mb-2 w-full ">
        Game Design Essentials
      </div>

      {/* Time Info */}
      <div className=" items-center gap-2  w-full flex justify-end">
        <div className="relative w-6 h-6">
          <Image src="/Clock.svg" alt="time" layout="fill" />
        </div>
        <span className="text-sm text-gray-500">8 HRS</span>
      </div>

      {/* Progress Bar */}
      <div className="bg-darkGray w-full h-2 rounded-full mb-[-24px]"></div>
    </div>
  );
};

export default CourseCard;
