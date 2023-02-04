import { RiArrowRightUpLine } from "react-icons/ri";
import eventImg from "../assets/eventImg.svg";
import communityImg from "../assets/communityImg.svg";

function Group() {
  return (
    <div className="py-[100px]">
      <div className="container mx-auto">
        <div className="flex justify-center gap-x-6">
          <div className="w-[644px]">
            <div className="h-5 bg-[#7B61FF]"></div>
            <div className="bg-[#19144E] pt-[67px] px-[32px]">
              <h3 className="text-[28px] font-semibold">Events</h3>
              <p className="text-xl mt-5">
                Bringing developers together in-person and online. Stay in the
                know about upcoming events, catch up on content you missed, and
                connect with Google experts.
              </p>
              <button className="flex items-center border border-white py-3 px-[24px] mt-[40px]">
                See all events <RiArrowRightUpLine className="text-2xl" />
              </button>

              <div className="mt-[41px]">
                <img src={eventImg} alt="event" height="364px" />
              </div>
            </div>
          </div>

          <div className="w-[644px]">
            <div className="h-5 bg-[#33B9FB]"></div>
            <div className="bg-[#0C8ECD] pt-[67px] ">
              <div className="px-[32px]">
                <h3 className="text-[28px] font-semibold">Community</h3>
                <p className="text-xl mt-5">
                  Bringing developers together in-person and online. Stay in the
                  know about upcoming events, catch up on content you missed,
                  and connect with Google experts.
                </p>
                <button className="flex items-center border border-white py-3 px-[24px] mt-[40px]">
                  Join our Community <RiArrowRightUpLine className="text-2xl" />
                </button>
              </div>

              <div className="mt-[81px]">
                <img src={communityImg} alt="community" height="364px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
