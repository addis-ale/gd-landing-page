import Image from "next/image";
import Button from "./components/Button";
import Container from "./components/Container";
import Navbar from "./components/NavBar";
import Achievement from "./components/Achievement";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-vibrantBlue to-darkBlue px-4 sm:px-8 md:px-12">
        <Container>
          <Navbar />
          <div className="flex flex-col sm:flex-row items-start py-12 sm:py-16 md:py-20 md:justify-between">
            <div className="flex flex-col gap-6 sm:gap-8 basis-1/2 md:basis-[40%] py-6 sm:py-8">
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
            <div className="flex justify-center basis-1/2 md:basis-[60%">
              <div>
                <Achievement star="32K" label="Students Enrolled" />
              </div>
              <div className="relative w-[320px] sm:w-[400px] md:w-[446px] h-[420px] sm:h-[500px] md:h-[582px]">
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
    </div>
  );
}
