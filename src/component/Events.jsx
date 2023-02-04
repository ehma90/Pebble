import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

function Events() {
  return (
    <section className="event-section overscroll-y-auto">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[424px] py-[126px]">
            <h3 className="font-semibold text-[40px]">Upcoming events</h3>
            <p className="mt-5 text-xl">
              Providing Sustainable growth to skill acquisition in akwa-ibom
              state and Africa
            </p>
            <div className="flex gap-x-[25px] mt-[96px]">
              <div className="border border-white rounded-[3px] p-3">
                <RiArrowLeftLine />
              </div>
              <div className="border border-white rounded-[3px] p-3">
                <RiArrowRightLine />
              </div>
            </div>
          </div>
          <div className="event-group">
            <div className="event-date my-[19px]">
              {/* <p className="w-[178px] rounded-[42px] font-medium text-xl py-2 px-4 bg-[#00000066]">
                1st November
              </p>
              <h4 className="font-semibold text-[58px]">
                Akwa Ibom state <br /> Skill-Up week
              </h4>
              <button className="flex items-center underline mt-[32px]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button> */}
            </div>
            <div className="event-date my-[19px]">
              {/* <p className="w-[178px] rounded-[42px] font-medium text-xl py-2 px-4 bg-[#00000066]">
                1st November
              </p>
              <h4 className="font-semibold text-[58px]">
                Akwa Ibom state <br /> Skill-Up week
              </h4>
              <button className="flex items-center underline mt-[32px]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button> */}
            </div>
            <div className="event-date my-[19px]">
              {/* <p className="w-[178px] rounded-[42px] font-medium text-xl py-2 px-4 bg-[#00000066]">
                1st November
              </p>
              <h4 className="font-semibold text-[58px]">
                Akwa Ibom state <br /> Skill-Up week
              </h4>
              <button className="flex items-center underline mt-[32px]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
