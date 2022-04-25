import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='bg-gradient-to-r from-primary-color to-custom-navy'>
            <div className='flex p-3 text flex-col lg:flex-row  text-white font-semibold font-sans uppercase tracking-wider text-md '>
                <div className='flex items-center justify-between'>
                    <div className=' mx-4 text-2xl font-bold tracking-wide hover:text-gray-200'>
                        <a href="#">KAGETS </a>
                    </div>
                    <div className='block lg:hidden focus:outline-none'>
                        <button onClick={() => setIsOpen(!isOpen)} className="transition-all duration-500 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path className={`${isOpen ? 'block ' : 'hidden '}`} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                            <path className={`${!isOpen ? 'block' : 'hidden '}`} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                </div>
                <ul className={` ${!isOpen ? 'block transition-all duration-500 ease-in-out' : 'hidden'} navbar-collapse flex py-4 lg:py-0 flex-col lg:flex-row justify-between w-full `}>
                    <li className='flex flex-col lg:flex-row '>
                        <a href="#" className='block px-4 py-5 hover:text-gray-200 hover:underline'>Beranda</a>
                        <a href="#" className='block px-4 py-5 hover:text-gray-200 hover:underline'>Berita</a>
                        <a href="#" className='block px-4 py-5 hover:text-gray-200 hover:underline'>Keluhan</a>
                        <a href="#" className='block px-4 py-5 hover:text-gray-200 hover:underline'>Tentang Kami</a>
                    </li>
                    <div className='flex flex-col lg:flex-row '>
                        <a href="#" className='block bg-custom-blue hover:bg-blue-500 rounded-xl px-4 py-5 hover:bg- items-center text-center hover:text-gray-200 hover:transition-all  duration-500'>Masuk</a>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
