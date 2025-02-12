import Image from "next/image";
import AppComponent from "./components/AppComponent";
import Button from "./components/Button";
import CourseCard from "./components/CourseCard";
import Testimonial from "./components/Testimonial";
import Achievement from "./components/Achievement";
import Navbar from "./components/NavBar";
import Container from "./components/Container";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-vibrantBlue to-darkBlue px-2 sm:px-4 md:px-12">
        <Container>
          <Navbar />
          <div className="flex flex-col sm:flex-row items-center md:justify-between">
            <div className="flex flex-col gap-4 sm:gap-6 basis-1/2 md:basis-[40%] py-4 sm:py-6 max-w-xs sm:max-w-2xl mx-auto">
              <h1 className="font-black text-[24px] sm:text-[40px] text-white leading-tight text-center sm:text-left">
                Learn the art of Game Dev
              </h1>
              <p className="text-[12px] sm:text-[16px] text-white text-center sm:text-left">
                This is a comprehensive course on Game Development. You will
                learn everything from generating an idea to publishing your
                games.
              </p>
              <div className="flex justify-center sm:justify-start">
                <Button label="Enroll now" iconSrc="/pencilAlt.svg" />
              </div>
            </div>
            {/* Image & Achievements */}
            <div className="flex justify-center basis-1/2 md:basis-[60%] mx-auto sm:flex-row flex-col">
              <div className="flex flex-col gap-16 pt-6 sm:pt-10 justify-center items-center sm:items-start">
                <Achievement star="32K" label="Students Enrolled" />
                <Achievement
                  star="4.7"
                  label="Overall Rating"
                  iconSrc="/star.svg"
                />
              </div>
              <div className="relative hidden sm:block mx-auto pt-[150px]">
                <Image
                  src="/hero-image1.png"
                  alt="hero"
                  width={300}
                  height={350}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Testimonial Section */}
      <Container>
        <div className="bg-white flex flex-col sm:flex-row gap-6 px-4 sm:px-12 md:px-16 py-8 items-center">
          <div className="hidden sm:block relative">
            <div className="bg-darkGray h-full rounded-full absolute left-4 w-2 z-0"></div>
            <div className="flex gap-6 flex-col py-3 z-50">
              <Testimonial
                avatarSrc="/Ellipse1.png"
                header="This is a great course!"
                job="Developer, Sony"
                name="Jane Copper"
              />
              <div className="z-10 pl-2">
                <Testimonial
                  avatarSrc="/Ellipse2.png"
                  header="Amazing Work!"
                  job="Designer, Facebook"
                  name="Jacop James"
                  background="orangeRed"
                />
              </div>
            </div>
          </div>

          {/* Right Side Text & Button */}
          <div className="flex flex-col gap-4 max-w-xs sm:max-w-xl mx-auto text-center sm:text-left">
            <p className="text-[24px] sm:text-[40px] text-darkGray font-black">
              What our students say
            </p>
            <p className="text-[12px] sm:text-lg text-darkGray">
              Get access to all videos, source code, and a private Discord
              community.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Button label="Enroll now" />
            </div>
          </div>
        </div>
      </Container>

      {/* Courses Section */}
      <div className="bg-gradient-to-b from-vibrantBlue to-deepBlue flex flex-col py-6 sm:py-8 gap-4">
        <Container>
          <h1 className="font-black text-[24px] sm:text-[40px] text-white text-center">
            Our Courses
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <CourseCard
              title="Game Design Essentials"
              imgSrc="/kids_image1.png"
            />
            <CourseCard
              title="Unity Gaming Engine Fundamentals"
              imgSrc="/joyStick_img.png"
            />
          </div>
        </Container>
      </div>

      {/* App Section */}
      <Container>
        <div className="bg-white flex justify-center items-center py-6 sm:py-10">
          <div className="flex flex-col gap-3 sm:gap-4 items-center text-center">
            <h1 className="text-[24px] sm:text-[40px] font-black text-darkGray">
              Get our App
            </h1>
            <p className="text-[12px] sm:text-[16px] text-darkGray">
              Use our App for a better experience on smartphones.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <AppComponent label="App Store" iconSrc="/vector.svg" />
              <AppComponent label="Google Play" iconSrc="/playStore.svg" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
