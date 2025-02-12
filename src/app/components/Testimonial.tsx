import Image from "next/image";

const bgColors: Record<string, string> = {
  vibrantBlue: "bg-vibrantBlue", // Assuming vibrantBlue is defined in your Tailwind config
  orangeRed: "bg-orangeRed", // Assuming orangeRed is defined in your Tailwind config
};

interface TestimonialProps {
  header: string;
  avatarSrc: string;
  name: string;
  job: string;
  background?: keyof typeof bgColors;
}

const Testimonial = ({
  header,
  avatarSrc,
  name,
  job,
  background = "vibrantBlue",
}: TestimonialProps) => {
  return (
    <div className="border shadow-sm rounded-[24px] h-fit pb-2 w-full customemd:w-[350px] bg-white z-10">
      <div
        className={`flex justify-center items-center ${
          bgColors[background] || "bg-vibrantBlue" // Default to vibrantBlue
        } px-[16px] py-[24px] rounded-[24px]`}
      >
        <h2 className="raleway font-black text-[18px] text-white">{header}</h2>
      </div>
      <div className="flex justify-between px-[16px]">
        <div className="flex flex-col justify-center ">
          <h1 className="font-black text-darkGray text-[24px]">{name}</h1>
          <p className="text-[18px] font-regular">{job}</p>
        </div>
        {avatarSrc && (
          <div className="w-[100px] h-[100px] relative pb-[24px] mt-[-15px]">
            <Image src={`${avatarSrc}`} fill alt="avatar" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
