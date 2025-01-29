import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='py-2 px-1'>
      <footer className="bg-white rounded-lg shadow text-center">
        <div className="layout-footer py-2 text-sm">
          <span>Copyright © {currentYear}</span> <span className="font-semibold"> | </span>
          <a
            href="https://www.securityium.com"
            className='underline text-[#eb1f36]'
            target="_blank"
            rel="noopener noreferrer"
          >
            Task Management App
          </a>
          <span className="font-semibold"> | </span>
          <span>All rights reserved</span>
          <span className="font-semibold"> | </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
