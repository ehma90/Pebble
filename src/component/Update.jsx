import {RiArrowRightUpLine} from 'react-icons/ri'
import image1 from '../assets/image1.svg'
import image2 from '../assets/image2.svg'
import image3 from '../assets/image3.svg'

function Update() {
  return (
    <section className='bg-[#ECEAF8] py-[64px] md:py-[100px] '>
      <div name="news" className='container mx-auto'>
          <h2 className='text-center text-[28px] md:text-[40px] font-semibold text-[#19144E]'>News Updates</h2>
          <div className='flex flex-col items-center md:flex-row justify-between gap-[25px] mt-[52px] mx-4'>
            <div className='news-blog'>
              <img src={image1} alt="News Update" className='w-full' />
              <h3 className='font-medium text-base md:text-xl text-[#19144E] mt-4'>Providing Sustainable growth to skill </h3>
              <p className='text-sm md:text-base text-[#19144E]/70 mt-3'>Providing Sustainable growth to skill acquisition in akwa-ibom state and Africa</p>

              <button className="flex items-center underline mt-[47px] font-semibold text-[#7B61FF]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button>
            </div>
            <div className='news-blog'>
              <img src={image2} alt="News Update" className='w-full'/>
              <h3 className='font-medium text-xl text-[#19144E] mt-4'>Inventing the wheel in skill acquisition</h3>
              <p className='text-[#19144E]/70 mt-3'>Providing Sustainable growth to skill acquisition in akwa-ibom state and Africa</p>

              <button className="flex items-center underline mt-[47px] font-semibold text-[#7B61FF]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button>
            </div>
            <div className='news-blog'>
              <img src={image3} alt="News Update" className='w-full'/>
              <h3 className='font-medium text-xl text-[#19144E] mt-4'>Creating Amazon’s color wheel AI</h3>
              <p className='text-[#19144E]/70 mt-3'>Providing Sustainable growth to skill acquisition in akwa-ibom state and Africa</p>

              <button className="flex items-center underline mt-[47px] font-semibold text-[#7B61FF]">
                See More Details <RiArrowRightUpLine className="ml-2" />
              </button>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Update;
