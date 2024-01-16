'use client'
import React from 'react'
import { useState } from 'react';

const DropdownLink = ({ name, links }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div className="relative inline-block text-left">
        <div>
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
            {name}
            <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
  
        {isOpen && (
        <div className="origin-top-right z-50 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="grid grid-cols-2 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {links.map((link, index) => (
              <a href={link.href} key={index} className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{link.name}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownLink;