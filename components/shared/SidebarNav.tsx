import { navLinks } from '@/app/constants';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const SidebarNav = () => {
    const pathName = usePathname();

    return (
        <ul className='flex flex-col gap-1 w-full h-full'>
            {
                navLinks.map((link) => {
                    const active = link.route === pathName;
                    return (
                        <li key={link.route} className={`whitespace-nowrap flex items-center rounded-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground px-4 py-3 w-full ${active && 'text-accent-foreground bg-accent'} ${(link.label === 'Profile') && 'mt-auto'}`}><Link href={link.route} className={`inline-flex gap-3 text-sm sm:text-[1rem] items-center justify-start`}>
                            <Image src={link.icon} width={25} height={25} alt={link.label} />
                            {link.label}
                        </Link></li>
                    );
                })
            }
            <li className='whitespace-nowrap flex items-center rounded-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground px-4 py-2 w-full'>
                <UserButton afterSignOutUrl='/' showName />
            </li>
        </ul>
    )
}

export default SidebarNav