import { RiArrowRightUpLine } from "react-icons/ri";

function Programmes() {
  return (
    <div name="programmes" className="bg-[#19144E] py-[100px] ">
      <div className="container mx-auto">
        <div className=" mx-4">
          <h2 className=" text-[28px] font-medium md:font-semibold md:text-[40px] text-center">
            Our Programmes
          </h2>
          <div className=" flex flex-col md:flex-row md:justify-between items-center  md:gap-x-6 md:mx-0 md:mt-[42px] w-full">
            <div className="my-[32px] w-full bg-[#479B7F] pt-[40px] md:pt-[63px] pb-[37px] px-7 md:px-5">
              <h3 className="font-semibold text-xl md:text-[28px]">
                Start-Up Build
              </h3>
              <p className=" text-base mt-4 md:text-xl md:mt-5 ">
                A meeting of doers and thinkers who are hungry for development
                and growth. It features startup education, business linkups,
                fundraising, and knowledge sharing.
              </p>
              <button className="flex items-center transition ease delay-50 hover:bg-white hover:text-black border border-white py-3 px-[24px] mt-[36px]">
                Enroll Now <RiArrowRightUpLine className="text-2xl" />
              </button>
            </div>
            <div className=" my-[32px] w-full bg-[#6E57E8] pt-[63px] pb-[37px] px-5">
              <h3 className="font-semibold text-xl md:text-[28px]">
                Skill Trainings
              </h3>
              <p className="text-base mt-4 md:text-xl md:mt-5">
                A meeting of doers and thinkers who are hungry for development
                and growth. It features startup education, business linkups,
                fundraising, and knowledge sharing.
              </p>
              <button className="flex items-center transition ease delay-50 hover:bg-white hover:text-black border border-white py-3 px-[24px] mt-[36px]">
                Enroll Now <RiArrowRightUpLine className="text-2xl" />
              </button>
            </div>
            <div className=" my-[32px] w-full bg-[#C5164A] pt-[63px] pb-[37px] px-5">
              <h3 className="font-semibold text-xl md:text-[28px]">
                Women In Tech
              </h3>
              <p className="text-base mt-4 md:text-xl md:mt-5">
                A meeting of doers and thinkers who are hungry for development
                and growth. It features startup education, business linkups,
                fundraising, and knowledge sharing.
              </p>
              <button className="flex items-center transition ease delay-50 hover:bg-white hover:text-black border border-white py-3 px-[24px] mt-[36px]">
                Enroll Now <RiArrowRightUpLine className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programmes;
