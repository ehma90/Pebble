

import { RiArrowRightUpLine, RiMenu4Fill } from "react-icons/ri";
import { Link, animateScroll as scroll } from "react-scroll";

export function Navbar({handleClick}) {
  
  return (
    <nav className=" mx-4 md:container md:mx-auto ">
      <div className="flex justify-between items-center mt-7">
        <Link to="home" smooth={true} duration={500} className="font-[674] text-2xl text-[#7B61FF]">
          PEBBLE
        </Link>

        <div className="md:hidden p-2 bg-[#19144E] rounded-[7.2px]" onClick={handleClick}>
          <RiMenu4Fill/>
        </div>

        <div className="hidden md:flex md:items-center md:gap-x-[48px]">
          <ul className="flex gap-x-[19px]">
            <li className="cursor-pointer">
              <Link to="programmes" smooth={true} duration={500} className="font-[674] text-[16px] text-[#19144eb3]/70">
                Programmes
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="events" smooth={true}  duration={500} className="font-[674] text-[16px] text-[#19144eb3]/70">Events</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="partners" smooth={true} duration={500} className="font-[674] text-[16px] text-[#19144eb3]/70">
                Contact Us
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="news" smooth={true} offset={-50} duration={500} className="font-[674] text-[16px] text-[#19144eb3]/70">News</Link>
            </li>
          </ul>
          <div className="flex items-center text-[#7B61FF] py-[10px] px-4 border border-[#7B61FF] cursor-pointer">
            Become a Partner <RiArrowRightUpLine className="ml-2 w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
}
