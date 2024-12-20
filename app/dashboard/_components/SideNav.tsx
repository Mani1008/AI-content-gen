"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, Icon, Settings, Wallet } from 'lucide-react'
import { usePathname } from 'next/navigation'
import UsageTrack from './UsageTrack'

function SideNav() {

    const MenuList = [
        {
            name: 'Home',
            Icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            Icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            Icon: Wallet,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            Icon: Settings,
            path: '/dashboard/setting'
        }
    ]

    const path = usePathname();
    // useEffect(() => {
    //     console.log(path);

    // }, [])

    return (
        <div className='h-screen relative p-5 shadow-sm border'>
            <div className='flex justify-center'>
                <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
            </div>

            <hr className='my-5 border ' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <div className={`flex gap-2 mb-2 p-3 hover:bg-gradient-to-br from-blue-600 to to-pink-700 hover:text-white rounded-lg cursor-pointer items-center
                ${path === menu.path ? 'bg-violet-600 text-white' : ''}`}>
                        <menu.Icon className='h-6 w-6' />
                        <h2 className='text-sm'>{menu.name}</h2>
                    </div>
                ))}
            </div>

            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
            </div>
        </div>
    )
}

export default SideNav