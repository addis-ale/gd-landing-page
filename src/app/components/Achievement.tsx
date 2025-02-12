const Achievement = () => {
  return (
    <div className="relative inline-block">
      {/* Shadow effect to the bottom and right */}
      <div className="absolute top-0 left-2 h-[110%] w-full  bg-gradient-to-br from-vibrantBlue to-darkBlue opacity-40  rounded-[24px] "></div>

      {/* Main content */}
      <div className="bg-white  flex flex-col items-center px-8 py-2 relative z-10 shadow-md rounded-[24px]">
        <h1 className="font-bold text-[36px] text-darkGray">32K</h1>
        <p className="text-[16px] text-nowrap mt-[-4px]">Students Enrolled</p>
      </div>
    </div>
  );
};

export default Achievement;
