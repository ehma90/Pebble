import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

function Events() {
  return (
    <section className=" event-section ">
      <div className="container mx-4 md:mx-auto">
        <div className="block md:flex md:justify-between">
          <div className="w-[424px] py-[64px] md:py-[126px] overflow-y-hidden">
            <h3 className="font-semibold text-[28px] md:text-[40px]">Upcoming events</h3>
            <p className="mt-5 text-base md:text-xl">
              Providing Sustainable growth to skill acquisition in akwa-ibom
              state and Africa
            </p>
          </div>

          <div className="event-group">
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
                1st November
              </p>
              <h4 className="mt-2 md:mt-4 font-semibold text-2xl md:text-6xl">
                Akwa Ibom state <br /> Skill-Up week
              </h4>
              <button className="text-[12px] md:text-baseflex items-center underline mt-3 md:mt-[32px]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button>
            </div>
            <div className="event-date3">
              <p className="w-[92px] md:w-[178px] rounded-[42px] font-medium text-center text-[12px] md:text-xl py-2 px-4 bg-[#00000066]">
                1st November
              </p>
              <h4 className=" mt-2 md:mt-4 font-semibold text-2xl md:text-6xl">
                Akwa Ibom state <br /> Skill-Up week
              </h4>
              <button className="flex items-center underline mt-[32px]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
