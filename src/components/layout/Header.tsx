'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const AnnouncementBar = () => {
    return (
        <div className='w-full bg-black py-2'>
            <div className='container mx-auto flex items-center justify-center px-8'>
                <span className='text-center text-sm font-medium tracking-wide text-white'>
                    Free shipping on all orders over $15.00 • FREE RETURNS!
                </span>
            </div>
        </div>
    )
}

const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrolledUp = currentScrollY < prevScrollY;

            if (scrolledUp) {
                setIsOpen(true);
            } else if (currentScrollY > 100) {
                setIsOpen(false)
            }

            setPrevScrollY(currentScrollY)
        }

        setPrevScrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [prevScrollY])


    return (
        <header className='w-full sticky top-0'>
            <div
                className={`w-full transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <AnnouncementBar />
                <div className='w-full flex justify-between items-center py-3 sm:py-4 bg-white/60 shadow-sm border-gray-100 backdrop-blur-sm'>
                    <div className='flex justify-between items-center container mx-auto px-8'>

                        <div className='flex flex-1 justify-start items-center sm:gap-6'>
                            <button className='text-gray-700 hover:text-gray-900 md:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
                            </button>

                            <nav className='hidden md:flex gap-4 lg:gap-6 text-sm font-medium'>
                                <Link href={'#'}>Shop</Link>
                                <Link href={'#'}>New Arrivals</Link>
                                <Link href={'#'}>Sale</Link>

                            </nav>
                        </div>

                        <Link href={'#'}>
                            DEAL
                        </Link>

                        <div className='flex flex-1 justify-end items-center gap-2'>
                            <button className='text-gray-700 hover:text-gray-900 hidden sm:block cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                            </button>

                            <Link href="/auth/sign-in">Sign In</Link>
                            <Link href="/auth/sign-up">Sign Up</Link>

                            <button className='text-gray-700 hover:text-gray-900 relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                                <span className='absolute -top-1 -right-1 bg-black text-white text-[10px] sm:text-xs w-3.5 h-3.5 sm:h-4 sm:w-4 rounded-full flex items-center justify-center'>
                                    0
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header