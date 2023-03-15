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
    <section name="events" className="bg-[#19144E] h-[600px] md:h-[533px] md:flex md:justify-center md:gap-x-[247px] overflow-hidden ">
      <div className="flex flex-col items-end  w-[90%] md:w-[50%] mx-auto">
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
      <div className="block md:hidden px-[16px] py-[50px] relative">
        <Carousel
        autoFocus={true}
          autoPlay={true}
          infiniteLoop8
          interval="2000"
          className="relative "
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } w-[40px] h-[40px] bg-[#19144E] top-[250px] left-[2%] flex justify-center items-center p-[12px] cursor-pointer z-40 border border-white rounded-[3px]`}
                onClick={clickHandler}
              >
                <RiArrowLeftLine className="w-9 h-9 text-white " />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } w-[40px] h-[40px] bg-[#19144E] top-[250px] left-[25%] flex justify-center items-center p-[12px] cursor-pointer z-40 border border-white rounded-[3px]`}
                onClick={clickHandler}
              >
                <RiArrowRightLine className="w-9 h-9 text-white " />
              </div>
            );
          }}
        >
          <div className="evt1 w-full max-w-[360px] mx-auto py-[24px] px-[12px]">
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
          <div className="evt2 w-full max-w-[360px] mx-auto py-[24px] px-[12px]">
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
          <div className="evt3 w-full max-w-[360px] mx-auto py-[24px] px-[12px]">
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
