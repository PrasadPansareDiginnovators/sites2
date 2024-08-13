import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Sites = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 ">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Sites;
