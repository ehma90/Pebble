import { RiArrowRightUpLine } from "react-icons/ri";
import eventImg from "../assets/eventImg.svg";
import communityImg from "../assets/communityImg.svg";

function Group() {
  return (
    <div className="py-[64px] md:py-[100px] px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center  md:flex-row md:justify-between md:gap-x-6">
          <div className="event-card">
            <div className="px-[32px]">
              <h3 className="text-xl md:text-[28px] font-semibold">Event</h3>
              <p className="text-sm md:text-xl mt-5">
                Bringing developers together in-person and online. Stay in the
                know about upcoming events, catch up on content you missed, and
                connect with Google experts.
              </p>
              <button className="flex items-center transition ease delay-50 hover:bg-white hover:text-black border border-white py-[10px] px-[16px] mb-[40px] md:py-3 md:px-[24px] mt-[40px]">
                Join our Community <RiArrowRightUpLine className="text-2xl" />
              </button>
            </div>
          </div>

          <div className="community-card">
            <div className="px-[32px]">
              <h3 className="text-xl md:text-[28px] font-semibold">Community</h3>
              <p className="text-sm md:text-xl mt-5">
                Bringing developers together in-person and online. Stay in the
                know about upcoming events, catch up on content you missed, and
                connect with Google experts.
              </p>
              <button className="flex items-center transition ease delay-50 hover:bg-white hover:text-black border border-white py-[10px] px-[16px] md:py-3 md:px-[24px] mt-[40px]">
                Join our Community <RiArrowRightUpLine className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
