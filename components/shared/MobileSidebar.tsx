'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { FaBarsStaggered } from "react-icons/fa6";
import SidebarNav from './SidebarNav'


const MobileSidebar = () => {
    return (
        <header className='border-b h-fit px-4 py-2 sm:hidden flex justify-between items-center'>
            <div className="logo">
                <Link href={'/'} className='flex gap-2 py-2 items-center justify-start'>
                    <Image src={'/assets/logo.png'} width={30} height={30} alt='Logo' />
                    <h2 className='font-bold text-xl'>Freedy</h2>
                </Link>
            </div>
            <nav>
                <SignedIn>
                    <div className='flex p-2 items-center gap-4 w-full'>
                        <UserButton afterSignOutUrl='/' />
                        <Sheet>
                            <SheetTrigger>
                                 <FaBarsStaggered />
                            </SheetTrigger>
                            <SheetContent className='flex flex-col items-baseline'>
                                <SheetTitle className="logo px-4 py-2">
                                    <Link href={'/'} className='flex gap-2 items-center justify-start'>
                                        <Image src={'/assets/logo.png'} width={25} height={25} alt='Logo' />
                                        <h2 className='font-bold text-xl'>Freedy</h2>
                                    </Link>
                                </SheetTitle>
                                <SidebarNav/>
                            </SheetContent>
                        </Sheet>
                    </div>
                </SignedIn>
            </nav>
        </header>
    )
}

export default MobileSidebar