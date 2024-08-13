import React, { useState } from 'react';
import rightslogo from '../images/leftarrow.svg';
import leftslogo from '../images/r-side.svg';
import search from '../images/search.svg';
import alignment from '../images/alignment.svg';
import greendot from '../images/greendot.svg';
import wordpress from '../images/wordpress.svg';
import squrepluse from '../images/square-plus.svg';
import plugins from '../images/maincontent/plug.svg';
import theme from '../images/maincontent/themes.svg';

const MainContent = () => {

    const [isshow, setisshow] = useState(false)

    return (




        <div className="flex-1 p-4 bg-white overflow-auto max-w-full  ">
            <div className="flex  flex-wrap items-center tex mb-4 gap-2 max-w-full max-h-96  m-2 lg:justify-start ">
                <h2 className="text-lg sm:text-lg font-medium mr-2">Sites</h2>
                <div className="flex items-center gap-2">
                    <label className="pl-5">Show</label>
                    <select className="border rounded-md py-1.5 px-3 mx-1 shadow-md">
                        <option>10</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                    </select>
                    <span className="p-2">entries</span>
                </div>
                <div className='hidden md:block  lg:w-max lg:absolute lg:right-1 '>
                <div className="flex  items-center  ">
                    <div className="flex border-[#eaeaeaf5] rounded shadow-md ml-4 mr-2 ">
                        <input placeholder="Search" className="w-[150px] h-[35px] px-3 py-1.5 " />
                        <img src={search} alt="search logo" className="pr-8" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <select className="p-2 border-[#EAEAEA] rounded pr-20 shadow-md">
                            <option>Filter By: Tags</option>
                        </select>
                        <select className="p-2 border-[#EAEAEA] rounded pr-4 shadow-md">
                            <option>Bulk Actions</option>
                        </select>
                        <img src={alignment} alt="alignment" className="border-[#EAEAEA] rounded mr-2 " />
                        </div>
                    </div>
                </div>
            </div>
            <div className='border rounded shadow-lg'>
            <div className="overflow-x-auto  ">
                <table className="min-w-[1000px] w-full bg-white border  ">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 pl-2 flex gap-2">
                                <input type="checkbox" className="mr-3" />
                                WordPress
                            </th>
                            <th className="py-2 px-2">Plugins</th>
                            <th className="py-2">Themes</th>
                            <th className="py-2">Last Syn</th>
                            <th className="py-2">Site Health</th>
                            <th className="py-2">Status Code</th>
                            <th className="py-2">Connected</th>
                            <th className="p-1">
                                <div class="relative inline-block text-left">
                                    <div>
                                        <button type="button" onClick={() => { setisshow(!isshow) }} >
                                            <img src={squrepluse} alt='button' />

                                        </button>
                                    </div>
                                    {isshow ? <div class="absolute right-0  mt-2 w-40 origin-top-right divide-y  border-white  rounded    ring-opacity-5 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className='my-1  bg-white border-white rounded shadow-md p-0.5'>
                                        <div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >State</a>
                                        </div>
                                        <div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Site</a>
                                        </div>
                                        <div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Site URL</a>
                                        </div><div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Updates</a>
                                        </div><div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Plugins</a>
                                        </div><div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Themes</a>
                                        </div><div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Last Sync</a>
                                        </div><div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Site Health</a>
                                        </div><div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Status Code</a>
                                        </div><div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Connected</a>
                                        </div><div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Client</a>
                                        </div><div className=" flex  bg-[#F4EBFF] border-white rounded border-spacing-1 my-0.5" role="none">
                                            <input type="checkbox" className="ml-3" />
                                            <a class="block px-3 text-md font-normal my-1" >Tag</a>
                                        </div>
                                        
                                        </div>

                                    </div> : ''
                                    }

                                </div>  </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className=" flex gap-2 py-2">
                                <input type="checkbox" className="m-2" />
                                <img src={wordpress} alt="wordpress" className="py-2 pl-1" />
                            </td>
                            <td className="mr-4 pl-7">
                                <img src={plugins} alt="plugins" />
                            </td>
                            <td className="py-1 pl-4">
                                <img src={theme} alt="themes" />
                            </td>
                            <td className="py-2 px-3">
                                May 24, 2024 - 4:52 PM
                            </td>
                            <td className="flex gap-2 pl-4">
                                <img src={greendot} alt="greendot" />
                                Good
                            </td>
                            <td>0 - OK</td>
                            <td>May 01, 2024</td>
                        </tr>

                        <tr className="border-b">
                            <td className=" flex gap-2 py-2">
                                <input type="checkbox" className="m-2" />
                                <img src={wordpress} alt="wordpress" className="py-2 pl-1" />
                            </td>
                            <td className="mr-4 pl-7">
                                <img src={plugins} alt="plugins" />
                            </td>
                            <td className="py-1 pl-4">
                                <img src={theme} alt="themes" />
                            </td>
                            <td className="py-2 px-3">
                            May 21, 2024 - 11:11 AM
                            </td>
                            <td className="flex gap-2 pl-4">
                                <img src={greendot} alt="greendot" />
                                Good
                            </td>
                            <td>0 - OK</td>
                            <td>May 06, 2024</td>
                        </tr>

                        <tr className="border-b">
                            <td className=" flex gap-2 py-2">
                                <input type="checkbox" className="m-2" />
                                <img src={wordpress} alt="wordpress" className="py-2 pl-1" />
                            </td>
                            <td className="mr-4 pl-7">
                                <img src={plugins} alt="plugins" />
                            </td>
                            <td className="py-1 pl-4">
                                <img src={theme} alt="themes" />
                            </td>
                            <td className="py-2 px-3">
                            May 15, 2024 - 4:52 PM
                            </td>
                            <td className="flex gap-2 pl-4">
                                <img src={greendot} alt="greendot" />
                                Good
                            </td>
                            <td>0 - OK</td>
                            <td>May 07, 2024</td>
                        </tr><tr className="border-b">
                            <td className=" flex gap-2 py-2">
                                <input type="checkbox" className="m-2" />
                                <img src={wordpress} alt="wordpress" className="py-2 pl-1" />
                            </td>
                            <td className="mr-4 pl-7">
                                <img src={plugins} alt="plugins" />
                            </td>
                            <td className="py-1 pl-4">
                                <img src={theme} alt="themes" />
                            </td>
                            <td className="py-2 px-3">
                            May 24, 2024 - 10:10 PM
                            </td>
                            <td className="flex gap-2 pl-4">
                                <img src={greendot} alt="greendot" />
                                Good
                            </td>
                            <td>0 - OK</td>
                            <td>May 12, 2024</td>
                        </tr><tr className="border-b">
                            <td className=" flex gap-2 py-2">
                                <input type="checkbox" className="m-2" />
                                <img src={wordpress} alt="wordpress" className="py-2 pl-1" />
                            </td>
                            <td className="mr-4 pl-7">
                                <img src={plugins} alt="plugins" />
                            </td>
                            <td className="py-1 pl-4">
                                <img src={theme} alt="themes" />
                            </td>
                            <td className="py-2 px-3">
                            May 20, 2024 - 4:52 PM
                            </td>
                            <td className="flex gap-2 pl-4">
                                <img src={greendot} alt="greendot" />
                                Good
                            </td>
                            <td>0 - OK</td>
                            <td>May 16, 2024</td>
                        </tr><tr className="border-b">
                            <td className=" flex gap-2 py-2">
                                <input type="checkbox" className="m-2" />
                                <img src={wordpress} alt="wordpress" className="py-2 pl-1" />
                            </td>
                            <td className="mr-4 pl-7">
                                <img src={plugins} alt="plugins" />
                            </td>
                            <td className="py-1 pl-4">
                                <img src={theme} alt="themes" />
                            </td>
                            <td className="py-2 px-3">
                            May 19, 2024 - 9:25 PM
                            </td>
                            <td className="flex gap-2 pl-4">
                                <img src={greendot} alt="greendot" />
                                Good
                            </td>
                            <td>0 - OK</td>
                            <td>May 20, 2024</td>
                        </tr><tr className="border-b">
                            <td className=" flex gap-2 py-2">
                                <input type="checkbox" className="m-2" />
                                <img src={wordpress} alt="wordpress" className="py-2 pl-1" />
                            </td>
                            <td className="mr-4 pl-7">
                                <img src={plugins} alt="plugins" />
                            </td>
                            <td className="py-1 pl-4">
                                <img src={theme} alt="themes" />
                            </td>
                            <td className="py-2 px-3">
                            May 16, 2024 - 10:00 AM
                            </td>
                            <td className="flex gap-2 pl-4">
                                <img src={greendot} alt="greendot" />
                                Good
                            </td>
                            <td>0 - OK</td>
                            <td>May 21, 2024</td>
                        </tr><tr className="border-b">
                            <td className=" flex gap-2 py-2">
                                <input type="checkbox" className="m-2" />
                                <img src={wordpress} alt="wordpress" className="py-2 pl-1" />
                            </td>
                            <td className="mr-4 pl-7">
                                <img src={plugins} alt="plugins" />
                            </td>
                            <td className="py-1 pl-4">
                                <img src={theme} alt="themes" />
                            </td>
                            <td className="py-2 px-3">
                            May 12, 2024 - 1:51 PM
                            </td>
                            <td className="flex gap-2 pl-4">
                                <img src={greendot} alt="greendot" />
                                Good
                            </td>
                            <td>0 - OK</td>
                            <td>May 24, 2024</td>
                        </tr><tr className="border-b">
                            <td className=" flex gap-2 py-2">
                                <input type="checkbox" className="m-2" />
                                <img src={wordpress} alt="wordpress" className="py-2 pl-1" />
                            </td>
                            <td className="mr-4 pl-7">
                                <img src={plugins} alt="plugins" />
                            </td>
                            <td className="py-1 pl-4">
                                <img src={theme} alt="themes" />
                            </td>
                            <td className="py-2 px-3">
                            May 25, 2024 - 4:42 AM
                            </td>
                            <td className="flex gap-2 pl-4">
                                <img src={greendot} alt="greendot" />
                                Good
                            </td>
                            <td>0 - OK</td>
                            <td>May 25, 2024</td>
                        </tr>
                        <tr className="border-b">
                            <td className=" flex gap-2 py-2">
                                <input type="checkbox" className="m-2" />
                                <img src={wordpress} alt="wordpress" className="py-2 pl-1" />
                            </td>
                            <td className="mr-4 pl-7">
                                <img src={plugins} alt="plugins" />
                            </td>
                            <td className="py-1 pl-4">
                                <img src={theme} alt="themes" />
                            </td>
                            <td className="py-2 px-3">
                            June 13, 2024 - 4:52 PM
                            </td>
                            <td className="flex gap-2 pl-4">
                                <img src={greendot} alt="greendot" />
                                Good
                            </td>
                            <td>0 - OK</td>
                            <td>June 06, 2024</td>
                        </tr>              </tbody>
                </table>
               
            </div>
            <div className="flex max-w-full items-center p-4 bg-white justify-between   ">
                    <span className="text-[#1C1C1C99]">Showing 1 to 10 of 18 entries</span>
                    <div className="flex space-x-2 pt-4  ">
                        <button><img src={rightslogo} alt="rightlogo" /></button>
                        <button className="w-7 h-7 border border-[#882EFD] rounded-full bg-[#882EFD] text-white">1</button>
                        <button className="w-7 h-7 border border-[#882EFD] rounded-full text-[#882EFD]">2</button>
                        <button className="w-7 h-7 border border-[#882EFD] rounded-full text-[#882EFD]">3</button>
                        <button><img src={leftslogo} alt="leftlogo" /></button>
                    </div>
                </div>
            </div>



            <div className="flex justify-between items-center mt-4">
                <p className="ml-5 text-sm">Copyright ©2024 Diginnovators</p>
                <div className="flex gap-4 text-[#882EFD]">
                    <p>Privacy Policy</p>
                    <p>Terms of Conditions</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
