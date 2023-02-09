
import {RiCloseLine, RiArrowRightUpLine} from 'react-icons/ri'
import { Link, animateScroll as scroll } from "react-scroll";


function Modal({handleClick}) {
  return (
    <div className='modal '>
      <div className='mx- md:container md:mx-auto'>
        <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-[674]'>Menu</h2>
            <div className='bg-white p-2 rounded-[7.2px]' onClick={handleClick}>
                <RiCloseLine size={20} color={'#000000'}/>
            </div>
        </div>

        <ul className='nav-list'>
          <li>
            <Link to="programmes" smooth={true} duration={500}>
            Programmes
            </Link>
          </li>
          <li>
            <Link to="events" smooth={true}  duration={500}>
            Events
            </Link>
          </li>
          <li>
            <Link to="partners" smooth={true} duration={500}>
            Contact Us
            </Link>
          </li>
          <li>
            <Link to="news" smooth={true} offset={-50} duration={500}>
            News
            </Link>
          </li>
        </ul>

        <div className='py-3 px-6 font-semibold flex justify-start items-center border border-white w-[219px] mx-auto mt-[176px] hover:bg-white hover:text-black'>
        Become a Partner <RiArrowRightUpLine className='ml-2'/>
        </div>

        <div className='mt-[223px] text-center'>
          <p className='font-[674] text-base'>Skill-Up Aks</p>
          <p className='text-sm'>Skill-up@Copyright</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
