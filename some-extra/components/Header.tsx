
import React from 'react';
import Link from 'next/link';
import LanguageMenu from './LanguageMenu';

const Header = () => {
  return (
    <nav className='flex items-center justify-between px-16 py-3 shadow-md bg-paper'>
      <Link href="/" passHref>
        <div className='flex items-center gap-3 pointer'>
          <h1 className='text-2xl font-bold tracking-wider text-white'>
            CodeEdit
          </h1>
        </div>
      </Link>

      {/* Navigation Button */}

      <div className='flex items-center justify-center gap-5 text-yellow-100'>
        {/* Change the orientation of editors (only for webD view) */}
      <LanguageMenu/>
        {/* Choose Language Option */}

        {/* Opens Setting Model */}
      </div>
    </nav>
  );
};

export default Header;
