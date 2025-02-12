import Image from "next/image";
interface TestimonialProps {
  header: string;
  avatarSrc: string;
  name: string;
  job: string;
}
const Testimonial = ({ header, avatarSrc, name, job }: TestimonialProps) => {
  return (
    <div className=" border shadow-sm rounded-[24px] h-fit pb-2 w-[350px]">
      <div className="flex justify-center items-center bg-vibrantBlue px-[16px] py-[24px] rounded-[24px]">
        <h2 className="releway font-black text-[18px] text-white">{header}</h2>
      </div>
      <div className="flex justify-between px-[16px]">
        <div className="flex flex-col justify-center ">
          <h1 className="font-black text-darkGray text-[24px]">{name}</h1>
          <p className="text-[18px] font-regular">{job}</p>
        </div>
        {avatarSrc && (
          <div className="w-[100px] h-[100px] relative pb-[24px] mt-[-5px]">
            <Image src={`${avatarSrc}`} fill alt="avatar" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
