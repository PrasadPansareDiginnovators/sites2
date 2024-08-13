import React from 'react';
import dashboard from '../images/dash1.svg';
import site from '../images/sidebar/sites.svg';
import team from '../images/sidebar/team.svg';
import setting from '../images/sidebar/setting.svg';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#F7F7F8] border-r hidden md:block">
      <div className='my-2 items-center text-center py- 2'>
        <div className='flex items-center ml-5 hover:bg-[#E7D5FF] rounded-md m-3'>
          <img src={dashboard} alt='dashboard ' className='h-10 w-10' />
          <p className='my-3 py-1 pr-10 pl-3 text-sm font-semibold'>Dashboard</p>
        </div>
        <div className='flex items-center ml-5 hover:bg-[#E7D5FF] rounded-md m-3'>
          <img src={site} alt='site ' className='h-10 w-10' />
          <p className='my-3 py-1 pr-10 pl-3 text-sm font-semibold'>Sites</p>
        </div>
        <div className='flex items-center ml-5 hover:bg-[#E7D5FF] rounded-md m-3'>
          <img src={team} alt='team ' className='h-10 w-10' />
          <p className='my-3 py-1 pr-10 pl-3 text-sm font-semibold'>Team</p>
        </div>
        <div className='flex items-center ml-5 hover:bg-[#E7D5FF] rounded-md m-3'>
          <img src={setting} alt='setting ' className='h-10 w-10' />
          <p className='my-3 py-1 pr-10 pl-3 text-sm font-semibold'>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
