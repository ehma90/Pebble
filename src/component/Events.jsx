import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowRightUpLine,
} from "react-icons/ri";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Events() {
  return (
    <section className="bg-[#19144E] h-[533px] md:flex md:justify-between overflow-hidden">
      <div className="w-[90%] md:w-[50%] mx-auto">
        <div className="event-section">
          <div className="w-full max-w-[352px] md:max-w-[424px] pt-[64px] md:py-[126px] md:mx-auto overflow-y-hidden">
            <h3 className="font-semibold text-[28px] md:text-[40px]">
              Upcoming events
            </h3>
            <p className="mt-5 text-base md:text-xl">
              Providing Sustainable growth to skill acquisition in akwa-ibom
              state and Africa
            </p>
          </div>
        </div>
      </div>
      <div className="mx-[16px] hidden md:block md:overflow-y-auto md:w-[50%] md:mx-auto">
        <div className="event-group md:overflow-y-scroll">
          <div className="flex flex-nowrap flex-row md:flex-col gap-[20px]">
            <div className="event-date ">
              <p className=" w-[132px] md:w-[178px] rounded-[42px] font-medium text-center text-[12px] md:text-xl py-2 px-4 bg-[#00000066]">
                1st November
              </p>
              <h4 className="mt-2 md:mt-4 font-semibold text-2xl md:text-6xl">
                Akwa Ibom state <br /> Skill-Up week
              </h4>
              <button className="flex items-center underline mt-[32px]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button>
            </div>
            <div className="event-date2">
              <p className="w-[92px] md:w-[178px] rounded-[42px] font-medium text-center text-[12px] md:text-xl py-1 px-2 md:py-2 md:px-4 bg-[#00000066]">
                21st April
              </p>
              <h4 className="mt-2 md:mt-4 font-semibold text-2xl md:text-6xl">
                Enugu state <br /> Skill-Up week
              </h4>
              <button className="text-[12px] md:text-baseflex items-center underline mt-3 md:mt-[32px]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button>
            </div>
            <div className="event-date3">
              <p className="w-[92px] md:w-[178px] rounded-[42px] font-medium text-center text-[12px] md:text-xl py-2 px-4 bg-[#00000066]">
              3rd May
              </p>
              <h4 className=" mt-2 md:mt-4 font-semibold text-2xl md:text-6xl">
                Lagos state <br /> Skill-Up week
              </h4>
              <button className="flex items-center underline mt-[32px]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden px-[16px]">
        <Carousel
          autoPlay
          infiniteLoop8
          interval="2000"
          showThumbs={false}
          className="relative"
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } w-[20px] h-[20px] bg-white bottom-[45%] left-0 flex justify-center items-center px-1 cursor-pointer z-20 border border-black rounded-full`}
                onClick={clickHandler}
              >
                <RiArrowLeftSLine className="w-9 h-9 text-black " />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } w-[20px] h-[20px] bg-white bottom-[45%] right-0 flex justify-center items-center px-1 cursor-pointer z-20 border border-black rounded-full`}
                onClick={clickHandler}
              >
                <RiArrowRightSLine className="w-9 h-9 dark:text-black " />
              </div>
            );
          }}
        >
          <div className="evt1 w-[320px] mx-auto py-[24px] px-[12px]">
            <p className=" w-[91px] md:w-[178px] rounded-[42px] font-medium text-[10px] md:text-xl py-1 px-2 bg-[#00000066]">
              1st November
            </p>
            <h4 className="mt-2 font-medium text-[24px] text-start">
              Akwa Ibom state <br /> Skill-Up week
            </h4>
            <button className="flex items-center underline mt-[32px]">
              See More Details <RiArrowRightUpLine className="ml-2" />
            </button>
          </div>
          <div className="evt2 w-[320px] mx-auto py-[24px] px-[12px]">
            <p className=" w-[91px] md:w-[178px] rounded-[42px] font-medium text-[10px] md:text-xl py-1 px-2 bg-[#00000066]">
              21st April
            </p>
            <h4 className="mt-2 font-medium text-[24px] text-start">
               Enugu state <br /> Skill-Up week
            </h4>
            <button className="flex items-center underline mt-[32px]">
              See More Details <RiArrowRightUpLine className="ml-2" />
            </button>
          </div>
          <div className="evt3 w-[320px] mx-auto py-[24px] px-[12px]">
            <p className=" w-[91px] md:w-[178px] rounded-[42px] font-medium text-[10px] md:text-xl py-1 px-2 bg-[#00000066]">
              3rd May
            </p>
            <h4 className="mt-2 font-medium text-[24px] text-start">
              Lagos state <br /> Skill-Up week
            </h4>
            <button className="flex items-center underline mt-[32px]">
              See More Details <RiArrowRightUpLine className="ml-2" />
            </button>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Events;
