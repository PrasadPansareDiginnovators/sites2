import React from 'react';
import dawnline from '../images/dawnline1.svg';
import atsLogo from '../images/ATS.svg';
import logo1 from '../images/logo-1.svg';
import logo2 from '../images/logo-2.svg';
import logo3 from '../images/logo-3.svg';
import logo4 from '../images/logo-4.svg';
import logo5 from '../images/logo-5.svg';
import logo6 from '../images/plusgreen.svg';
import logo7 from '../images/profileright.svg';
import logo8 from '../images/logo-8.svg';

const Navbar = () => {
    return (
        <header className="flex flex-col items-center border-b px-6 bg-white max-w-full py-2 space-y-4 md:space-y-0 md:flex-row md:justify-between sm:justify-center">
            <div className='flex  flex-wrap items-center md:flex-row '>
            <div className="flex justify-center w-full md:w-auto mt-2 md:mt-0">
                <img src={dawnline} alt="dawnline" className="h-10" />
                <img src={atsLogo} alt="ATS" className="h-6 mt-6 pr-5 ml-2 " />
            </div>
            <div className="max-w-full  mt-1 lg:ml-32 ">
                <select className=" py-2 px-2 pr-40   border bg-[#F7F7F8] border-[#EAEAEA] rounded w-full  sm:justify-center  my-3   " name="workspace" id="workspace">
                    <option className="" value="" >Workspace Name</option>
                </select>
            </div>
            </div>
            <div className="flex justify-center space-x-2 md:space-x-4 w-full md:w-auto  ">
                <img src={logo1} alt="logo1" className="h-6 mt-3" />
                <img src={logo2} alt="logo2" className="h-6 mt-3" />
                <img src={logo3} alt="logo3" className="h-6 mt-3" />
                <img src={logo4} alt="logo4" className="h-6 mt-3" />
                <img src={logo5} alt="logo5" className="h-6 mt-3" />
                <img src={logo6} alt="logo6" className="h-6 mt-3" />
                <img src={logo7} alt="logo7" className="h-12" />
                <img src={logo8} alt="logo8" className="h-1.5 mt-5" />
            </div>
        </header>
    );
};

export default Navbar;
