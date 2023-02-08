import React from "react";

function Footer() {
  return (
    <footer className="bg-[#19144E] py-[50px]">
      <div className="container px-4 md:mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h4 className="text-[18px] md:text-2xl font-[674]">Skill-Up Aks</h4>
            <p className="text-[12px] md:text-base">Skill-up@Copyright</p>
          </div>
          <div className="text-sm md:text-base mt-[64px] md:mt-0 flex gap-x-6">
            <p>Privacy Policy</p>
            <p>Terms and condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
