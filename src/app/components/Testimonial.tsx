import Image from "next/image";

const Testimonial = () => {
  return (
    <div className=" border shadow-sm rounded-[24px] h-fit pb-2">
      <div className="flex justify-center items-center bg-vibrantBlue px-[16px] py-[24px] rounded-[24px]">
        <h2 className="releway font-black text-[18px] text-white">
          This is a great course. It helped me alot. <br /> Thank you :)
        </h2>
      </div>
      <div className="flex justify-between px-[16px]">
        <div className="flex flex-col justify-center ">
          <h1 className="font-black text-darkGray text-[24px]">Jane Cooper</h1>
          <p className="text-[18px] font-regular">Developer, Sony</p>
        </div>
        <div className="w-[100px] h-[100px] relative pb-[24px] mt-[-5px]">
          <Image src={"/Ellipse1.png"} fill alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
