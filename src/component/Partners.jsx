import { RiArrowRightUpLine } from "react-icons/ri";
import facebook from "../assets/facebookIcon.svg";
import twitter from "../assets/twitterIcon.svg";
import instagram from "../assets/instagramIcon.svg";
import linkedIn from "../assets/linkedInIcon.svg";

function Partners() {
  return (
    <div className="bg-[#19144E] px-4 py-[63px] md:py-[83px] ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className=" w-full max-w-[371px] md:max-w-[538px]">
            <h3 className="font-semibold text-[28px] md:text-[40px]">
              Looking to partner with us? <br />{" "}
              <span className="text-[#FCA397]">Get in touch</span>
            </h3>
            <p className="mt-5 text-white/70">
              Pebble is a platform that connects people to the transformative
              power of technology, especially as it affects their daily lives.
              The future is now
            </p>

            <button className="flex items-center text-white transition ease delay-50 bg-[#7B61FF] hover:bg-white hover:text-black py-4 px-[45px] mt-[40px]">
              Get a skill <RiArrowRightUpLine className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className=" grid grid-cols-2 gap-5 w-full max-w-[371px] md:max-w-[528px] mt-[64px] md:mt-0">
            <div className="p-5 md:px-[50px] md:py-[40px] bg-[#302B60] hover:bg-[#19144E] w-[158px] md:w-[253px] cursor-pointer">
              <div className="flex justify-center items-center">
                <img src={facebook} alt="facebook" />
              </div>
              <p className="text-[18px] md:text-2xl text-center mt-[14px] md:mt-5">Facebook</p>
            </div>
            <div className="p-5 md:px-[50px] md:py-[40px] bg-[#302B60] hover:bg-[#19144E] w-[158px] md:w-[253px] cursor-pointer">
              <div className="flex justify-center items-center">
                <img src={instagram} alt="instagram" />
              </div>
              <p className="text-[18px] md:text-2xl text-center mt-[14px] md:mt-5">Instagram</p>
            </div>
            <div className="p-5 md:px-[50px] md:py-[40px] bg-[#302B60] hover:bg-[#19144E] w-[158px] md:w-[253px] cursor-pointer">
              <div className="flex justify-center items-center">
                <img src={twitter} alt="twitter" />
              </div>
              <p className="text-[18px] md:text-2xl text-center mt-[14px] md:mt-5">Twitter</p>
            </div>
            <div className="p-5 md:px-[50px] md:py-[40px] bg-[#302B60] hover:bg-[#19144E] w-[158px] md:w-[253px] cursor-pointer">
              <div className="flex justify-center items-center">
                <img src={linkedIn} alt="linkedIn" />
              </div>
              <p className="text-[18px] md:text-2xl text-center mt-[14px] md:mt-5">LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
