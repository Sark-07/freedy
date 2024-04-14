'use client'
import React from 'react';
import Image from 'next/image';
import { SignedIn } from '@clerk/nextjs';
import SidebarNav from './SidebarNav';
import Link from 'next/link';
const Sidebar = () => {
    return (
        <aside className='min-w-72 border-r hidden sm:flex flex-col gap-4 py-8 px-4 items-baseline'>
            <div className="logo">
            <Link href={'/'} className="flex px-4 py-2 gap-4 items-center">
                <Image width={40} height={40} src={'/assets/logo.png'} alt='Logo' />
                <h2 className='text-3xl font-bold tracking-tight'>
                    Freedy
                </h2>
            </Link>
            </div>
            <div className='px-3 py-2 w-full h-full'>
                <nav className='space-y-1 h-full'>
                    <SignedIn>
                        <SidebarNav/>
                    </SignedIn>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;


