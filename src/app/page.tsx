import Image from "next/image";
import Button from "./components/Button";
import Container from "./components/Container";
import Navbar from "./components/NavBar";
import Achievement from "./components/Achievement";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-b from-vibrantBlue to-darkBlue px-4 sm:px-8 md:px-12">
        <Container>
          <Navbar />
          <div className="flex flex-col customemd:flex-row items-start py-12 sm:py-16 md:py-20 md:justify-between">
            <div className="flex flex-col gap-6 sm:gap-8 basis-1/2 md:basis-[40%] py-6 sm:py-8 max-w-2xl">
              <h1 className="font-black text-[40px] sm:text-[50px] text-white raleway leading-tight">
                Learn the art of Game Dev
              </h1>
              <p className="font-regular text-[16px] text-white">
                This is a comprehensive course on Game Development. You will
                learn everything from generating an idea to publishing your
                games to different platforms.
              </p>
              <div>
                <Button label="Enroll now" iconSrc="/pencilAlt.svg" />
              </div>
            </div>
            <div className="flex justify-center basis-1/2 md:basis-[60%]">
              <div className="flex flex-col gap-32 pt-10 justify-center">
                <Achievement star="32K" label="Students Enrolled" />
                <div className="md:ml-[-25px]">
                  <Achievement
                    star="4.7"
                    label="Overall Rating"
                    iconSrc="/star.svg"
                  />
                </div>
              </div>
              <div className="relative w-[320px] sm:w-[400px] md:w-[446px] h-[420px] sm:h-[500px] md:h-[582px] justify-end">
                <Image
                  src="/hero-image1.png"
                  fill
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-12 md:px-[60px] py-12">
        {/* Left Side: Testimonial Component */}
        <div className="flex justify-center">
          <Testimonial />
        </div>

        {/* Right Side: Text & Button */}
        <div className="flex flex-col gap-6">
          <p className="raleway text-[40px] sm:text-[50px] md:text-[60px] text-darkGray font-black">
            What our students say
          </p>
          <div className="flex flex-col gap-4 text-darkGray text-lg">
            <p>
              All students get access to all the videos and also the source code
              of the projects.
            </p>
            <p>
              You will also have access to a private Discord channel where you
              can discuss your doubts.
            </p>
          </div>
          <div>
            <Button label="Enroll now" />
          </div>
        </div>
      </div>
    </div>
  );
}
