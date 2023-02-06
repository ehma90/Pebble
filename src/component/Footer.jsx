import React from 'react';

function Footer() {
  return (
    <footer className='bg-[#19144E] py-[50px]'>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
            <div>
                <h4 className='text-2xl font-[674]'>Skill-Up Aks</h4>
                <p>Skill-up@Copyright</p>
            </div>
            <div className='flex gap-x-6'>
                <p>Privacy Policy</p>
                <p>Terms and condition</p>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
