import { RiArrowRightUpLine } from "react-icons/ri";
import heroImg from "../assets/heroImg.svg";
import heroImg2 from "../assets//heroImg2.svg";
import heroImg3 from "../assets/heroImg3.svg";
import heroImg4 from "../assets/heroImg4.svg";
import heroImg5 from "../assets/heroImg5.svg";
import heroImg6 from "../assets/heroImg6.svg";
import heroImg7 from "../assets/heroImg7.svg";
import heroImg8 from "../assets/heroImg8.svg";
import heroImg9 from "../assets/heroImg9.svg";
import "../style/style.css";

export function Hero() {
  
  return (
    <div className="hero-section">
      <div className="container mx-auto">
        <div className="block md:flex md:justify-between md:gap-[47px]">
          <div className="mx-4 pt-[64px] md:py-[160px] w-[369px] md:w-[500px]">
            <h1 className="text-[48px] md:text-[56px] font-[674] text-black">
              Skill-Up <br />{" "}
              <span className="text-[#D64911]">South_South</span>
            </h1>
            <p className="text-black text-base md:text-xl mt-5">
              Providing Sustainable growth to skill acquisition in akwa-ibom
              state and Africa
            </p>
            <button className="flex items-center text-white transition ease delay-50 bg-[#7B61FF] hover:bg-[#19144E] py-4 px-[45px] mt-[40px]">
              Get a skill <RiArrowRightUpLine className="w-5 h-5 ml-2" />
            </button>
          </div>
          <div
            className="mx-4 md:mx-0 grid gap-x-6 grid-cols-3 py-[97px]"
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
          >
            <div
              className="flex flex-col gap-y-5"
              data-aos="flip-down"
              data-aos-offset="200"
              data-aos-delay="50"
            >
              <img src={heroImg} alt="heroGrid" />
              <img src={heroImg2} alt="heroGrid" />
              <img src={heroImg3} alt="heroGrid" />
            </div>
            <div className="flex flex-col gap-y-5">
              <img src={heroImg4} alt="heroGrid" />
              <img src={heroImg5} alt="heroGrid" />
              <img src={heroImg6} alt="heroGrid" />
            </div>
            <div className="flex flex-col gap-y-5">
              <img src={heroImg7} alt="heroGrid" />
              <img src={heroImg8} alt="heroGrid" />
              <img src={heroImg9} alt="heroGrid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
